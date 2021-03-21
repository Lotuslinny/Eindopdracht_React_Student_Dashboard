import React from "react";

const Student = (props) => {
  return (
    <div>
      <h1 getListOfStudents={props.getListOfStudents}>{props.getListOfStudents}</h1>
    </div>
  )
}
export default Student;