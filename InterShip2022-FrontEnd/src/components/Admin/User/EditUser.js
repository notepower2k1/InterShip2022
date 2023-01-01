import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import UserService from "../../../services/user.service";

const UserForm = (data) => {
// Gán Url luôn thì bị lỗi: has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//  const editURL = "http://localhost:8080/api/user/";
  const navigate = useNavigate();
  const param = useParams();
  const [userID, setUserID] = useState('');
  const [userName, setUsername] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [userRegisteredDate, setRegisteredDate] = useState('');

  useEffect(() => {

    UserService.getUserByID(param.id).then((response) => {
      const user = response.data;
      console.log(user);
      setUserID(user.id);
      // username chứ không phải userName (Gọi sai nên không ăn)
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
      setRegisteredDate(user.registeredDate);
  
    }).catch(error => {
      alert("Error Ocurred getting user detail:"+ error);
    });
  }, [param.id]);
  
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
      await UserService.updateUser(param.id,
        {
          id: userID,
          // username chứ không phải userName (Gọi sai nên không ăn)
          username: userName,
          email: userEmail,
          password: userPassword,
          registeredDate: userRegisteredDate
        })
        .then((response) => {
          alert("User "+ userID +" updated!");
          navigate('/user/read')
        })
        .catch(error => {
          alert("Error Ocurred updating user:"+ error);
        });
  
    };
  
      return(
        // Thêm className = "content-wrapper" vào tránh Navbar che chữ
        <div className="content-wrapper">
          <Alert variant='primary'>
            <Container>
              <Form onSubmit={submitActionHandler} id="data">
              <Form.Group  controlId="form.Username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" value={userName} onChange={usernameChangeHandler} placeholder="Enter Username" required/>
              </Form.Group>
              <Form.Group  controlId="form.Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={userEmail} onChange={emailChangeHandler} placeholder="Enter Email" required/>
              </Form.Group>
              <Form.Group  controlId="form.Password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={userPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required/>
              </Form.Group>
              <Form.Group  controlId="form.RegisteredDate">
                  <Form.Label>Registered Date</Form.Label>
                  <Form.Control type="date" value={userRegisteredDate} onChange={registeredDateChangeHandler} placeholder="Enter Registered Date" required/>
              </Form.Group>
              <br></br>
              <Button type='submit'>Update User</Button>
              &nbsp;&nbsp;&nbsp;
              <Button type='submit' onClick={()=>navigate("/user/read")}>Cancel</Button>
            </Form>
            </Container>
          </Alert>
        </div>
       
  
      );
  }
  export default UserForm;