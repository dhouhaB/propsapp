import React from 'react'
import NavBar from './Components/NavBar/NavBar'

import StudentsList from './Components/StudentsList/StudentsList'

const App = () => {
 const students=[
    {
      id:1,
    photo:"https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg",
    name:"Dhouha",
    secondName:"Bessalah"
    },
    {
      id:2,
      photo:"https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg",
      name:"Haythem",
      secondName:"Bessalah"
    },
   
   {  id:3,
    photo:"https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg",
    name:"Aymen",
    secondName:"Bessalah"},
  
  {
    id:4,
    photo:"https://meetanentrepreneur.lu/wp-content/uploads/2019/08/profil-linkedin.jpg",
    name:"Firas",
    secondName:"Bessalah"
  }
 
    


  ]
  const sayHi1 = (name) =>
  {
    return alert (`Hello i am  ${name}`);
  }
  return (
    <div>
      <NavBar/>
      <StudentsList students={students} sayHi={sayHi1}/> {/*b3ath students props lel students List khater ghadi bech ysir l'affichage*/}
    </div>
  )
}

export default App
