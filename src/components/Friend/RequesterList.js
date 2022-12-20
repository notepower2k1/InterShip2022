import { useEffect, useState } from "react";
import {Card,Row,Col } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import FriendService from "../../services/FriendService"
import {Link } from "react-router-dom";
function RequesterList(){

    const [listRequester, setListRequester] = useState()
    const [change,setChange] = useState(false)
    const {userID} = useParams();

    useEffect(() =>{
        FriendService.getListRequester(userID).then(res => setListRequester(res.data))
    },[userID,change])
    
    const handleAcceptRequest = (userID2) => {
        FriendService.acceptRequest(userID,userID2).then(res => setChange(!change))
    }

    return (
        <div>
            <h3>Lời mời kết bạn </h3>
            <Row style={{display: 'flex',justifyContent: 'flex-start' }}>
            {listRequester && listRequester.map((user) =>(
                    <Col key= {user.userProfileID} lg='3'>
                        <Card  
                            style={{ width: '15rem',marginTop: '20px' }}
                        >                           
                            <Card.Body >
                            <img src={user.avatar}  alt="Avatar" className="rounded-circle avatar shadow-4 img-thumbnail" style={{width: "150px"}}/>
                            <Link to={"/profile/" + user.user.id}> 
                                <Card.Title>{user.firstName + " " + user.lastName}</Card.Title>
                            </Link>
                                
                                <Card.Text>{"User ID: " + user.user.id}</Card.Text>
                                <button 
                                    className="btn btn-info"
                                    onClick={() => handleAcceptRequest(user.user.id)}
                                >Accept</button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row >
        </div>
    )
}

export default RequesterList;