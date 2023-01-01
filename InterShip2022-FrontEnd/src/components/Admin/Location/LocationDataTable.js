import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../../App.css";

// import detailLogo from '../../../images/details.png';
import editLogo from '../../../images/edit.png';
import deleteLogo from '../../../images/delete.png';

import LocationService from "../../../services/location.service";

const LocationDataTable = () => {

  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);

  const setLocationData = async () => {
    await LocationService.getAllLocations()
    .then(res => {
      setLocations(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  }

  const removeLocation = async (id) => {
    await LocationService.deleteLocation(id)
    .then(res => {
        setLocationData();
        alert("Delete Success");
        // navigate("/location/read");
    })
    .catch(err => {
      alert("Error Ocurred in removeUser:" + err);
    });
  }
  
  useEffect(() => {
    setLocationData();

  }, []);



  return (
    // Thêm className = "content-wrapper" vào tránh Navbar che chữ
    <div className="content-wrapper">
      <div class="card-body" style={{textAlign:'center'}}>
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
          <div className="col-12">
            <h4 style={{textAlign:'center'}}>Locations List</h4>

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
                            <th scope="row">{location.id}</th>
                            <td>{location.country}</td>
                            <td>{location.province}</td>
                            <td>{location.city}</td>
                            <td>{location.address}</td>
                            <td style={{display:'inline-block'}}>
                              <button>
                                  <Link to={"/location/edit/" + location.id}>
                                    <img src={editLogo} alt="editLogo" width={50}></img>
                                  </Link>
                              </button>
                              
                              <button
                                onClick={() => removeLocation(location.id)} className="button"
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
    </div>
   

  );
}
export default LocationDataTable;