import React from 'react'
import {Navbar,Nav,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudent from '../StudentForm/AddStudent';
import Modal from 'react-modal';
import SearchStudent from '../Filter/SearchStudent';



const NavBar = ({addstudent}) => { 
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <SearchStudent/>

    <AddStudent addstudent = {addstudent}/>{/*c'est un nom de la méthode*/}
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
