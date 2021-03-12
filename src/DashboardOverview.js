import React from "react";

import VictoryChart from "./Components/VictoryChart";
//import ListOfStudents from "./Components/ListOfStudents";


class DashboardOverview extends React.Component {


    render() {
        return (
            <div>
                <VictoryChart data={this.props.data} />
                {/* <ListOfStudents /> */}

            </div>
        )
    }
}

export default DashboardOverview;
