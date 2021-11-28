import React from 'react'
import {Card,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const Student = ({student: {photo,name,secondName}, sayHi,desc}) => {
 
    return (
        <div>
            <Card style={{ width: '18rem' ,margin:'40px'}}>
 <Card.Img variant="top" src={photo}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>{secondName}</Card.Title>
    <Card.Text>
{desc} 
    </Card.Text>
    <Button  variant="primary" onClick={()=>sayHi(name)}>Say Hi</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Student;
Student.defaultProps= 
{
    desc:"not found",
}
Student.propTypes=
{
    sayHi:PropTypes.func
}