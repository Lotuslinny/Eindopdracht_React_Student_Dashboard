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
    getNamesOFStudents = (arr) => {
        //const arr = this.state.data.name
        let sorted_arr = arr.slice().sort();
        let results = [];
        for (var i = 0; i < sorted_arr.length - 1; i++) {
            if (sorted_arr[i + 1] === sorted_arr[i]) {
                results.push(sorted_arr[i]);
            }
        }
        { console.log(results) }
        //return results;
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
                {console.log("boo")}
                <p getNamesOFStudents={this.getNamesOFStudents}></p>
                {
                    data.map(obj => {

                        if (obj.name !== obj.name) {
                            obj.push(obj.name)
                            return (
                                <div key={obj.id}>
                                    <h1>{obj.name}</h1>
                                </div>
                            )
                        } else {
                            return "hello"
                        }
                    }


                    )
                },
                {/* } else {
                                  return "hello"
                              }
                          }) 
                     */}

                {
                    data.map(obj => {
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
