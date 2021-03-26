import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Student = (props) => {
  console.log(`student: ${props.student}`)
  return (
    <Router>
      <div>
        <button className="header__ListOfStudents-button" key={props.id} onClick={props.handleClickStudentName} student={props.student}>{props.student}</button>
        <Route to={props.student}>{props.student}</Route>
      </div >
    </Router>
  )
}
export default Student;