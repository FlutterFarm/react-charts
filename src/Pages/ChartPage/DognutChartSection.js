import React,{useEffect,useState,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function DognutChartSection (props) {
    let pieChartData = props.data['field'];  
    let pieChartLabels  = props.data['labels'];      
    let pieChartBackground = props.data['background_color'];          
    let pieChartBorder = props.data['border_color'];              
    const PieChartdatas = {
      labels: pieChartLabels,
      datasets: [
        {
          label: '# of Votes',
          data: pieChartData,
          backgroundColor: pieChartBackground,
          borderColor: pieChartBorder,
          borderWidth: 1,
          height : "350px",
          width : "350px",
        },
      ],
    }   
    const fetchPieData = useCallback(async () => {
        await db.collection("piechartdata").doc("1670778714002").onSnapshot((doc) => {
//          setPieChartData(doc.data()['field']);
//          setPieChartLabels(doc.data()['labels']);
//          setPieChartBackground(doc.data()['background_color']);
//          setPieChartBorder(doc.data()['border_color']);
        });    
    });    
    useEffect(() => {
//        fetchPieData();
      }, []);    
    return(
        <div className="card card-raised chartpadding">
        <div className="card-header bg-transparent">
            <div className="d-flex justify-content-between align-items-center">
                <div className="me-4">
                    <h2 className="card-title mb-0">Donut Chart</h2>
                </div>
            </div>
        </div>
        <div className="card-body text-center">
            <div className="row gx-4">
                <div className="col-12 col-xxl-10">
                    <Doughnut data={PieChartdatas} style={{"height": "325px!important","width": "385px!important"}}/>                  
                </div>
            </div>
        </div>
      </div>                          
    )
}
export default DognutChartSection;