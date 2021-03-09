import React from "react";
import BarChart from "./Components/BarChart";
import ListOfStudents from "./Components/ListOfStudents";

class DashboardOverview extends React.Component {
  render() {
    return (
      <div>
        <BarChart />
        <ListOfStudents />
      </div>
    )
  }
}

export default DashboardOverview;
