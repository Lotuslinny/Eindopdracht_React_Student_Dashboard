import React from "react";
import Student from "./Student";

const ListOfStudents = (props) => {
    return (
        <div>
            <ul className="ul">
                {props.students.map((student) => {
                    return (
                        //console.log(student)
                        <Student getListOfStudents={props.getListOfStudents()} student={student} />
                    )
                })
                }
            </ul>
        </div >
    )
}

export default ListOfStudents;