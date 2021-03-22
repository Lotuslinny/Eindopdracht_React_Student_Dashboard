import React from "react";
import Student from "./Student";

const ListOfStudents = (props) => {
    return (
        <div>
            <ul className="ul">
                {props.students.map((student) => {
                    return (
                        <Student students={props.students} student={student} />
                    )
                })
                }
            </ul>
        </div >
    )
}

export default ListOfStudents;