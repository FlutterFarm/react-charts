import React,{useEffect,useState,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

function StackedChartSection (props) {
    const labels = props.data['labels'];
    const datasets = props.data['datasets'];
    const stackedBarChartData = {
      labels,
      datasets,
    };
    const options = {
        plugins: {
            title: {
              display: true,
              text: 'Bar Chart - Stacked',
            },
          },
          responsive: true,
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
    };        
    const fetchLineData = useCallback(async () => {
        await db.collection("linechartdata").doc("1670778714002").onSnapshot((doc) => {
//            setStackedBarInnerData(doc.data()['datasets']);
//            setStackedBarChartLabels(doc.data()['labels']);
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
                  <h2 className="card-title mb-0">Stacked Bar Chart</h2>
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
                  <Bar options={options} data={stackedBarChartData} />                  
                )
              }                                        
              </div>
          </div>
      </div>
    </div>                                
    )
}
export default StackedChartSection;