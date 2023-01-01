import React, { useEffect, useState } from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';
import "../../../App.css";

// import detailLogo from '../../../images/details.png';
import editLogo from '../../../images/edit.png';
import deleteLogo from '../../../images/delete.png';

import UserService from "../../../services/user.service";

const UserDataTable = () => {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const setUserData = async () => {
    await UserService.getAllUsers()
    .then(res => {
        setUsers(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  }

  const removeUser = async (id) => {
    await UserService.deleteUser(id)
    .then(res => {
        setUserData();
        alert("Delete Success");
        // navigate("/user/read");
    })
    .catch(err => {
      
      alert("Error Ocurred in removeUser:" + err);
    });
  }
  
  useEffect(() => {
    setUserData();
  }, []);
  

 

  return (
    <div class="card-body" style={{textAlign:'center'}}>
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/user/create")}>
          Create New User
        </button>
      </nav>


      <br></br>
      <div className="col-12">
        <h4 style={{textAlign:'center'}}>Users List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Username</th>
                    <th>Email</th>
                    {/* <th>Password</th> */}
                    <th>Registered Date</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    users &&
                    users.map((user, index) => (

                      <tr>
                        <th scope="row">{user.id}</th>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        {/* <td>{user.password}</td> */}
                        <td>{user.registeredDate}</td>
                        <td style={{display:'inline-block'}}>
                          <button>
                              <Link to={"/user/edit/" + user.id}>
                                <img src={editLogo} alt="editLogo" width={50}></img>
                              </Link>
                          </button>
                          
                          <button
                            onClick={() => removeUser(user.id)} className="button"
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
export default UserDataTable;