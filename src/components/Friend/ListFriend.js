import { useEffect, useState } from "react";
import {Form,Card,Button,Row,Col } from 'react-bootstrap'
import FriendService from "../../services/FriendService"
import {storage} from '../../utils/firebaseConfig';
import {ref,uploadBytes,getDownloadURL} from "firebase/storage";
import {Link } from "react-router-dom";
import CardUser from "./CardUser";
function ListFriend(props){
    const [listFriend,setListFriend] = useState()
    const [avatar,setAvatar] = useState()
    useEffect(() => {
        FriendService.getListFriend(props.userID).then(res => setListFriend(res.data))
    },[props.userID])

    // console.log(listFriend);
    // const handleRemoveFriend = (userId1) => {
    //     removeFriendShip(userId1,userId).then(() => setChange(!change))
    // }
    
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
                    </Col>
                ))}
                </Row >
            </div>}
        </div>
        
    )
}

export default ListFriend