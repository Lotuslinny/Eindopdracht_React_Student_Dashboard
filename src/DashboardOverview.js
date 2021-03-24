import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";
import ListOfStudents from "./Components/ListOfStudents";
import Chart from "react-google-charts";

class App extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            names: [],
            assignments: [],
            filterName: "",
        }
        this.handleClickStudentName = this.handleClickStudentName.bind(this);
    }
    componentDidMount() {
        Tabletop.init({
            key: "1Pv1p4vwOe8ZKetA7ealHn-Ulbxp0ycJWwSlF2NZylEE",
            callback: googleData => {
                this.setState({
                    data: googleData,
                })
            },
            simpleSheet: true
        })
    }
    getChartData(a = "") {
        const { data } = this.state;
        // list with assignments for all 560 rows 
        const assignments = data.map(function (o) { return o.assignment });
        // list with 56 unique assignments
        const distinctAssignments = [...new Set(assignments)];
        let scores = [];
        let averageScore = [['Assignment', 'Difficulty level', 'Fun level']];
        let averageDifficultyLevel = 0;
        let averageFunLevel = 0;
        // for every one of the 56 unique assignments, loop.
        distinctAssignments.forEach(function (distinctAssignment) {
            // distinctAssignment == SCRUM
            scores = data.filter(function (score) {
                // if assignment is distinctAssignment, and difficulty level is higher than -1, return complete row (id, name, assignment, level, funlevel)
                if (a === "") {
                    return score.assignment === distinctAssignment && score.difficultylevel > -1;
                } else {
                    return score.assignment === distinctAssignment && score.difficultylevel > -1 && score.name === a;
                }
            });
            // calc average of the difficulty level
            averageDifficultyLevel = scores.reduce((total, next) => total + parseInt(next.difficultylevel), 0) / scores.length;
            averageFunLevel = scores.reduce((total, next) => total + parseInt(next.funlevel), 0) / scores.length;

            //  push each distinct assignment with average score into array
            averageScore.push([distinctAssignment, parseFloat(averageDifficultyLevel), parseFloat(averageFunLevel)])
        })
        console.log(averageScore)
        return averageScore;
    }
    getListOfStudents() {
        const { data } = this.state;
        // list with names of students for all 560 rows 
        const studentNames = data.map(function (o) { return o.name });
        // list with 10 unique names
        //console.log(studentNames)
        const names = [...new Set(studentNames)];
        console.log(names)
        return names
    }
    handleClickAllStudents = () => {
        this.setState({
            filterName: ""
        })
    }
    handleClickStudentName = (event) => {
        //get value from clicked student.
        const clickedStudent = event.target.innerText;
        this.setState({ filterName: clickedStudent })
    }
    render() {
        //const { data } = this.state
        //const { names } = this.state;
        //console.log(names);
        //https://formidable.com/open-source/victory/docs/victory-bar/
        //https://react-google-charts.com/bar-chart
        //https://www.npmjs.com/package/react-google-charts#installation
        //https://www.npmjs.com/package/multiselect-react-dropdown
        return (
            <div className="App" >
                <h2 onClick={this.handleClickAllStudents}>All Students</h2>
                <ListOfStudents handleClickStudentName={this.handleClickStudentName} students={this.getListOfStudents()} />
                <Chart
                    className={"bar"}
                    width={'50em'}
                    height={'70em'}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={this.getChartData(this.state.filterName)}
                    options={{
                        title: 'Fun and difficulty levels of assignments',
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
                    data={this.getChartData(this.state.filterName)}
                    options={{
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
}

export default App;