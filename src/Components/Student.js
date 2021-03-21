import React from "react";

const Student = (props) => {
  //const students = props.getListOfStudents;
  console.log(`student: ${props.student}`)
  //console.log(students.map(student))
  // .map((student) => { 

  return (
    <div>
      <h1 getListOfStudents={props.getListOfStudents} student={props.student}>{props.student}</h1>
    </div>
  )
  //}
  //    )

}
export default Student;