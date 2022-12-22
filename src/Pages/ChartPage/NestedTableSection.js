import React,{useState,useEffect,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import "react-tabulator/lib/styles.css";
import "react-tabulator/lib/css/tabulator.min.css";
import { ReactTabulator } from "react-tabulator";

function NestedTableSection (props) {
    const columns = [
        {
          formatter: "rowSelection",
          titleFormatter: "rowSelection",
          align: "center",
          headerSort: false,
          cellClick: function(e, cell) {
            cell.getRow().toggleSelect();
          }
        },
        { title: "Name", field: "name", width: 350 },
        { title: "Location", field: "location", width: 350 },
        { title: "Gender", field: "gender", width: 150 },
        { title: "Favourite Color", field: "col", width: 150 },
        {
          title: "Date Of Birth",
          field: "dob",
          align: "center",
          sorter: "date",
          width: 150
        }
      ];
      console.log("data");
      console.log(props.data);
      let data = props.data;
      console.log(data);
      let options = {
        height:"311px",
        layout: "fitColumns",
        dataTree: true,
        dataTreeStartExpanded: true,
        dataTreeElementColumn: "name"
      }; 
      const fetchPieData = useCallback(async () => {
        await db.collection("nested_charts").doc("1670778714002").onSnapshot((doc) => {
//            setData([doc.data()]);
        });    
    });          
      useEffect(() => {
//        fetchPieData();
      }, []);                
    return(
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center chartpadding">
            <p className="hero-head">
                Nested Table
            </p>            
            <ReactTabulator
                data={data}
                columns={columns}
                tooltips={true}
                options={options}
            />

        </div>
    )
}
export default NestedTableSection;