import { useEffect, useState } from "react";
import {Card,Row,Col } from 'react-bootstrap'
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import FriendService from "../../services/FriendService"
import {Link } from "react-router-dom";
import CardUser from "./CardUser";
import conversationService from '../../services/conversationService'
=======
import FriendService from "../../services/friend.service"

import CardUser from "./CardUser";
import ConversationService from '../../services/conver.service'
>>>>>>> 011f4c225c0dd8ea303285014bf400362909f193
import AuthService from '../../services/auth.service'

function RequesterList(){

    const [listRequester, setListRequester] = useState()
    const [change,setChange] = useState(false)
    const {userID} = useParams();
    const currentUser = AuthService.getCurrentUser();

    useEffect(() =>{
        FriendService.getListRequester(userID).then(res => setListRequester(res.data))
    },[userID,change])
    
    const handleAcceptRequest = (user) => {

      


        FriendService.acceptRequest(userID,user.user.id).then((res) => {
     

         
            const status = 0;
            const userOne = user.user;
            const userTwo = currentUser;
            var conversation = {status,userOne,userTwo}
<<<<<<< HEAD
            conversationService.createConversation(conversation).then(res =>{
=======
            ConversationService.createConversation(conversation).then(res =>{
>>>>>>> 011f4c225c0dd8ea303285014bf400362909f193

              setChange(!change)
            }).catch((err)=>{
              console.log(err)
            }); 
   

        
 
        });
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
                            onClick={() => handleAcceptRequest(user)}
                        >Xác nhận</button>
                        <button 
                            className="btn btn-secondary"
                            onClick={() => handleRemoveRequest(user.user.id)}
                        >Xóa lời mời</button>
                    </Col>
                ))}
            </Row >
        </div>
    )
}

export default RequesterList;