import { useEffect, useState } from "react";
<<<<<<< HEAD
import {Form,Card,Button,Row,Col } from 'react-bootstrap'
import {getListRequester, acceptRequest} from '../feature/FriendService.js'
function RequesterList(props){

    const [listRequester, setListRequester] = useState()

    useEffect(() =>{
        getListRequester(props.userId).then(res => setListRequester(res))
    },[props.change,props.userId])
    
    return (
        <div>
            <h3>Danh sách người gửi kết bạn: </h3>
            <Row style={{display: 'flex',justifyContent: 'flex-start' }}>
            {listRequester && listRequester.map((user) =>(
                <Col key= {user.userProfileID} lg='3'>
                    <Card  
                        style={{ width: '15rem',marginTop: '20px' }}
                    >
                        <Card.Body >
                            <Card.Title>{user.firstName + " " + user.lastName}</Card.Title>
                            <Card.Text>{"User ID: " + user.userId}</Card.Text>
                            <button 
                                className="btn btn-primary"
                                onClick={() => props.handle(user.userId)}
                            >Accept Request</button>
                        </Card.Body>
                    </Card>
                    
                </Col>
            ))}
=======
import {Card,Row,Col } from 'react-bootstrap'
import { useParams } from "react-router-dom";
import FriendService from "../../services/FriendService"
import {Link } from "react-router-dom";
import CardUser from "./CardUser";
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

    const handleRemoveRequest = (userID2) => {
        FriendService.removeFriendShip(userID,userID2).then(res => setChange(!change))
    }

    return (
        <div>
            <h3>Lời mời kết bạn </h3>
            <Row style={{display: 'flex',justifyContent: 'flex-start' }}>
            {listRequester && listRequester.map((user) =>(
                    <Col key= {user.userProfileID} lg='3'>
                        <CardUser user={user}/>
                        <button 
                            className="btn btn-info"
                            onClick={() => handleAcceptRequest(user.user.id)}
                        >Xác nhận</button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => handleRemoveRequest(user.user.id)}
                        >Xóa lời mời</button>
                    </Col>
                ))}
>>>>>>> Truong
            </Row >
        </div>
    )
}

export default RequesterList;