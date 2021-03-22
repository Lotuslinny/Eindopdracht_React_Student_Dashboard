import React from "react";
import Student from "./Student";

const ListOfStudents = (props) => {
    const { filterName } = props.filterName
    return (
        <div>
            <ul className="ul">
                {props.students.map((student) => {
                    return (
                        //console.log(student)
                        <Student getChartInfo={props.getChartInfo(filterName)} student={student} />
                    )
                })
                }
            </ul>
        </div >
    )
}

export default ListOfStudents;