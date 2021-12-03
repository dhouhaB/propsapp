import React,{useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import data from './Components/data';

import StudentsList from './Components/StudentsList/StudentsList'

const App = () => {

 const [students, setstudents] = useState(data)
  const [filterByName,setFilterByName] = useState("")
 const addstudent = (newStudent)=>
 {
   return setstudents([...students,newStudent]);
 };
 
 
 
 const sayHi1 = (name) =>
  {
    return alert (`Hello i am  ${name}`);
  }
  return (
    <div>
      <NavBar addstudent={addstudent}/>
      <StudentsList students={students} sayHi={sayHi1}/> {/*b3ath students props lel students List khater ghadi bech ysir l'affichage*/}
    </div>
  )
}

export default App
