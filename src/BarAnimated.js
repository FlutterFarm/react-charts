import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import * as d3 from 'd3';

const colors = ['#751b1a', '#2bbef5'];
const animationDuration = 250;
const animationConfig = {
  to: async (next, cancel) => {
    await next({ t: 1 });
  },
  from: { t: 0 },
  config: { duration: animationDuration },
  reset: true
};

const roundToSuperiorUnit = number => {
  const numString = Math.floor(number).toString();
  const numUnite = numString.length - 1;
  const num = parseInt(numString.charAt(0), 10) + 1;
  return Number(`${num}e${numUnite}`);
};

const LeftAxis = ({
  left,
  width,
  margin,
  maxA,
  format,
  ticksAmount,
  title
}) => {
  const axisRef = useRef(null);
  const stepA = Math.ceil(maxA / ticksAmount / 5) * 5;

  useEffect(() => {
    const leftAxis = d3.select(axisRef.current).call(
      d3
        .axisLeft(left)
        .tickSize(-width + margin.left + margin.right, 0, 0)
        .ticks(ticksAmount)
        .tickValues(d3.range(0, maxA + stepA, stepA))
        .tickFormat(format)
    );
    leftAxis
      .selectAll('text')
      .style('font-size', 16)
      .style('font-family', 'Lato, helvetica, arial, sans-serif')
      .attr('transform', 'translate(-10)');
    leftAxis.selectAll('line').style('stroke', '#979797');
    leftAxis.select('.domain').remove();
  }, [left, width, margin, ticksAmount, maxA, format, stepA]);

  return (
    <g>
      <g ref={axisRef} />
      <text
        fontSize={16}
        fontFamily="Lato, helvetica, arial, sans-serif"
        textAnchor="center"
        transform={`translate(-65, 215) rotate(-90)`}
      >
        {title}
      </text>
    </g>
  );
};

const RightAxis = ({
  right,
  width,
  margin,
  maxB,
  format,
  ticksAmount,
  title
}) => {
  const axisRef = useRef(null);
  const stepB = Math.ceil(maxB / ticksAmount / 5) * 5;

  useEffect(() => {
    const rightAxis = d3.select(axisRef.current).call(
      d3
        .axisRight(right)
        .tickSize(0)
        .ticks(ticksAmount)
        .tickValues(d3.range(0, maxB + stepB, stepB))
        .tickFormat(format)
    );
    rightAxis
      .selectAll('text')
      .style('font-size', 16)
      .style('font-family', 'Lato, helvetica, arial, sans-serif')
      .attr('transform', 'translate(10)');
    rightAxis.select('.domain').remove();
  }, [maxB, stepB, right, ticksAmount, format]);

  return (
    <g transform={`translate(${width - margin.left - margin.right}, 0)`}>
      <g ref={axisRef} />
      <text
        fontSize={16}
        fontFamily="Lato, helvetica, arial, sans-serif"
        textAnchor="center"
        transform={`translate(75, 215) rotate(-90)`}
      >
        {title}
      </text>
    </g>
  );
};

const BottomAxis = ({ x, height, margin }) => {
  const axisRef = useRef(null);

  useEffect(() => {
    d3.select(axisRef.current)
      .call(d3.axisBottom(x).tickSize(0))
      .selectAll('text')
      .style('text-anchor', 'center')
      .attr('dx', '-2.5em')
      .attr('dy', '3em')
      .attr('font-size', 12)
      .style('font-family', 'Lato, helvetica, arial, sans-serif')
      .attr('transform', 'rotate(-45)');
  }, [x]);

  return (
    <g
      ref={axisRef}
      transform={`translate(0, ${height - margin.top - margin.bottom})`}
    />
  );
};

const Rect = ({ data, previousData }) => {
  const [animatedProps, setAnimatedProps] = useSpring(() => animationConfig);
  setAnimatedProps(animationConfig);
  const interpolator = d3.interpolate(previousData, data);

  return (
    <animated.rect
      height={animatedProps.t.interpolate(t => interpolator(t).height)}
      width={data.width}
      transform={animatedProps.t.interpolate(
        t => `translate(${data.left}, ${interpolator(t).top})`
      )}
      fill={data.color}
    />
  );
};

const Bar = props => {
  // const format = d3.format('$,~s');
  const format = d3.format('~s');
  const ticksAmount = 4;
  const margin = {
    top: 100,
    right: 100,
    bottom: 100,
    left: 100
  };

  const cache = useRef([]);
  const chartRef = useRef();

  const maxA = roundToSuperiorUnit(
    props.dataA.reduce((a, e) => (e.value > a ? e.value : a), 0)
  );
  const maxB = roundToSuperiorUnit(
    props.dataB.reduce((a, e) => (e.value > a ? e.value : a), 0)
  );

  const x = d3
    .scaleBand()
    .range([0, props.width - margin.left - margin.right])
    .domain(props.dataA.map(d => d.month))
    .padding(0.4);

  const yLeft = d3
    .scaleLinear()
    .range([props.height - margin.top - margin.bottom, 0])
    .domain([0, maxA]);

  const yRight = d3
    .scaleLinear()
    .range([props.height - margin.top - margin.bottom, 0])
    .domain([0, maxB]);

  d3.formatDefaultLocale({
    decimal: ',',
    thousands: ' ',
    grouping: [3]
  });

  const dataMixed = [];
  [
    ...(props.dataA.length > props.dataB.length ? props.dataA : props.dataB)
  ].forEach((_, i) => {
    const width = x.bandwidth() / 2 - 1;
    dataMixed.push({
      ...props.dataA[i],
      width,
      top: yLeft(props.dataA[i].value),
      left: x(props.dataA[i].month),
      height:
        props.height - margin.top - margin.bottom - yLeft(props.dataA[i].value),
      color: colors[0]
    });
    dataMixed.push({
      ...props.dataB[i],
      width,
      top: yRight(props.dataB[i].value),
      left: x(props.dataB[i].month) + x.bandwidth() / 2 + 3,
      height:
        props.height -
        margin.top -
        margin.bottom -
        yRight(props.dataB[i].value),
      color: colors[1]
    });
  });

  useEffect(() => {
    cache.current = dataMixed;
  }, [dataMixed]);

  return (
    <div>
      <svg
        width={props.width}
        height={props.height}
        style={{ background: '#EEE', display: 'block' }}
        ref={chartRef}
      >
        <text
          x="20"
          y="40"
          fontWeight="bold"
          fontSize="16px"
          fontFamily="Lato, helvetica, arial, sans-serif"
          className="test"
        >
          {props.title}
        </text>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <LeftAxis
            left={yLeft}
            width={props.width}
            margin={margin}
            maxA={maxA}
            format={format}
            ticksAmount={ticksAmount}
            title="Left axis"
          />
          <RightAxis
            right={yRight}
            width={props.width}
            margin={margin}
            maxB={maxB}
            format={format}
            ticksAmount={ticksAmount}
            title="Right axis"
          />
          <BottomAxis x={x} height={props.height} margin={margin} />
          {dataMixed.map((data, i) => (
            <Rect key={i} previousData={cache.current[i]} data={data} />
          ))}
        </g>
        <g>
          <g
            transform={`translate(${props.width / 2 - 80}, ${props.height -
              10})`}
          >
            <rect
              rx="2"
              ry="2"
              x="-20"
              y="-13"
              width="15"
              height="15"
              fill={colors[0]}
            />
            <text fontSize={16} fontFamily="Lato, helvetica, arial, sans-serif">
              Nombre
            </text>
          </g>
          <g
            transform={`translate(${props.width / 2 + 25}, ${props.height -
              10})`}
          >
            <rect
              rx="2"
              ry="2"
              x="-20"
              y="-13"
              width="15"
              height="15"
              fill={colors[1]}
            />
            <text fontSize={16} fontFamily="Lato, helvetica, arial, sans-serif">
              CA
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Bar;
