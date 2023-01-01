import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../../App.css";

// import detailLogo from '../../../images/details.png';
import editLogo from '../../../images/edit.png';
import deleteLogo from '../../../images/delete.png';
import GroupService from "../../../services/group.service";

const GroupDataTable = () => {

  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);

  const setGroupData = () => {
    GroupService.readAllGroups().then((response) => {
      setGroups(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  const removeGroup = (id) => {
    GroupService.deleteGroup(id).then((response) => {
      alert("User record " + id + " deleted!");
      setGroupData();
      navigate('/group/read')

    }).catch(error => {
      alert("Error Ocurred in removeGroup:" + error);
    });
  }

  useEffect(() => {
    setGroupData();

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
                onClick={() => navigate("/group/create")}>
                Create New Group
              </button>
            </nav>


            <br></br>
            <div className="col-12">
              <h4 style={{textAlign:'center'}}>Groups List</h4>

              <div class="container">
                <div class="row">
                  <div class="col-12">
                    <table class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Group Name</th>
                          <th>About</th>
                          <th>Created Date</th>
                          <th scope="col">Action</th>

                        </tr>
                      </thead>
                      <tbody>

                        {
                          groups &&
                          groups.map((group, index) => (

                            <tr>
                              <th scope="row">{group.id}</th>
                              <td>{group.groupName}</td>
                              <td>{group.groupAbout}</td>
                              <td>{group.createdDate}</td>
                              <td style={{display:'inline-block'}}>
                                <button>
                                    <Link to={"/group/edit/" + group.id}>
                                      <img src={editLogo} alt="editLogo" width={50}></img>
                                    </Link>
                                </button>
                                
                                <button
                                  onClick={() => removeGroup(group.id)} className="button"
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
export default GroupDataTable;