import React from "react";

const Student = (props) => {
  console.log(`student: ${props.student}`)
  return (
    <div>
      <button className="header__ListOfStudents-button" key={props.id} onClick={props.handleClickStudentName} student={props.student}>{props.student}</button>
    </div >
  )
}
export default Student;