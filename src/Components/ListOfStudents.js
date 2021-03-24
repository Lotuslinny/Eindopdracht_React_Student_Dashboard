import React from "react";
import Student from "./Student";

const ListOfStudents = (props) => {
    return (
        <div>
            <ul className="header__listOfStudents-ul">
                {props.students.map((student) => {
                    return (
                        <Student key={student.id} handleClickStudentName={props.handleClickStudentName} student={student} />
                    )
                })
                }
            </ul>
        </div >
    )
}

export default ListOfStudents;