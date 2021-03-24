import React from "react";

const Student = (props) => {
  console.log(`student: ${props.student}`)
  return (
    <div>
      <li className="header__ListOfStudents-student" key={props.id} onClick={props.handleClickStudentName} student={props.student}>{props.student}</li>
    </div >
  )
}
export default Student;