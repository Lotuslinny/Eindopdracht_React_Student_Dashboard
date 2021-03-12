import React from "react";
import Tabletop from "tabletop";
//import { VictoryChart, VictoryTheme, VictoryBar } from "victory";

class DashboardOverview extends React.Component {
    constructor() {
        super()
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
                {data.map(obj => {
                    return (
                        <div key={obj.id}>
                            <p>
                                {obj.name} -
                  {obj.assignment} -
                  {obj.difficultylevel} -
                  {obj.funlevel}</p>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}

export default DashboardOverview;
