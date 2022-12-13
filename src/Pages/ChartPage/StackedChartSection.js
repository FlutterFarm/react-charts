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
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center chartpadding d-flex">
            <div className="card rounded-3 text-black">
                <div className="card-body p-md-5 mx-md-4">                                                                
                    <p className="hero-head">
                        Stacked Bar chart
                    </p>            
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
    )
}
export default StackedChartSection;