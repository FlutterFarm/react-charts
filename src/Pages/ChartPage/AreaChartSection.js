import React,{useEffect,useState,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend);

function AreaChartSection (props) {
    const labels = props.data['labels'];
    const datasets = props.data['datasets'];
    const BarChartData = {
      labels,
      datasets,
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Area Chart',
          },
         },    
    };
    const fetchLineData = useCallback(async () => {
        await db.collection("areachartdata").doc("1670778714002").onSnapshot((doc) => {
//            setBarInnerData(doc.data()['datasets']);
//            setBarChartLabels(doc.data()['labels']);
        });    
    })  
    useEffect(() => {
//        fetchLineData();
      }, []);    
    return(
      <div className="card card-raised chartpadding">
      <div className="card-header bg-transparent">
          <div className="d-flex justify-content-between align-items-center">
              <div className="me-4">
                  <h2 className="card-title mb-0">Area Chart</h2>
              </div>
          </div>
      </div>
      <div className="card-body text-center">
          <div className="row gx-4">
              <div className="col-12 col-xxl-10">
              {
                labels === undefined || datasets === undefined ? (
                <h5>No Data Found</h5>
                ) : (
                  <Line options={options} data={BarChartData} />                  
                )
              }                                                                                  
              </div>
          </div>
      </div>
    </div>                                              
    )
}
export default AreaChartSection;