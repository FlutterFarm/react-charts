import React,{useEffect,useState,useCallback} from "react";
import db from "../../Components/Database/Firebase";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartSection (props) {
    let pieChartData = props.data['field'];  
    let pieChartLabels = props.data['labels'];      
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
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center chartpadding d-flex">
            <div className="card rounded-3 text-black">
                <div className="card-body p-md-5 mx-md-4">                                                    
                    <p className="hero-head">
                        Pie chart
                    </p>         
                    {
                     props.data === undefined ? (
                      <h5>No Data Found</h5>
                      ) : (
                        <Pie data={PieChartdatas} style={{"height": "325px!important","width": "385px!important"}}/>                  
                      )
                    }                                                                                                       
                </div>
            </div>            
        </div>
    )
}
export default PieChartSection;