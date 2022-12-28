import { useEffect, useState } from "react";
import {Row,Col } from 'react-bootstrap'
import FriendService from "../../services/FriendService"
import CardUser from "./CardUser";
function ListFriend(props){
    const [listFriend,setListFriend] = useState()

    useEffect(() => {
        FriendService.getListFriend(props.userID).then(res => setListFriend(res.data))
    },[props.userID])

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