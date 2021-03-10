import React from "react";

const ListOfStudents = (props) => {
  return (
    <div>
      <h1>Ik ben de ListOfStudents</h1>
      {props.data}
    </div>
  )
}

export default ListOfStudents;