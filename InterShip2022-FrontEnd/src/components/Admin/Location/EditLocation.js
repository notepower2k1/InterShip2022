import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';

const LocationForm = () => {
// Gán Url luôn thì bị lỗi: has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//  const editURL = "http://localhost:8080/api/location/";
  const navigate = useNavigate();
  const param = useParams();
  const [locationID, setLocationID] = useState('');
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {

    axios.get("/api/location/" + param.id).then((response) => {
      const location = response.data;
      setLocationID(location.locationID);
      setCountry(location.country);
      setProvince(location.province);
      setCity(location.city);
      setAddress(location.address);
  
    }).catch(error => {
      alert("Error Ocurred getting location detail:"+ error);
    });
  }, [param.id]);
  
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

  
  
    const submitActionHandler = (event) => {
      event.preventDefault();
      axios
        .put("/api/location/" + param.id, {
          locationID: locationID,
          country: country,
          province: province,
          city: city,
          address: address          
        })
        .then((response) => {
          alert("Location "+ locationID +" updated!");
          navigate('/location/read')
  
        }).catch(error => {
          alert("Error Ocurred updating location:"+ error);
        });
  
    };
  
      return(
        <Alert variant='primary'>
        <Container>
        <Form onSubmit={submitActionHandler}>
        {/* <Form.Group controlId="form.LocationID">
            <Form.Label>Location ID</Form.Label>
            <Form.Control type="number" value={locationID} onChange={locationIDChangeHandler} placeholder="Enter Location ID" required/>
        </Form.Group> */}
         <Form.Group  controlId="form.Country">
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" value={country} onChange={countryChangeHandler} placeholder="Enter Country" required/>
        </Form.Group>
        <Form.Group  controlId="form.Province">
            <Form.Label>Province</Form.Label>
            <Form.Control type="text" value={province} onChange={provinceChangeHandler} placeholder="Enter Province" required/>
        </Form.Group>
        <Form.Group  controlId="form.City">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={city} onChange={cityChangeHandler} placeholder="Enter City" required/>
        </Form.Group>
        <Form.Group  controlId="form.Address">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" value={address} onChange={addressChangeHandler} placeholder="Enter Address" required/>
        </Form.Group>
        <br></br>
        <Button type='submit'>Update Location</Button>
        &nbsp;&nbsp;&nbsp;
        <Button type='submit' onClick={()=>navigate("/location/read")}>Cancel</Button>
      </Form>

      </Container>
      </Alert>
  
      );
  }
  export default LocationForm;