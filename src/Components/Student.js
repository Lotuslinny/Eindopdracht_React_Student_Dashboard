import React from "react";

const Student = (props) => {
  console.log(`student: ${props.student}`)
  return (
    <div>
      <li student={props.student}>{props.student}</li>
    </div>
  )
}
export default Student;