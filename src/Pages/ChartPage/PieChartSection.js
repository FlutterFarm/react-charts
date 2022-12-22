import React,{useEffect,useCallback,useRef} from "react";
import db from "../../Components/Database/Firebase";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie,getElementAtEvent } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartSection (props) {
    let pieChartData = props.data['field'];  
    let pieChartLabels = props.data['labels'];      
    let pieChartBackground = props.data['background_color'];          
    let pieChartBorder = props.data['border_color'];       
    const chartRef = useRef();           
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
    const onClick = (event) => {
      const elem = getElementAtEvent(chartRef.current, event)
      
      console.log(elem[0].index, elem[0].datasetIndex)
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
      <div className="card card-raised chartpadding accordion-item">
        <div className="card-header bg-transparent">
            <div className="d-flex justify-content-between align-items-center accordion-header">
                <div className="me-4">
                    <h2 className="card-title mb-0">Pie Chart</h2>
                </div>
            </div>
        </div>
        <div className="card-body text-center">
            <div className="row gx-4">
                <div className="col-12 col-xxl-10">
                {
                  props.data === undefined ? (
                  <h5>No Data Found</h5>
                  ) : (
                    <Pie data={PieChartdatas} onClick={onClick} ref={chartRef} style={{"height": "325px!important","width": "385px!important"}}/>                  
                  )
                }                                                                                                       
                </div>
            </div>
        </div>
      </div>      
    )
}
export default PieChartSection;