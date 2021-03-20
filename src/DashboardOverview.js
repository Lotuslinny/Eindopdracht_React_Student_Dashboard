import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";
import { VictoryChart, VictoryTheme, VictoryBar } from "victory";

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }



    }

    componentDidMount() {
        Tabletop.init({
            key: "1Pv1p4vwOe8ZKetA7ealHn-Ulbxp0ycJWwSlF2NZylEE",
            //key: "1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg",

            callback: googleData => {
                this.setState({
                    data: googleData
                })
            },
            simpleSheet: true
        })
    }

    testFunction(a = "all") {
        const { data } = this.state;
        // list with assignments for all 560 rows 
        const assignments = data.map(function (o) { return o.assignment });
        // list with 56 unique assignments
        const distinctAssignments = [...new Set(assignments)];
        var scores = [];
        var AverageScore = [];
        var average = 0;
        // for every one of the 56 unique assignments, loop.
        distinctAssignments.forEach(function (distinctAssignment) {
            // distinctAssignment == SCRUM
            scores = data.filter(function (score) {
                // if assignment is distinctAssignment, and difficulty level is higher than -1, return complete row (id, name, assignment, level, funlevel)
                if (a === 'all') {
                    return score.assignment === distinctAssignment && score.difficultylevel > -1;
                } else {
                    return score.assignment === distinctAssignment && score.difficultylevel > -1 && score.name === a;
                }

            });
            // calc average of the difficulty level
            average = scores.reduce((total, next) => total + parseInt(next.difficultylevel), 0) / scores.length;
            //  push each distinct assignment with average score into array
            AverageScore.push({ "Assignment": distinctAssignment, "AverageScore": average })
        })
        console.log(AverageScore);
        return AverageScore;
    }


    render() {
        // const { data } = this.state
        // https://formidable.com/open-source/victory/docs/victory-bar/
        return (
            <div className="App">

                <VictoryChart
                    theme={VictoryTheme.material} domainPadding={10} >
                    <VictoryBar horizontal
                        className="VictoryBar"
                        style={{ data: { fill: "#c43a31" } }}
                        data={this.testFunction('Storm') /*leeg betekent alles ;)*/}
                        x="Assignment"
                        y="AverageScore" //create average number for common assignments...?
                    />
                </VictoryChart>


                <header className="App-header">

                    <h1 className="App-title">React + Google Sheets Demo</h1>
                </header>
                <div id="details">
                    {/*this.testFunction()*/}
                    { /*           
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
        <header className="App-header"></header>
         <div id="details2">Details 2
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
          */ }
                </div>
            </div>
        );
    }
}

export default App;