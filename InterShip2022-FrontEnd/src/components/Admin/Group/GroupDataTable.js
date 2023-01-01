import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../../App.css";

// import detailLogo from '../../../images/details.png';
import editLogo from '../../../images/edit.png';
import deleteLogo from '../../../images/delete.png';


const GroupDataTable = () => {

  const navigate = useNavigate();
//  const baseURL = "http://localhost:8080";
  const [groups, setGroups] = useState([]);

  const setGroupData = () => {
    axios.get("/api/group/all").then((response) => {
      setGroups(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  // Để load List Group, 2 cách gọi
  useEffect(() => {
    setGroupData();
    
    // axios.get("/api/group/all").then((response) => {
    //   setGroups(response.data);
    // }).catch(error => {
    //   alert("Error Ocurred while loading data:" + error);
    // });
  }, []);


  const removeGroup = (id) => {
    axios.delete("/api/group/" + id).then((response) => {
      alert("User record " + id + " deleted!");
      setGroupData();
      navigate('/group/read')

    }).catch(error => {
      alert("Error Ocurred in removeGroup:" + error);
    });
  }

  return (
    <div class="card-body">
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
      <div className="col-md-6">
        <h4>Groups List</h4>

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
                        <th scope="row">{group.groupID}</th>
                        <td>{group.groupName}</td>
                        <td>{group.groupAbout}</td>
                        <td>{group.createdDate}</td>
                        <td style={{display:'inline-block'}}>
                          <button>
                              <Link to={"/group/edit/" + group.groupID}>
                                <img src={editLogo} alt="editLogo" width={50}></img>
                              </Link>
                          </button>
                          
                          <button
                            onClick={() => removeGroup(group.groupID)} className="button"
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
export default GroupDataTable;