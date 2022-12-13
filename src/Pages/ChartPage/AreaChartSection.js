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
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center chartpadding d-flex">
            <div className="card rounded-3 text-black">
                <div className="card-body p-md-5 mx-md-4">                                                                
                    <p className="hero-head">
                        Area chart
                    </p>          
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
    )
}
export default AreaChartSection;