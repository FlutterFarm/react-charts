import React, { useEffect,useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import PieChartSection from "../ChartPage/PieChartSection";
import LineChartSection from "../ChartPage/LineChartSection";
import BarChartSection from "../ChartPage/BarChartSection";
import HorizontalBarChart from "../ChartPage/HorizontalBarChart";
import StackedChartSection from "../ChartPage/StackedChartSection";
import AreaChartSection from "../ChartPage/AreaChartSection";
import DognutChartSection from "../ChartPage/DognutChartSection";
import PolarChartSection from "../ChartPage/PolarChartSection";
import RadarChartSection from "../ChartPage/RadarChartSection";
import NestedTableSection from "../ChartPage/NestedTableSection";
import "./HomePage.css";


const HomePage = () => {    
  let [pieData, setPieData] = useState([]);
  let [dognutData, setDognutData] = useState([]);
  let [polarData, setPolarData] = useState([]);
  let [verticalBarData, setVerticalBarData] = useState([]);
  let [horizontalBarData, setHorizontalBarData] = useState([]);
  let [stackedData, setStackedData] = useState([]);
  let [lineData, setLineData] = useState([]);
  let [areaData, setAreaData] = useState([]);
  let [radarData, setRadarData] = useState([]);
  let [nestedData, setNestedData] = useState([]);
  const routePath = useLocation();    
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  const fetchData = () => {
    axios
    .get(localStorage.getItem("url"))
    .then((response) => {
      let data = response.data;
      console.log("details");
//      console.log(data.filter(chart => chart.type.indexOf('nestedTable') !== -1));
      console.log(data);
      if(data.find(chart => chart.type === 'pie')){
        setPieData(data.find(chart => chart.type === 'pie'));
      }
      else{
        setPieData([]);
      }
      if(data.find(chart => chart.type === 'line')){
        setLineData(data.find(chart => chart.type === 'line'));
      }
      else{
        setLineData([]);
      }      
      if(data.find(chart => chart.type === 'area')){
        setAreaData(data.find(chart => chart.type === 'area'));
      }
      else{
        setAreaData([]);
      }            
      if(data.find(chart => chart.type === 'donut')){
        setDognutData(data.find(chart => chart.type === 'donut'));
      }
      else{
        setDognutData([]);
      }                  
      if(data.find(chart => chart.type === 'polar')){
        setPolarData(data.find(chart => chart.type === 'polar'));
      }
      else{
        setPolarData([]);
      }                        
      if(data.find(chart => chart.type === 'verticalBar')){
        setVerticalBarData(data.find(chart => chart.type === 'verticalBar'));
      }
      else{
        setVerticalBarData([]);
      }                              
      if(data.find(chart => chart.type === 'HorizontalBar')){
        setHorizontalBarData(data.find(chart => chart.type === 'HorizontalBar'));
      }
      else{
        setHorizontalBarData([]);
      }                                    
      if(data.find(chart => chart.type === 'stacked')){
        setStackedData(data.find(chart => chart.type === 'stacked'));
      }
      else{
        setStackedData([]);
      }                                          
      if(data.find(chart => chart.type === 'radar')){
        setRadarData(data.find(chart => chart.type === 'radar'));
      }
      else{
        setRadarData([]);
      }                                                
      setNestedData(data.filter(chart => chart.type.indexOf('nestedTable') !== -1));
    })
    .catch((error) => {
      console.log(error);
    });    
  }
  useEffect(() => {
    fetchData();
    onTop();
  }, []);
  return (
    <React.Fragment>
        <div id="wrapper">
          <Navbar name="HomePage"></Navbar>
            <section id="content-wrapper">
              <div className="row">
                <HorizontalBarChart data={horizontalBarData}></HorizontalBarChart>
                <PieChartSection data={pieData}></PieChartSection>
                <BarChartSection data={verticalBarData}></BarChartSection>

                <RadarChartSection data={radarData}></RadarChartSection>
                <DognutChartSection data={dognutData}></DognutChartSection>
                <StackedChartSection data={stackedData}></StackedChartSection>

                <LineChartSection data={lineData}></LineChartSection>
                <PolarChartSection data={polarData}></PolarChartSection>
                <AreaChartSection data={areaData}></AreaChartSection>

                <NestedTableSection data={nestedData}></NestedTableSection>
              </div>
            </section>                        
        </div>
    </React.Fragment>
  );
};

export default HomePage;
