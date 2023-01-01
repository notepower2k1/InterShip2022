import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../../App.css";

// import detailLogo from '../../../images/details.png';
import editLogo from '../../../images/edit.png';
import deleteLogo from '../../../images/delete.png';


const LocationDataTable = () => {

  const navigate = useNavigate();
//  const baseURL = "http://localhost:8080";
  const [locations, setLocations] = useState([]);

  const setLocationData = () => {
    axios.get("/api/location/all").then((response) => {
      setLocations(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  // Để load List Location, 2 cách gọi
  useEffect(() => {
    setLocationData();
    
    // axios.get("/api/location/all").then((response) => {
    //   setLocations(response.data);
    // }).catch(error => {
    //   alert("Error Ocurred while loading data:" + error);
    // });
  }, []);


  const removeLocation = (id) => {
    axios.delete("/api/location/" + id).then((response) => {
      alert("Location record " + id + " deleted!");
      setLocationData();
      navigate('/location/read')

    }).catch(error => {
      alert("Error Ocurred in removeLocation:" + error);
    });
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/location/create")}>
          Create New Location
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4>Locations List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Country</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Address</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    locations &&
                    locations.map((location, index) => (

                      <tr>
                        <th scope="row">{location.locationID}</th>
                        <td>{location.country}</td>
                        <td>{location.province}</td>
                        <td>{location.city}</td>
                        <td>{location.address}</td>
                        <td style={{display:'inline-block'}}>
                          <button>
                              <Link to={"/location/edit/" + location.locationID}>
                                <img src={editLogo} alt="editLogo" width={50}></img>
                              </Link>
                          </button>
                          
                          <button
                            onClick={() => removeLocation(location.locationID)} className="button"
                          > <img src={deleteLogo} alt="deleteLogo" width={50}></img>
                          </button>

                        </td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
export default LocationDataTable;