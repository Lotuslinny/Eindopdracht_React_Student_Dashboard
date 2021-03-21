import React from "react";
import Student from "./Student";

const ListOfStudents = (props) => {
    return (
        <div>
            <Student getListOfStudents={props.getListOfStudents} />
        </div >
    )
}

export default ListOfStudents;