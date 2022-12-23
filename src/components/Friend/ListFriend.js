import { useEffect, useState } from "react";
import {Form,Card,Button,Row,Col } from 'react-bootstrap'
import FriendService from "../../services/FriendService"
<<<<<<< HEAD
import {Link } from "react-router-dom";
function ListFriend(props){
    const [listFriend,setListFriend] = useState()

=======
import {storage} from '../../utils/firebaseConfig';
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import {Link } from "react-router-dom";
import CardUser from "./CardUser";
function ListFriend(props){
    const [listFriend,setListFriend] = useState()
    const [avatar,setAvatar] = useState()
>>>>>>> Truong
    useEffect(() => {
        FriendService.getListFriend(props.userID).then(res => setListFriend(res.data))
    },[props.userID])

    // console.log(listFriend);
    // const handleRemoveFriend = (userId1) => {
    //     removeFriendShip(userId1,userId).then(() => setChange(!change))
    // }
    
<<<<<<< HEAD
    return (
        <div>
            {listFriend && 
            <div>
                <h5>Danh sách bạn bè: </h5>
                <Row style={{display: 'flex',justifyContent: 'flex-start' }}>
                { listFriend.map((user) =>(
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
                                {/* <button 
                                    className="btn btn-danger"
                                    // onClick={() => handleRemoveFriend(user.userId)}
                                >Remove</button> */}
                            </Card.Body>
                        </Card>
=======
    const getImageAvatar = async(avatar) => {

    }

    return (
        <div>
            <h5>Danh sách bạn bè: </h5>
            {listFriend && 
            <div>
                <Row style={{display: 'flex',justifyContent: 'flex-start' }}>
                { listFriend.map((user) =>(
                    <Col key= {user.userProfileID} lg='3'>
                        <CardUser 
                            user = {user}
                        />
>>>>>>> Truong
                    </Col>
                ))}
                </Row >
            </div>}
        </div>
        
    )
}

export default ListFriend