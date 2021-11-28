import React from 'react'
import Student from '../Student/Student';
import "./studentsList.css";
const StudentsList = (props) => {
    console.log(props);
    return (
        <div className="studentlist">
           {props.students.map((student,i)=><Student student={student} sayHi={props.sayHi } key={i} />)}
        
        </div>
    )
}

export default StudentsList
