import React,{useState} from "react";
import {
  DiagramEngine,
  DefaultNodeFactory,
  DefaultLinkFactory,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DefaultPortModel,
  DiagramWidget
} from "storm-react-diagrams";
import { distributeElements } from "../utils/DagreUtils";
import TreeData from "../Data/TreeData";
import TreeFolderData from "../Data/TreeFolderData";
import { Modal } from "react-bootstrap";
import ParentFolder from "./ParentFolder";
import SubFolder from "./SubFolder";

import "../style.css"

function getDistributedModel(engine, model) {
    
  const serialized = model.serializeDiagram();
  const distributedSerializedDiagram = distributeElements(serialized);

  //deserialize the model
  let deSerializedModel = new DiagramModel();
  deSerializedModel.deSerializeDiagram(distributedSerializedDiagram, engine);
  return deSerializedModel;
}

function ERD(props) {
    let [modalDisplay, setmModalDisplay] = useState(false);      
    let [data, setData] = useState("");
    let [indexs,setIndexs] = useState(0);
    let [subIndex,setSubIndex] = useState(0);
    let [changeType, setChangeType] = useState("");
    const [datas, setDatas] = useState(TreeData);    

    
  let nodes = []; //Holds Node Models to Pass to Engine
  let links = []; //Holds Link Models to Pass to Engine
  let tables = {}; //Holds references to tables
  let columns = {}; //Holds references to columns
  let distinctLinks = new Set();

  let schema = props.schema || [];

  if (schema === undefined || schema === 0) {
    return <div>Schema has no tables</div>;
  }

  const getTableKey = table => table.table_schema + "." + table.table_name;
  const handleClose = () => {
    setmModalDisplay(false);    
}      
  const addTable = table => {
    let table_key = getTableKey(table);

    //If table already exists soft alert user
    if (tables.hasOwnProperty(table_key)) {
      console.log(
        `Table ${table.table_schema} + ${
          table.table_name
        } already exists.  You likely have duplicate tables`
      );
      return tables[table_key];
    }

    let node = new DefaultNodeModel(table.table_name, "rgb(0,192,255)");
    tables[table_key] = node;

    //Add the Columns for the ports
    table.columns.forEach(col => {
      let inPort = node.addInPort(col.name);
      let outPort = node.addOutPort(" ");
      columns[table_key + "." + col.name] = {
        inPort,
        outPort
      };
    });

    return node;
  };

  //1) setup the diagram engine
  var engine = new DiagramEngine();
  engine.installDefaultFactories();

  //2) setup the diagram model
  var model = new DiagramModel();

  //3-A) create a table for each table in schema
  nodes = schema.map(table => addTable(table));

  //3-B) create links between tables for identified foreign keys
  // If there is a foreign key that references a table+column combination that does not
  // exist we will provide a soft alert and not make the link
  for (let table of schema) {
    for (let fk of table.foreign_keys) {
      let fromTableKey = getTableKey(table);
      let toTableKey = fk.toTableSchema + "." + fk.toTable;
      let fromColumnKey = fromTableKey + "." + fk.fromColumn;
      let toColumnKey = toTableKey + "." + fk.toColumn;
      let portFrom = columns[fromColumnKey];
      let portTo = columns[toColumnKey];
      if (!portFrom) {
        console.log(
          `${fromColumnKey} Column does not exist in schema.  The link from ${fromColumnKey} to ${toColumnKey} will not be added`
        );
        //We will skip this port and continue
        continue;
      }
      if (!portTo) {
        console.log(
          `${toColumnKey} Column does not exist in schema.  The link from ${fromColumnKey} to ${toColumnKey} will not be added`
        );
        //We will skip this port and continue
        continue;
      }

      //test for distinct link before pushing to model links
      if (distinctLinks.has(fromColumnKey + toColumnKey)) {
        console.log(
          `The link between ${fromColumnKey} to ${toColumnKey} has already been added`
        );
        continue;
      }

      //add both from and to and to and from links to distinct links
      distinctLinks.add(fromColumnKey + toColumnKey);
      distinctLinks.add(toColumnKey + fromColumnKey);
      links.push(portFrom.outPort.link(portTo.inPort));
    }
  }

  //4) add the models to the root graph
  model.addAll(...nodes, ...links);

  //5) load model into engine
  let distributedModel = getDistributedModel(engine, model); //distribures model
  engine.setDiagramModel(distributedModel);

  //6) render the diagram!

  const renderFolderItems = (TreeData) => {
    return (
        <ul>
          {TreeData.map((item, index) => {
            if (item.type === "file") {
              return <li key={index}>{item.name}</li>;
            }
            return (
              <li key={index}>
                {item.name}
                {renderFolderItems(item.children)}
              </li>
            );
          })}
        </ul>
    );
  };
  const searchInput = '';
  const onChange = (e) => {
  };
  const dataChange = (val,index) => {
    setmModalDisplay(true);   
    setData(val); 
    setIndexs(index);
    setChangeType("parent");
    console.log(val);
  }
  const dataChangesub = (val,index,subindex) => {
    setmModalDisplay(true);   
    setData(val); 
    setIndexs(index);
    setChangeType("child");    
    setSubIndex(subindex)
    console.log(val);
  }  
  const submit = () => {
    console.log(data);
    console.log(indexs);
    console.log(changeType);
    if(changeType === "parent"){
      schema[indexs]['table_name'] = data;
    }
    else{
      schema[indexs]['foreign_keys'][subIndex]['toTable'] = data;
    }
    console.log(schema);
    console.log(subIndex);
    setmModalDisplay(false);
  }
  const filterByQuery = (folderSystem, query) => {
    return folderSystem.reduce((searchResults, item) => {
      if (item.type === "file" && item.name.includes(query)) {
        return [...searchResults, item.name];
      } else if (item.type === "dir") {
        return [...searchResults, ...filterByQuery(item.children, query)];
      }
      return searchResults;
    }, []);
  };
  const filteredFolderSystem = filterByQuery(TreeFolderData, searchInput);
  return (
    <React.Fragment>
        <div className="col-6">
            <DiagramWidget
            allowLooseLinks={false}
            allowCanvasTranslation={true}
            allowCanvasZoom={true}
            maxNumberPointsPerLink={0}
            smartRouting={false}
            className="srd-demo-canvas"
            diagramEngine={engine}
           />
        </div>
        <div className="col-6">
        <div className="folders">
      {datas.map((folder, i) => {
        // Get the folder in array
        const currentFolder = folder;
        // Is the folder opened or not
        const isFolderActive = [1,4];
        return (
            <div className="folder">
              <ul>
                <li onClick={e => dataChange(currentFolder.table_name,i)}>
                  <i className="fa fa-folder folder-icon"  />
                      <span className="folder-name">{currentFolder.table_name}</span>
                </li>
                {
                    folder['foreign_keys'].map((subfolder,j) => {
                      return (
                        <ul key={subfolder.toTable}>
                            <li onClick={e => dataChangesub(subfolder.toTable,i,j)}>
                                <i className="fa fa-folder folder-icon" />
                                    <span className="folder-name">{subfolder.toTable}</span>
                            </li>
                        </ul>
                      );
                    })
                }
              </ul>
            </div>            
        );
      })}
    </div>

{/*        <ul>
            <li key="dir"><i className="fa fa-folder folder-icon" /><a onClick={e => dataChange("table1",0)}>Table1</a></li>
            <ul>
                <li key="dir"><i className="fa fa-folder folder-icon" />Table2</li>
                <ul>
                    <li key="file">Table4</li>            
                    <li key="file">Table5</li>            
                    <li key="file">Table6</li>                                    
                </ul>
                <li key="dir"><i className="fa fa-folder folder-icon" />Table3</li>                
                <ul>
                    <li key="file">Table7</li>            
                    <li key="file">Table8</li>            
                    <li key="file">Table9</li>                                    
                </ul>                
            </ul>
        </ul>        */}
{/*        {renderFolderItems(TreeFolderData)} */}
        </div>
        <Modal size="md" show={modalDisplay} onHide={handleClose}>
                <div className="row">
                    <div className="col-12 text-end ">
                        <button
                        type="button"
                        onClick={handleClose}
                        className="text-secondary btn_close pe-4"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >
                        <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div className="pb-5">
                  <div>
                    <div className="row">
                        <div className="col-12 text-center">
                        <h4 className="get-apk-free">Change value </h4>
                        <p className="input-text-mod">
                            
                        </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row pt-4 px-5 form-ts-mod">
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="text"
                                name="HorizontalBar"
                                value={data}
                                id="data"
                                onChange={e => setData(e.target.value)}
                            />
                          </div>
                          <button className="btn btn-success" onClick={e=>submit()}>Done</button>
                        </div>                                                                                                                                          
                    </div>
                  </div>
                </div>    
            </Modal>        
    </React.Fragment>
  );
}

export default ERD;
