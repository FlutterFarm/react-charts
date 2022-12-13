import React, { Component } from "react";
import * as d3 from "d3";

const width = 400;
const height = 250;
const data = [50, 100, 150, 200, 250, 130, 210, 30, 170];
const padding = 4;

class BarChart extends Component {
  createBars() {
    let svg = d3
      .select("#bars")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * (width / data.length))
      .attr("y", d => height - d)
      .attr("width", width / data.length - padding)
      .attr("fill", "green");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => d)
      .attr(
        "x",
        (d, i) =>
          i * (width / data.length) + (width / data.length - padding) / 2
      )
      .attr("y", d => height - d);
  }

  componentDidMount() {
    this.createBars();
  }

  render() {
    return <div id="bars" />;
  }
}

export default BarChart;
