import './App.css';
//import React,{useState} from 'react';
//import BarChart from './BarChart';
import * as d3 from "d3";
import Bar from "./BarAnimated";
import Pie from "./PieGraph";
import { AreaChart, BarChart, LineChart, PieChart } from "react-charts-d3";
import React,{ useEffect, useLayoutEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
//import { Pie } from 'react-chartjs-2';
//ChartJS.register(ArcElement, Tooltip, Legend);


//import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
//import { Bar } from 'react-chartjs-2';
//import faker from 'faker';
//ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

//import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
//import { Line } from 'react-chartjs-2';
//import faker from 'faker';

//ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);

function App() {
  function randomNumber() {
    return Math.random() * (40 - 0) + 0;
}

const data1 = [
    { label: 'Group 1', value: randomNumber() },
    { label: 'Group 2', value: randomNumber() },
    { label: 'Group 3', value: randomNumber() },
];  
  const data = [
    {
      key: "Sanctioned",
      values: [
        { x: "May 1", y: 23, date: 1, month: 5 },
        { x: "May 2", y: 26, date: 2, month: 5 },
        { x: "May 3", y: 25, date: 3, month: 5 },
        { x: "May 4", y: 33, date: 4, month: 5 },
        { x: "May 5", y: 36, date: 5, month: 5 },
        { x: "May 6", y: 41, date: 6, month: 5 },
        { x: "May 7", y: 50, date: 7, month: 5 },
        { x: "May 8", y: 47, date: 8, month: 5 },
        { x: "May 9", y: 32, date: 9, month: 5 },
        { x: "May 10", y: 26, date: 10, month: 5 },
        { x: "May 11", y: 12, date: 11, month: 5 },
        { x: "May 12", y: 26, date: 12, month: 5 }
      ]
    },
    {
      key: "Unsanctioned",
      values: [
        { x: "May 1", y: 15, date: 1, month: 5 },
        { x: "May 2", y: 17, date: 2, month: 5 },
        { x: "May 3", y: 22, date: 3, month: 5 },
        { x: "May 4", y: 27, date: 4, month: 5 },
        { x: "May 5", y: 31, date: 5, month: 5 },
        { x: "May 6", y: 32, date: 6, month: 5 },
        { x: "May 7", y: 39, date: 7, month: 5 },
        { x: "May 8", y: 50, date: 8, month: 5 },
        { x: "May 9", y: 34, date: 9, month: 5 },
        { x: "May 10", y: 21, date: 10, month: 5 },
        { x: "May 11", y: 19, date: 11, month: 5 },
        { x: "May 12", y: 44, date: 12, month: 5 }
      ]
    }
  ];  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isValidDate, setValidDate] = useState(true);
  const [chartData, setChartData] = useState(data);
  const [realData, setRealData] = useState(data);

  useEffect(() => {
    if (
      endDate.getDate() > 12 ||
      endDate.getDate() < 1 ||
      startDate.getDate() < 1 ||
      startDate.getDate() > 12 ||
      startDate.getDate() >= endDate.getDate() ||
      startDate.getMonth() !== endDate.getMonth() ||
      startDate.getFullYear() !== 2022 ||
      endDate.getFullYear() !== 2022
    ) {
      setValidDate(false);
      console.log("Invalid dates");
    } else {
      setValidDate(true);
      realData.forEach((d) => {
        let filtered = d.values.filter(function (data) {
          //console.log(d);
          // console.log(startDate.getMonth());
          //console.log(startDate.getDate());
          return (
            data.date >= startDate.getDate() &&
            data.date <= endDate.getDate() &&
            data.month === startDate.getMonth() + 1
          );
        });
        //console.log(filtered);
        d.values = filtered;
      });
      console.log("Valid dates");
    }
    setChartData(realData);
    setRealData(data);
    // console.log(startDate.getMonth());
    // console.log(endDate.getFullYear());
  }, [startDate, endDate, realData]);

  useEffect(() => {
    console.log(chartData);
  }, [chartData]);  
  const month = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];  
  const generateData1 = (value = 1000, length = 12) =>
  d3.range(length).map((item, index) => ({
    index: index,
    month: month[index],
    value: Math.random() * value
  }));

  const generateData = (value, length = 5) =>
    d3.range(length).map((item, idx) => ({
      date: idx,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [datas, setData] = useState(generateData());
  const changeData = () => {
    setData(generateData());
  };  

//const data = {
//  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//  datasets: [
//    {
//      label: '# of Votes',
//      data: [12, 19, 3, 5, 2, 3],
//      backgroundColor: [
//        'rgba(255, 99, 132, 0.2)',
//        'rgba(54, 162, 235, 0.2)',
//        'rgba(255, 206, 86, 0.2)',
//        'rgba(75, 192, 192, 0.2)',
//        'rgba(153, 102, 255, 0.2)',
//        'rgba(255, 159, 64, 0.2)',
//      ],
//      borderColor: [
//        'rgba(255, 99, 132, 1)',
//        'rgba(54, 162, 235, 1)',
//        'rgba(255, 206, 86, 1)',
//        'rgba(75, 192, 192, 1)',
//        'rgba(153, 102, 255, 1)',
//        'rgba(255, 159, 64, 1)',
//      ],
//      borderWidth: 1,
//    },
//  ],
//};

//const options = {
//  responsive: true,
//  plugins: {
//    legend: {
//      position: 'top',
//    },
//    title: {
//      display: true,
//      text: 'Bar Chart',
//    },
//  },
//};

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//const data = {
//  labels,
//  datasets: [
//    {
//      label: 'Dataset 1',
//      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//      backgroundColor: 'rgba(255, 99, 132, 0.5)',
//    },
//    {
//      label: 'Dataset 2',
//      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//      backgroundColor: 'rgba(53, 162, 235, 0.5)',
//    },
//  ],
//};


//const options = {
//  responsive: true,
//  plugins: {
//    legend: {
//      position: 'top',
//    },
//    title: {
//      display: true,
//      text: 'Line Chart',
//    },
//  },
//};

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//const data = {
//  labels,
//  datasets: [
//    {
//      label: 'Dataset 1',
//      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//      borderColor: 'rgb(255, 99, 132)',
//      backgroundColor: 'rgba(255, 99, 132, 0.5)',
//    },
//    {
//      label: 'Dataset 2',
//      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//      borderColor: 'rgb(53, 162, 235)',
//      backgroundColor: 'rgba(53, 162, 235, 0.5)',
//    },
//  ],
//};
const [dataBar, setDataBar] = useState([
  generateData1(300, 12),
  generateData1(800000, 12)
]);



  return (
    <div className="App">
        <Bar
          dataA={dataBar[0]}
          dataB={dataBar[1]}
          width={900}
          height={400}
          title="Bar chart"
        />      
      <Pie
          data={datas}
          width={200}
          height={200}
          innerRadius={60}
          outerRadius={100}
      />      
      <div className="date-picker">
        <div>
          <p>Start date :&nbsp;</p>
          <DatePicker
            selected={startDate}
          />
        </div>
        <div>
          <p>End date :&nbsp;</p>
          <DatePicker
            selected={endDate}
          />
        </div>
      </div>
      <hr />
      <AreaChart
        data={chartData}
        showGrid={false}
        showLegend={true}
        useColorScale={true}
        colorScale={{
          from: "#00eeff",
          to: "#ff4800"
        }}
        axisConfig={{
          showXAxis: true,
          showXAxisLabel: true,
          xLabel: "",
          xLabelPosition: "right",
          showYAxis: true,
          showYAxisLabel: true,
          yLabel: "No of Files",
          yLabelPosition: "middle"
        }}
        xScaleType={"ordinal"}
      />

      <BarChart data={data} />

      <LineChart
        className="line-chart"
        data={data}
        margin={{ top: 40, left: 20, bottom: 20, right: 20 }}
      />      
    <PieChart data={data1} />      
{/*      <Pie data={data} />  */}
{/*      <Bar options={options} data={data} /> */}
{/*         <Line options={options} data={data} /> */}
    </div>
  );
}

export default App;
