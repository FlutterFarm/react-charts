import React,{useEffect,useState,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function BarChartSection (props) {
  console.log(props);
    const labels = props.data['labels'];
    const datasets = props.data['datasets']
    const BarChartData = {
      labels,
      datasets,
    };
    console.log(BarChartData);
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Bar Chart',
        },
      },
    };        
    const fetchLineData = useCallback(async () => {
        await db.collection("linechartdata").doc("1670778714002").onSnapshot((doc) => {
//            setBarInnerData(doc.data()['datasets']);
//            setBarChartLabels(doc.data()['labels'])
        });    
    })  
    useEffect(() => {
//        fetchLineData();
      }, []);    
    return(
      <div className="card card-raised chartpadding accordion-item">
        <div className="card-header bg-transparent">
            <div className="d-flex justify-content-between align-items-center accordion-header">
                <div className="me-4">
                    <h2 className="card-title mb-0">Vertical Bar</h2>
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
                    <Bar options={options} data={BarChartData} />                  
                  )
                }
                </div>
            </div>
        </div>
      </div>            
    )
}
export default BarChartSection;