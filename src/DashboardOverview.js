import React, { Component } from "react";
import "./App.css";
import Tabletop from "tabletop";
import ListOfStudents from "./Components/ListOfStudents";
import Chart from "react-google-charts";

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
                        <button className="header__button" onClick={this.handleClickAllStudents}>All Students</button>
                        <ListOfStudents className="header__listOfStudents" to={this.student} handleClickStudentName={this.handleClickStudentName} students={this.getListOfStudents()} />
                    </div>
                    <Chart
                        className={"bar"}
                        width={'50em'}
                        height={'50em'}
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
                </div>
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
                <footer className="footer">Iedereen bedankt voor het mogelijk maken van deze Eindbaas!!! Groetjes, Lin Ny.</footer>
            </div>
        );
    }
}

export default DashboardOverview;