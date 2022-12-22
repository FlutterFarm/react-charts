import React,{useEffect,useState,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import {Chart as ChartJS,RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale,PointElement,LineElement,Filler,Tooltip,Legend);

function RadarChartSection (props) {
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
          text: 'Radar Chart',
        },
      },
    };        
    const fetchLineData = useCallback(async () => {
        await db.collection("linechartdata").doc("1670778714002").onSnapshot((doc) => {
//            setBarInnerData(doc.data()['datasets']);
//            setBarChartLabels(doc.data()['labels']);
        });    
    })  
    useEffect(() => {
//        fetchLineData();
      }, []);    
    return(
        <div className="card-body text-center">
            <div className="row gx-4">
                <div className="col-12 col-xxl-10">
                {
                  labels === undefined || datasets === undefined ? (
                  <h5>No Data Found</h5>
                  ) : (
                    <Radar data={BarChartData} />            
                  )
                }                                                                                
                </div>
            </div>
        </div>
    )
}
export default RadarChartSection;