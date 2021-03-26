import React from "react";
import {
  Link
} from "react-router-dom";

const Student = (props) => {

  return (
    <div>
      <li>
        <Link className="header__ListOfStudents-student" key={props.id} onClick={props.handleClickStudentName} student={props.student} to={props.student}>{props.student}</Link>
      </li>
    </div >
  )
}

export default Student;