import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const Student = (props) => {
  console.log(`student: ${props.student}`)
  return (
    <Router>
      <div>
        <Link><button className="header__ListOfStudents-button" key={props.id} onClick={props.handleClickStudentName} getChartData={props.getChartData} student={props.student}>{props.student}</button></Link>
      </div >
    </Router>
  )
}
export default Student;