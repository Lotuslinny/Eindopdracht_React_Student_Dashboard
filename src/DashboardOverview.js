import React from "react";
import Tabletop from "tabletop"
//import ListOfStudents from "./Components/ListOfStudents";
//import { VictoryChart, VictoryTheme, VictoryBar } from "victory";

class DashboardOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        Tabletop.init({
            key: '1Pv1p4vwOe8ZKetA7ealHn-Ulbxp0ycJWwSlF2NZylEE',
            //key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
            callback: googleData => {
                this.setState({
                    data: googleData
                })
            },
            simpleSheet: true
        })
    }
    render() {
        const { data } = this.state
        return (
            <div className="DashboardOverview" id="details">

                <h1>{console.log(this.state.data[1])}</h1>
                {
                    data.map(obj => {
                        return (
                            <div key={obj.id}>
                                <p>
                                    {obj.name} -
                  {obj.assignment} -
                  {obj.difficultylevel} -
                  {obj.funlevel}{console.log(obj.name)}</p>
                            </div>

                        )
                    })
                }
                {/*  <ListOfStudents name={data.name} /> */}

            </div>
        )
    }
}
export default DashboardOverview;
