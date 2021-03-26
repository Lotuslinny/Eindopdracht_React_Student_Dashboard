import React from "react";
import {
  Route,
  useParams
} from "react-router-dom";
import Chart from "react-google-charts";

const Routing = (props) => {
  return (
    <Route path="/:id" children={<Child getChartData={props.getChartData} />} />
  )
}
function Child(props) {
  let { id } = useParams();

  return (
    <div>
      <Chart
        className={"bar"}
        width={'50em'}
        height={'50em'}
        chartType="BarChart"
        loader={<div>Loading Chart</div>}
        data={props.getChartData(id)}
        options={{
          title: id + "'s bar chart of fun and difficulty levels of assignments ",
          chartArea: { width: '50%' },
          hAxis: {
            title: 'Score',
            minValue: 0,
            maxValue: 5,
          },
          vAxis: {
            title: 'Assignment',
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
      <Chart
        className={"line"}
        width={'47em'}
        height={'50em'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={props.getChartData(id)}
        options={{
          title: id + "'s line chart of fun and difficulty levels of assignments ",
          hAxis: {
            title: 'Assignment',
          },
          vAxis: {
            title: 'Fun and difficulty levels of assignments',
          },
          series: {
            1: { curveType: 'function' },
          },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}

export default Routing;