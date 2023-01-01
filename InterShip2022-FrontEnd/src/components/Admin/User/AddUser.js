import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import UserService from "../../../services/user.service";

const UserForm = () => {
// Gán Url luôn thì bị lỗi: has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  const navigate = useNavigate();
//  const [enteredUserID, setUserID] = useState('');
  const [enteredUsername, setUsername] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [enteredRegisteredDate, setRegisteredDate] = useState('');

  // const userIDChangeHandler = (event) => {
  //   setUserID(event.target.value);
  // };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const registeredDateChangeHandler = (event) => {
    setRegisteredDate(event.target.value);
  };

  const submitActionHandler = async (event) => {
    event.preventDefault();
    await UserService.createUser( {
        // userID: enteredUserID,
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
        registeredDate: enteredRegisteredDate
      })
      .then((response) => {
        alert("User  "+ enteredUsername +" added!");
        navigate("/user/read");
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    // reset the values of input fields
    // setUserID('');
    setUsername('');
    setEmail('');
    setPassword('');
    setRegisteredDate('');
    navigate("/user/read");

  }
    return(
      <Alert variant='primary'>
      <Container>
      <Form onSubmit={submitActionHandler}>
        {/* <Form.Group controlId="form.UserID">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="number" value={enteredUserID} onChange={userIDChangeHandler} placeholder="Enter User ID" required/>
        </Form.Group> */}
         <Form.Group  controlId="form.Username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" value={enteredUsername} onChange={usernameChangeHandler} placeholder="Enter Username" required/>
        </Form.Group>
        <Form.Group  controlId="form.Email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={enteredEmail} onChange={emailChangeHandler} placeholder="Enter Email" required/>
        </Form.Group>
        <Form.Group  controlId="form.Password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={enteredPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required/>
        </Form.Group>
        <Form.Group  controlId="form.RegisteredDate">
            <Form.Label>Registered Date</Form.Label>
            <Form.Control type="date" value={enteredRegisteredDate} onChange={registeredDateChangeHandler} placeholder="Enter Registered Date" required/>
        </Form.Group>
        <br></br>
        <Button type='submit'>Add User</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type='submit' onClick={()=>cancelHandler()}>Cancel</Button>
      </Form>

    </Container>
    </Alert>

    );
}
export default UserForm;