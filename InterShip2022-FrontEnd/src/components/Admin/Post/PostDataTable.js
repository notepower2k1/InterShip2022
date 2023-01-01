import React, { useEffect, useState } from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';
import axios from "axios";
import "../../../App.css";

// import detailLogo from '../../../images/details.png';
import editLogo from '../../../images/edit.png';
import deleteLogo from '../../../images/delete.png';


const PostDataTable = () => {

  const navigate = useNavigate();
//  const baseURL = "http://localhost:8080";
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);
  
  const [likepost, setLikesPost] = useState([]);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  const setLikePostDat = () => {
      axios.put("")
  }




  const setPostData = () => {
    axios.get("/api/post/all").then((response) => {
      setPosts(response.data);
    //   console.log(response.data);
    })
    .catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setPostData();

  }, []);

  
  

  const removePost = (id) => {
    axios.delete("/api/post/" + id).then((response) => {
      alert("Post record " + id + " deleted!");
      setPostData();
      navigate('/post/read')

    }).catch(error => {
      alert("Error Ocurred in removePost:" + error);
    });
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/post/create")}>
          Create New Post
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4>Posts List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Post Id</th>
                    <th>Content</th>
                    <th>Image</th>
                    <th>Published Date</th>
                    <th>User ID</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    posts &&
                    posts.map((post, index) => (

                      <tr>
                        <th scope="row">{post.id}</th>
                        <td>{post.content}</td>
                        <td>{post.image}</td>
                        <td>{post.publishedDate}</td>
                        <td>{post.user.userID}</td>
                        <td style={{display:'inline-block'}}>
                          <button>
                              <Link to={"/post/edit/" + post.id}>
                                <img src={editLogo} alt="editLogo" width={50}></img>
                              </Link>
                          </button>
                          
                          <button
                            onClick={() => removePost(post.id)} className="button"
                          > <img src={deleteLogo} alt="deleteLogo" width={50}></img>
                          </button>

                        </td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>

              <div>
              <button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>
                <span className="likes-counter">{ `Like | ${likes}` }</span>
              </button>
                  <p>Total Like:</p>
                  <button>Like</button>
                  <button>Dislike</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}
export default PostDataTable;