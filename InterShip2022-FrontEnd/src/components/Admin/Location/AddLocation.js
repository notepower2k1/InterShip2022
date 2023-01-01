import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

import LocationService from "../../../services/location.service";

const LocationForm = () => {
// Gán Url luôn thì bị lỗi: has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//  const baseURL = "http://localhost:8080/api/user";
  const navigate = useNavigate();
//  const [enteredLocationID, setLocationID] = useState('');
  const [enteredCountry, setCountry] = useState('');
  const [enteredProvince, setProvince] = useState('');
  const [enteredCity, setCity] = useState('');
  const [enteredAddress, setAddress] = useState('');

  // const locationIDChangeHandler = (event) => {
  //   setLocationID(event.target.value);
  // };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };

  const provinceChangeHandler = (event) => {
    setProvince(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };


  const submitActionHandler = async (event) => {
    event.preventDefault();
    await LocationService.createLocation({
        // id: enteredLocationID,
        country: enteredCountry,
        province: enteredProvince,
        city: enteredCity,
        address: enteredAddress

      })
      .then((response) => {
        alert("Location "+ enteredCountry +" added!");
        navigate("/location/read");
      }).catch(error => {
        alert("error==="+error);
      });

  };

  const cancelHandler = () =>{
    // reset the values of input fields
    // setLocationID('');
    setCountry('');
    setProvince('');
    setCity('');
    setAddress('');
    navigate("/location/read");

  }
    return(
      // Thêm className = "content-wrapper" vào tránh Navbar che chữ
      <div className="content-wrapper">
          <Alert variant='primary'>
            <Container>
              <Form onSubmit={submitActionHandler}>
                {/* <Form.Group controlId="form.LocationID">
                    <Form.Label>Location ID</Form.Label>
                    <Form.Control type="number" value={enteredLocationID} onChange={locationIDChangeHandler} placeholder="Enter Location ID" required/>
                </Form.Group> */}
                <Form.Group  controlId="form.Country">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" value={enteredCountry} onChange={countryChangeHandler} placeholder="Enter Country" required/>
                </Form.Group>
                <Form.Group  controlId="form.Province">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" value={enteredProvince} onChange={provinceChangeHandler} placeholder="Enter Province" required/>
                </Form.Group>
                <Form.Group  controlId="form.City">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" value={enteredCity} onChange={cityChangeHandler} placeholder="Enter City" required/>
                </Form.Group>
                <Form.Group  controlId="form.Address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" value={enteredAddress} onChange={addressChangeHandler} placeholder="Enter Address" required/>
                </Form.Group>
                <br></br>
                <Button type='submit'>Add Location</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type='submit' onClick={()=>cancelHandler()}>Cancel</Button>
              </Form>

          </Container>
        </Alert>
      </div>
      

    );
}
export default LocationForm;