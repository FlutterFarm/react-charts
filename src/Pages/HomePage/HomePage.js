import React, { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import WhatsTodaySection from "../ChartPage/WhatsTodaySection";
import PieChartSection from "../ChartPage/PieChartSection";
import LineChartSection from "../ChartPage/LineChartSection";
import BarChartSection from "../ChartPage/BarChartSection";
import VisitorsBarSection from "../ChartPage/VisitorsBarSection";
import HorizontalBarChart from "../ChartPage/HorizontalBarChart";
import StackedChartSection from "../ChartPage/StackedChartSection";
import AreaChartSection from "../ChartPage/AreaChartSection";
import DognutChartSection from "../ChartPage/DognutChartSection";
import PolarChartSection from "../ChartPage/PolarChartSection";
import RadarChartSection from "../ChartPage/RadarChartSection";
import NestedTableSection from "../ChartPage/NestedTableSection";
import TreeChartSection from "../ChartPage/TreeChartSection";
import ProgressBarSection from "../ChartPage/ProgressBar";
import ValidateFunctions from "../../Functions/ValidateFunctions";
//import ERD from "../../Components/ERD";
import TreeData from "../../Data/TreeData";
import { Modal } from "react-bootstrap";
import $ from 'jquery'

import "./HomePage.css";
import './assets/css/jquery.flowchart.css';


const HomePage = () => {    
  let [whatsToday, setWhatsToday] = useState([]);
  let [pieData, setPieData] = useState([]);
  let [dognutData, setDognutData] = useState([]);
  let [polarData, setPolarData] = useState([]);
  let [verticalBarData, setVerticalBarData] = useState([]);
  let [horizontalBarData, setHorizontalBarData] = useState([]);
  let [stackedData, setStackedData] = useState([]);
  let [lineData, setLineData] = useState([]);
  let [areaData, setAreaData] = useState([]);
  let [radarData, setRadarData] = useState([]);
  let [progressBar, setProgressBar] = useState([]);  
  let [nestedData, setNestedData] = useState([]);
  let [treeData, setTreeData] = useState([]);
  let [modalDisplay, setmModalDisplay] = useState(false);    
  let [type,setType] = useState('');
  const [isCheckedStack, setIsCheckedStack] = useState(false);
  const [isCheckedHorizontalBar, setIsCheckedHorizontalBar]  = useState(false);
  const [isCheckedVerticalBar, setIsCheckedVerticalBar]  = useState(false);  
  const [isCheckedPie, setIsCheckedPie]  = useState(false);  
  const [isCheckedDonut, setIsCheckedDonut] = useState(false);  
  const [isCheckedLine, setIsCheckedLine] = useState(false);  
  const [isCheckedPolar, setIsCheckedPolar] = useState(false);      
  const [isCheckedArea, setIsCheckedArea] = useState(false);      

  const handleClose = () => {
      setmModalDisplay(false);    
  }      
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  const fetchData = () => {
    let url = localStorage.getItem("url");
    let uname = localStorage.getItem("uname");
    let password = localStorage.getItem("password");
    axios({
      method:'get', url,
      auth: {
          username: uname,
          password: password
      }
  })
  .then((response) => {
    let data = response.data;
    console.log("details");
//      console.log(data.filter(chart => chart.type.indexOf('nestedTable') !== -1));
    console.log(data);
    if(data.find(chart => chart.type === 'pie')){
      setPieData(data.find(chart => chart.type === 'pie'));
    }
    else{
      setPieData([]);
    }
    if(data.find(chart => chart.type === 'line')){
      setLineData(data.find(chart => chart.type === 'line'));
    }
    else{
      setLineData([]);
    }      
    if(data.find(chart => chart.type === 'area')){
      setAreaData(data.find(chart => chart.type === 'area'));
    }
    else{
      setAreaData([]);
    }            
    if(data.find(chart => chart.type === 'donut')){
      setDognutData(data.find(chart => chart.type === 'donut'));
    }
    else{
      setDognutData([]);
    }                  
    if(data.find(chart => chart.type === 'polar')){
      setPolarData(data.find(chart => chart.type === 'polar'));
    }
    else{
      setPolarData([]);
    }                        
    if(data.find(chart => chart.type === 'verticalBar')){
      setVerticalBarData(data.find(chart => chart.type === 'verticalBar'));
    }
    else{
      setVerticalBarData([]);
    }                              
    if(data.find(chart => chart.type === 'HorizontalBar')){
      setHorizontalBarData(data.find(chart => chart.type === 'HorizontalBar'));
    }
    else{
      setHorizontalBarData([]);
    }                                    
    if(data.find(chart => chart.type === 'stacked')){
      setStackedData(data.find(chart => chart.type === 'stacked'));
    }
    else{
      setStackedData([]);
    }                                          
    if(data.find(chart => chart.type === 'radar')){
      setRadarData(data.find(chart => chart.type === 'radar'));
    }
    else{
      setRadarData([]);
    }                                                
    if(data.find(chart => chart.type === 'tree')){
      setTreeData(data.find(chart => chart.type === 'tree'));
    }
    else{
      setTreeData([]);
    }                                                      
    if(data.find(chart => chart.type === 'whatstoday')){
      setWhatsToday(data.find(chart => chart.type === 'whatstoday'));
    }
    else{
      setWhatsToday([]);
    }                                                          
    if(data.find(chart => chart.type === 'progressbar')){
      setProgressBar(data.filter(chart => chart.type.indexOf('progressbar') !== -1));
    }
    else{
      setProgressBar([]);
    }                                                              
    setNestedData(data.filter(chart => chart.type.indexOf('nestedTable') !== -1));
  })
  .catch((error) => {
      console.log(error);
  });    
  }
  const showStackBar = (type) => {
    setType(type);
    setmModalDisplay(true);
  }
  useEffect(() => {
    onTop();
//    fetchData();
  }, []);
  return (
    <React.Fragment>
        <div id="wrapper">
          <Navbar name="HomePage"></Navbar>
            <section id="content-wrapper">
{/*              <div className="row justify-content-between align-items-center">
                <div className="col flex-shrink-0 mb-5 mb-md-0">
                    <h1 className="display-4 mb-0">Dashboard</h1>
                    <div className="text-muted">Sales overview &amp; summary</div>
                </div>
              </div>              
              <WhatsTodaySection data={whatsToday}></WhatsTodaySection> */}
              <div className="row">
{ /*                <div className="col-lg-4">
                  <div className="card card-raised chartpadding">
                    <div className="card-header bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="me-4">
                          <h2 className="card-title mb-0">Radar Chart</h2>
                        </div>
                        <div className="d-flex gap-2 me-n2">
                          <button onClick={showStackBar} className="btn btn-lg btn-text-primary btn-icon mdc-ripple-upgraded" type="button">+</button>                  
                        </div>                                                
                      </div>
                    </div>
                    <RadarChartSection data={radarData}></RadarChartSection>
                  </div><br></br>
                  {
                    isCheckedHorizontalBar ? (
                      <>
                        <HorizontalBarChart data={horizontalBarData}></HorizontalBarChart><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                  {
                    isCheckedVerticalBar ? (
                      <>
                        <BarChartSection data={verticalBarData}></BarChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                                    
                  <VisitorsBarSection data={whatsToday}></VisitorsBarSection>
                </div>
                <div className="col-lg-4">
                  {
                    isCheckedPie ? (
                      <>
                        <PieChartSection data={pieData}></PieChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                                                    
                  {
                    isCheckedStack ? (
                      <>
                      <StackedChartSection data={stackedData}></StackedChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }
                  {
                    isCheckedDonut ? (
                      <>
                        <DognutChartSection data={dognutData}></DognutChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                </div>                
                <div className="col-lg-4">
                  {
                    isCheckedLine ? (
                      <>
                        <LineChartSection data={lineData}></LineChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                  {
                    isCheckedPolar ? (
                      <>
                        <PolarChartSection data={polarData}></PolarChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                  {
                    isCheckedArea ? (
                      <>
                        <AreaChartSection data={areaData}></AreaChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                                                                  
                  <ProgressBarSection data={progressBar}></ProgressBarSection> 
                </div>  */}
                <div className="col-3">
                  <div className="card">
                    <div className="card-header bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="me-4 input-group mb-3" id="project_name_tag">
                          <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                          </span> 
                          <p className="card-title">Add New Project</p>                      
                        </div>
                        <div className="me-4 input-group mb-3" id="project_name_tags" style={{"display": "none"}}>
                          <p className="card-title" id="project_name_title"></p>                      
                        </div>                        
                        <div className="me-4 input-group mb-3" id="project_operator_tag" style={{"display": "none"}}>
                          <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-plus fa-stack-1x fa-inverse"></i>
                          </span> 
                          <p className="card-title">Add Operator</p>                      
                        </div>                        
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row gx-4">
                        <div className="col-12">
                          <div className="tree well" id="folder_structure" style={{"display": "none","overflowX":"hidden","overflowY":"scroll","height":"500px"}}>
                          <ul>
                              <li data-bs-toggle="collapse" type="button" data-bs-toggle="collapse" data-bs-target="#project_tree_tag" aria-expanded="false" aria-controls="project_tree_tag">
                                <span><i className="fa fa-folder"></i> </span> <a id="project_name_href"></a>
                                <div id="project_tree_tag"></div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
                <div className="col-9">
                  <div id="chart_container">
                    <div className="flowchart-example-container" id="flowchartworkspace"></div>
                  </div>
                  <div className="draggable_operators">
                    <div className="draggable_operators_label">
                    </div>
                    <div className="draggable_operators_divs">
                    </div>
                  </div>
                  <button className="create_operator btn btn-success create-button" style={{"display": "none"}}>Create operator</button>&nbsp;&nbsp;                  
                	<button className="delete_selected_button btn btn-success create-button" style={{"display": "none"}}>Delete selected operator / link</button>&nbsp;&nbsp;                  
                </div>
                  <div id="operator_properties" style={{"display": "block"}}>
{/*                    <label for="operator_title">Operator's title: <input className="form-control create-button" id="operator_title" type="text"/>
                    Background color: <input className="form-control create-button" id="operator_background_color" type="color"/>
                    Font color: <input className="form-control create-button" id="operator_font_color" type="color"/>  
                    </label> */}
                  </div>
                  <div id="link_properties" style={{"display": "block"}}>
{/*                    <label for="link_color">
                        Link's color: <input className="form-control create-button" id="link_color" type="color"/>
                        Link width: <select className="form-control create-button" id="link_width">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>                                                                                                                                                                                                                                          
                        </select>
                    </label>  */}
                  </div>
{/*                  <button className="create_operator btn btn-success create-button">Create operator</button>&nbsp;&nbsp;
                	<button className="delete_selected_button btn btn-success create-button">Delete selected operator / link</button>&nbsp;&nbsp;
                  	<button className="get_data btn btn-success create-button" id="get_data">Get data</button>&nbsp;&nbsp;
                  	<button className="set_data btn btn-success create-button" id="set_data">Set data</button>&nbsp;&nbsp;
                  	<button id="save_local" className="btn btn-success create-button">Save to local storage</button>&nbsp;&nbsp;
                  	<button id="load_local" className="btn btn-success create-button">Load from local storage</button>&nbsp;&nbsp;
                  	<div>
                  		<textarea id="flowchart_data" className="form-control create-button"></textarea>
                  	</div>                      */}
{/*                <ERD schema={TreeData} /> */}
{/*                <NestedTableSection data={nestedData}></NestedTableSection> */}

{/*                <TreeChartSection data={treeData}></TreeChartSection> */}
{/*                <PouchDB name="todoapp">
                  <Suspense fallback="loading...">
                    <Componente />
                    <ComponenteBusca />
                  </Suspense>
  </PouchDB>  */}                
              </div>
            </section>                        
            <div className="modal fade" data-bs-backdrop="static" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Project setup</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <div className="row form-ts-mod" id="project_modal" style={{"display": "none"}}>
                        <div className="col-md-12 col-12">
                          <label>Enter project name</label>
                          <input type="text" className="form-control" id="project_title"></input>
                        </div><br></br>                                                                                                                                          
                        <div className="col-md-12 col-12 text-center">
                          <button id="title_submit" className="btn btn-success">Submit</button>
                        </div>                                                                                                                 
                      </div>
                      <div className="row form-ts-mod" id="project_operator" style={{"display": "none"}}>
                        <div className="row" id="add_operator_field">
                          <div className="col-md-12 col-12">
                            <label>Enter title</label>
                            <input type="text" className="form-control" id="operator_title_add" placeholder="Operator title"></input>
                          </div>          
                          <div className="col-4">
                            <label>Background</label>
                            <input type="color" id="background-color-add" className="form-control"></input>
                            <br></br>                              
                          </div>
                          <div className="col-4">
                            <label>Alignment</label>
                            <select id="alignment-add" className="form-control">
                              <option value="center">Center</option>
                              <option value="right">Right</option>
                              <option value="left">Left</option>                                                        
                            </select>                          
                            <br></br>                              
                          </div>
                          <div className="col-4">
                            <label>Font color</label>
                            <input type="color" id="font-color-add" className="form-control"></input>
                            <br></br>                              
                          </div>                  
                        </div>                        
                        <div className="row" id="update_operator_field" style={{"display":"none"}}>
                          <div className="col-md-12 col-12">
                            <label>Enter title</label>
                            <input type="text" className="form-control" id="operator_title" placeholder="Operator title"></input>
                          </div>          
                          <div className="col-4">
                            <label>Background</label>
                            <input type="color" id="background-color" className="form-control"></input>
                            <br></br>                              
                          </div>
                          <div className="col-4">
                            <label>Alignment</label>
                            <select id="alignment" className="form-control">
                              <option value="center">Center</option>
                              <option value="right">Right</option>
                              <option value="left">Left</option>                                                        
                            </select>                          
                            <br></br>                              
                          </div>
                          <div className="col-4">
                            <label>Font color</label>
                            <input type="color" id="font-color" className="form-control"></input>
                            <br></br>                              
                          </div>                  
                        </div>
                        <div className="col-6" id="dynamic_field_input_show">
                          <div className="table-responsive">  
                              <table className="table table-bordered" id="dynamic_field">  
                                    <tr>  
                                        <td><input type="text" name="input[]" id="input_1" placeholder="input" className="form-control name_list" /></td>  
                                        <td><input type="color" name="input[]" id="input_fontcolor_1" placeholder="input" className="form-control name_list" /></td>                                          
                                        <td>
                                          <select id="input_alignment_1" className="form-control">
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                            <option value="left">Left</option>                                                        
                                          </select>                          
                                        </td>
                                        <td><button type="button" name="add" id="add" className="btn btn-success-color">+</button></td>  
                                    </tr>  
                              </table>  
                          </div>                      
                        </div>                                                                                                      
                        <div className="col-6" id="dynamic_field_output_show">
                          <div className="table-responsive">  
                              <table className="table table-bordered" id="dynamic_field_output">  
                                    <tr>  
                                        <td><input type="text" name="output[]" id="output_1" placeholder="output" className="form-control name_list" /></td>  
                                        <td><input type="color" name="output[]" id="output_fontcolor_1" placeholder="input" className="form-control name_list" /></td>                                          
                                        <td>
                                          <select id="output_alignment_1" className="form-control">
                                            <option value="center">Center</option>
                                            <option value="right">Right</option>
                                            <option value="left">Left</option>                                                        
                                          </select>                          
                                        </td>                                        
                                        <td><button type="button" name="add" id="addoutput" className="btn btn-success-color">+</button></td>  
                                    </tr>  
                              </table>  
                          </div>                      
                        </div>                                                                                                                        
                        <div className="col-6" id="dynamic_field_input_hide" style={{"display":"none"}}>
                          <div className="table-responsive">  
                            <table className="table table-bordered" id="dynamic_field_table_input">  

                              </table>  
                          </div>                      
                        </div>                                                                                                      
                        <div className="col-6" id="dynamic_field_output_hide" style={{"display":"none"}}>
                          <div className="table-responsive">  
                            <table className="table table-bordered" id="dynamic_field_table_output">  
                            </table>                            
                          </div>                      
                        </div>                                                                                                                                                
                        <div className="col-md-12 col-12 text-center">
                          <button id="operator_submit" className="btn btn-success" style={{"display":"block"}}>Submit</button>
{/*                          <button id="operator_update" className="btn btn-success" style={{"display":"none"}}>Update</button>&nbsp;&nbsp; */}
                          <button id="operator_delete" className="btn btn-danger" style={{"display":"none"}}>Delete this operator</button>                                                   
                        </div>                                                                                                                 
                      </div>                
                      <div className="row form-ts-mod" id="project_link" style={{"display": "none"}}>
                        <div className="col-6">
                          <label>link Color</label>
                          <input type="color" id="link_color" className="form-control"></input>
                          <br></br>                              
                        </div>
                        <div className="col-6">
                          <label>width</label>
                          <select className="form-control create-button" id="link_width">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>                                                                                                                                                                                                                                          
                          </select>                          
                          <br></br>                              
                        </div>
                        <div className="col-md-12 col-12 text-center">
                          <button id="link_delete" className="btn btn-danger">Delete this link</button>                                                   
                        </div>                                                                                                                 
                      </div>                                      
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </React.Fragment>
  );
};

export default HomePage;
