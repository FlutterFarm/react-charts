import React, { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import WhatsTodaySection from "../ChartPage/WhatsTodaySection";
import PieChartSection from "../ChartPage/PieChartSection";
import LineChartSection from "../ChartPage/LineChartSection";
import BarChartSection from "../ChartPage/BarChartSection";
import VisitorsBarSection from "../ChartPage/VisitorsBarSection";
import HorizontalBarChart from "../ChartPage/HorizontalBarChart";
import StackedChartSection from "../ChartPage/StackedChartSection";
import AreaChartSection from "../ChartPage/AreaChartSection";
import DognutChartSection from "../ChartPage/DognutChartSection";
import PolarChartSection from "../ChartPage/PolarChartSection";
import RadarChartSection from "../ChartPage/RadarChartSection";
import NestedTableSection from "../ChartPage/NestedTableSection";
import TreeChartSection from "../ChartPage/TreeChartSection";
import ProgressBarSection from "../ChartPage/ProgressBar";
import ValidateFunctions from "../../Functions/ValidateFunctions";
//import ERD from "../../Components/ERD";
import TreeData from "../../Data/TreeData";
import { Modal } from "react-bootstrap";
import $ from 'jquery'

import "./HomePage.css";
import './assets/css/jquery.flowchart.css';


const HomePage = () => {    
  let [whatsToday, setWhatsToday] = useState([]);
  let [pieData, setPieData] = useState([]);
  let [dognutData, setDognutData] = useState([]);
  let [polarData, setPolarData] = useState([]);
  let [verticalBarData, setVerticalBarData] = useState([]);
  let [horizontalBarData, setHorizontalBarData] = useState([]);
  let [stackedData, setStackedData] = useState([]);
  let [lineData, setLineData] = useState([]);
  let [areaData, setAreaData] = useState([]);
  let [radarData, setRadarData] = useState([]);
  let [progressBar, setProgressBar] = useState([]);  
  let [nestedData, setNestedData] = useState([]);
  let [treeData, setTreeData] = useState([]);
  let [modalDisplay, setmModalDisplay] = useState(false);    
  const [isCheckedStack, setIsCheckedStack] = useState(false);
  const [isCheckedHorizontalBar, setIsCheckedHorizontalBar]  = useState(false);
  const [isCheckedVerticalBar, setIsCheckedVerticalBar]  = useState(false);  
  const [isCheckedPie, setIsCheckedPie]  = useState(false);  
  const [isCheckedDonut, setIsCheckedDonut] = useState(false);  
  const [isCheckedLine, setIsCheckedLine] = useState(false);  
  const [isCheckedPolar, setIsCheckedPolar] = useState(false);      
  const [isCheckedArea, setIsCheckedArea] = useState(false);      

  const handleClose = () => {
      setmModalDisplay(false);    
  }      
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  const fetchData = () => {
    let url = localStorage.getItem("url");
    let uname = localStorage.getItem("uname");
    let password = localStorage.getItem("password");
    axios({
      method:'get', url,
      auth: {
          username: uname,
          password: password
      }
  })
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
    if(data.find(chart => chart.type === 'tree')){
      setTreeData(data.find(chart => chart.type === 'tree'));
    }
    else{
      setTreeData([]);
    }                                                      
    if(data.find(chart => chart.type === 'whatstoday')){
      setWhatsToday(data.find(chart => chart.type === 'whatstoday'));
    }
    else{
      setWhatsToday([]);
    }                                                          
    if(data.find(chart => chart.type === 'progressbar')){
      setProgressBar(data.filter(chart => chart.type.indexOf('progressbar') !== -1));
    }
    else{
      setProgressBar([]);
    }                                                              
    setNestedData(data.filter(chart => chart.type.indexOf('nestedTable') !== -1));
  })
  .catch((error) => {
      console.log(error);
  });    
  }
  const showStackBar = () => {
    setmModalDisplay(true);
  }
  useEffect(() => {
    onTop();
    fetchData();
  }, []);
  return (
    <React.Fragment>
        <div id="wrapper">
          <Navbar name="HomePage"></Navbar>
            <section id="content-wrapper">
              <div className="row justify-content-between align-items-center">
                <div className="col flex-shrink-0 mb-5 mb-md-0">
                    <h1 className="display-4 mb-0">Dashboard</h1>
                    <div className="text-muted">Sales overview &amp; summary</div>
                </div>
              </div>              
              <WhatsTodaySection data={whatsToday}></WhatsTodaySection>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card card-raised chartpadding">
                    <div className="card-header bg-transparent">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="me-4">
                          <h2 className="card-title mb-0">Radar Chart</h2>
                        </div>
                        <div className="d-flex gap-2 me-n2">
                          <button onClick={showStackBar} className="btn btn-lg btn-text-primary btn-icon mdc-ripple-upgraded" type="button">+</button>                  
                        </div>                                                
                      </div>
                    </div>
                    <RadarChartSection data={radarData}></RadarChartSection>
                  </div><br></br>
                  {
                    isCheckedHorizontalBar ? (
                      <>
                        <HorizontalBarChart data={horizontalBarData}></HorizontalBarChart><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                  {
                    isCheckedVerticalBar ? (
                      <>
                        <BarChartSection data={verticalBarData}></BarChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                                    
                  <VisitorsBarSection data={whatsToday}></VisitorsBarSection>
                </div>
                <div className="col-lg-4">
                  {
                    isCheckedPie ? (
                      <>
                        <PieChartSection data={pieData}></PieChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                                                    
                  {
                    isCheckedStack ? (
                      <>
                      <StackedChartSection data={stackedData}></StackedChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }
                  {
                    isCheckedDonut ? (
                      <>
                        <DognutChartSection data={dognutData}></DognutChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                </div>                
                <div className="col-lg-4">
                  {
                    isCheckedLine ? (
                      <>
                        <LineChartSection data={lineData}></LineChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                  {
                    isCheckedPolar ? (
                      <>
                        <PolarChartSection data={polarData}></PolarChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                  
                  {
                    isCheckedArea ? (
                      <>
                        <AreaChartSection data={areaData}></AreaChartSection><br></br>
                      </>                      
                    ) : (
                      <></>
                    )
                  }                                                                  
{/*}                  <ProgressBarSection data={progressBar}></ProgressBarSection> */}
                </div>
                  <div id="chart_container">
                    <div className="flowchart-example-container" id="flowchartworkspace"></div>
                  </div>
                  <div className="draggable_operators">
                    <div className="draggable_operators_label">
                    </div>
                    <div className="draggable_operators_divs">
                    </div>
                  </div>
                  <div id="operator_properties" style={{"display": "block"}}>
                    <label for="operator_title">Operator's title: <input className="form-control create-button" id="operator_title" type="text"/>
                    Background color: <input className="form-control create-button" id="operator_background_color" type="color"/>
{/*                    Font color: <input className="form-control create-button" id="operator_font_color" type="color"/>  */}
                    </label> 
                  </div>
                  <div id="link_properties" style={{"display": "block"}}>
                    <label for="link_color">
                        Link's color: <input className="form-control create-button" id="link_color" type="color"/>
                        Link width: <select className="form-control create-button" id="link_width">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>                                                                                                                                                                                                                                          
                        </select>
                    </label>
                  </div>
                  <button className="create_operator btn btn-success create-button">Create operator</button>&nbsp;&nbsp;
                	<button className="delete_selected_button btn btn-success create-button">Delete selected operator / link</button>&nbsp;&nbsp;
                  	<button className="get_data btn btn-success create-button" id="get_data">Get data</button>&nbsp;&nbsp;
                  	<button className="set_data btn btn-success create-button" id="set_data">Set data</button>&nbsp;&nbsp;
                  	<button id="save_local" className="btn btn-success create-button">Save to local storage</button>&nbsp;&nbsp;
                  	<button id="load_local" className="btn btn-success create-button">Load from local storage</button>&nbsp;&nbsp;
                  	<div>
                  		<textarea id="flowchart_data" className="form-control create-button"></textarea>
                  	</div>                      
{/*                <ERD schema={TreeData} /> */}
                <NestedTableSection data={nestedData}></NestedTableSection>

                <TreeChartSection data={treeData}></TreeChartSection>
{/*                <PouchDB name="todoapp">
                  <Suspense fallback="loading...">
                    <Componente />
                    <ComponenteBusca />
                  </Suspense>
  </PouchDB>  */}                
              </div>
            </section>                        
            <Modal size="md" show={modalDisplay} onHide={handleClose}>
                <div className="row">
                    <div className="col-12 text-end ">
                        <button
                        type="button"
                        onClick={handleClose}
                        className="text-secondary btn_close pe-4"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        >
                        <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div className="pb-5">
                  <div>
                    <div className="row">
                        <div className="col-12 text-center">
                        <h4 className="get-apk-free">Choose charts </h4>
                        <p className="input-text-mod">
                            
                        </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row pt-4 px-5 form-ts-mod">
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                name="HorizontalBar"
                                value={"HorizontalBar"}
                                checked={isCheckedHorizontalBar}
                                id="HorizontalBar"
                                onChange={(e) =>
                                  setIsCheckedHorizontalBar(ValidateFunctions.validateField(e.target.value, "HorizontalBar", "isCheckedHorizontalBar",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="HorizontalBar">
                                <img src="/assets/images/charts/Horizontal.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                                                                                                                                          
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                name="VerticalBar"
                                value={"VerticalBar"}
                                checked={isCheckedVerticalBar}
                                id="VerticalBar"
                                onChange={(e) =>
                                  setIsCheckedVerticalBar(ValidateFunctions.validateField(e.target.value, "VerticalBar", "isCheckedVerticalBar",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="VerticalBar">
                                <img src="/assets/images/charts/VerticalBar.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>     
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                name="Pie"
                                value={"Pie"}
                                checked={isCheckedPie}
                                id="Pie"
                                onChange={(e) =>
                                  setIsCheckedPie(ValidateFunctions.validateField(e.target.value, "Pie", "isCheckedPie",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="Pie">
                                <img src="/assets/images/charts/Pie.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                                                                                                                                                                                                                                                                                                                               
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                name="Stacked"
                                value={"Stacked"}
                                checked={isCheckedStack}
                                id="Stacked"
                                onChange={(e) =>
                                  setIsCheckedStack(ValidateFunctions.validateField(e.target.value, "Stacked", "isCheckedStack",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="Stacked">
                                <img src="/assets/images/charts/Stacked.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                                                                                                                      
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                id="Donut"
                                name="Donut"
                                value={"Donut"}
                                checked={isCheckedDonut}
                                onChange={(e) =>
                                  setIsCheckedDonut(ValidateFunctions.validateField(e.target.value, "Donut", "isCheckedDonut",e.target.checked))
                                }        
                            />
                              <label className="custom-control-label" for="Donut">
                                <img src="/assets/images/charts/Donut.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                        
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                id="Line"
                                name="Line"
                                value={"Line"}
                                checked={isCheckedLine}
                                onChange={(e) =>
                                  setIsCheckedLine(ValidateFunctions.validateField(e.target.value, "Line", "isCheckedLine",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="Line">
                                <img src="/assets/images/charts/Line.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                                                
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                id="Polar"
                                name="Polar"
                                value={"Polar"}
                                checked={isCheckedPolar}
                                onChange={(e) =>
                                  setIsCheckedPolar(ValidateFunctions.validateField(e.target.value, "Polar", "isCheckedPolar",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="Polar">
                                <img src="/assets/images/charts/Polar.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                                                                        
                        <div className="col-md-4 col-6">
                          <div className="custom-control custom-checkbox image-checkbox">
                            <input className="custom-control-input"
                                type="checkbox"
                                id="Area"
                                name="Area"
                                value={"Area"}
                                checked={isCheckedArea}
                                onChange={(e) =>
                                  setIsCheckedArea(ValidateFunctions.validateField(e.target.value, "Area", "isCheckedArea",e.target.checked))
                                }
                            />
                              <label className="custom-control-label" for="Area">
                                <img src="/assets/images/charts/Area.png" style={{"height":"100px","width":"100px"}} alt="#" className="img-fluid"/>
                              </label>
                          </div>
                        </div>                                                                                                
                    </div>
                  </div>
                </div>    
            </Modal>
        </div>
    </React.Fragment>
  );
};

export default HomePage;
