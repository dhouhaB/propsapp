import React,{useState} from 'react';
import Modal from 'react-modal';
import {Form,Button,Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const AddStudent = ({addstudent}) => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [firstName,setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
 const [photo,setPhoto] = useState("")
  function openModal() {
    setIsOpen(true);
  }
/*
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  */

  function closeModal() {
    setIsOpen(false);
  }

const submitStudent =(e) =>
{
  e.preventDefault();
  let newStudent = {
    id:uuidv4(),
    photo,firstName,secondName,
  };
  addstudent(newStudent);
  /*
  addstudent({
    id:uuidv4(),
    photo,
    firstName,secondName,
  });
  */
  closeModal();
};




    return (
        <div>
             <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
        <Form>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>firstName:</Form.Label>
      <Form.Control type="text" placeholder="enter you first name " onChange={(e) => setFirstName(e.target.value)} />
    </Form.Group>

  

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>second Name</Form.Label>
    <Form.Control placeholder="enter your second name "              onChange={(e) => setSecondName(e.target.value)}
  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Photo</Form.Label>
    <Form.Control placeholder="Enter the photo adress url "  onChange={(e) => setPhoto(e.target.value)} />

  </Form.Group>


 


  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={(e) => submitStudent(e)}>
    Submit
  </Button>
</Form>
      </Modal>
        </div>
    )
}

export default AddStudent
