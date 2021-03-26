import React, { Component } from "react";
import "./index.css";
import Tabletop from "tabletop";
import ListOfStudents from "./Components/ListOfStudents";
import Chart from "react-google-charts";
import Routing from "./Components/Routing"
import {
    Switch,
    Route,
    Link
} from "react-router-dom";

class DashboardOverview extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            names: [],
            assignments: [],
            filterName: "",
        }
        this.handleClickStudentName = this.handleClickStudentName.bind(this);
        this.getChartData = this.getChartData.bind(this);
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
        const assignments = data.map(ass => { return ass.assignment }); // I'm an ass.assin *<:o)
        const distinctAssignments = [...new Set(assignments)];
        let scores = [];
        let averageScore = [['Assignment', 'Difficulty level', 'Fun level']];
        let averageDifficultyLevel = 0;
        let averageFunLevel = 0;
        distinctAssignments.forEach(distinctAssignment => {
            scores = data.filter(score => {
                if (a === "") {
                    return score.assignment === distinctAssignment && score.difficultylevel > -1;
                } else {
                    return score.assignment === distinctAssignment && score.difficultylevel > -1 && score.name === a;
                }
            });
            averageDifficultyLevel = scores.reduce((total, next) => total + parseInt(next.difficultylevel), 0) / scores.length;
            averageFunLevel = scores.reduce((total, next) => total + parseInt(next.funlevel), 0) / scores.length;
            averageScore.push([distinctAssignment, parseFloat(averageDifficultyLevel), parseFloat(averageFunLevel)])
        })
        return averageScore;
    }
    getListOfStudents() {
        const { data } = this.state;
        const studentNames = data.map(stud => { return stud.name }); //My husband is a stud! :p
        const names = [...new Set(studentNames)];
        return names
    }
    handleClickAllStudents = () => {
        this.setState({
            filterName: ""
        })
    }
    handleClickStudentName = (event) => {
        const clickedStudent = event.target.innerText;
        this.setState({ filterName: clickedStudent })
    }
    render() {
        return (
            <div className="App" >
                <div className="box">
                    <div className="header">
                        <Link className="header__ListOfStudents-student" key="Root" onClick={this.handleClickAllStudents} to="/">All students</Link>
                        <ListOfStudents className="header__listOfStudents" handleClickStudentName={this.handleClickStudentName} students={this.getListOfStudents()} />
                    </div>
                    <Switch>
                        <Routing getChartData={this.getChartData} path="/:id" />
                        <Route exact path="/">

                            <Chart
                                className={"bar"}
                                width={'50em'}
                                height={'50em'}
                                chartType="BarChart"
                                loader={<div>Loading Chart</div>}
                                data={this.getChartData(this.state.filterName)}
                                options={{
                                    title: "All student's average bar chart of Fun and difficulty levels of assignments",
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
                                    title: "All student's average line chart of Fun and difficulty levels of assignments",
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
                            <footer className="footer">Iedereen bedankt voor het mogelijk maken van deze Eindbaas!!! Groetjes, Lin Ny.</footer>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default DashboardOverview;