import { useEffect, useState, useRef } from "react";
import {Link } from "react-router-dom";
import NotificationService from "../../services/NotificationService";
import FirebaseService from '../../services/firebaseService';
import { io } from 'socket.io-client';
import "./Notification.css"
import NotificationDetail from "./NotificationDetail";
function NotificationList({currentUser,socket}){

    const [listNoti,setListNoti] = useState([])
    const [arrivalNoti,setArrivalNoti] = useState()
    const [length,setLength] = useState()
    const [change,setChange] = useState(false)
    const dropdownRef = useRef()

    useEffect(() => {
        NotificationService.getByIdRecipient(currentUser.id).then(res => setListNoti(res.data));
        NotificationService.getLengthNewNotification(currentUser.id).then(res => setLength(res));
    },[change])

    useEffect(()=>{
        socket.on("getNotification",data=> {
            setArrivalNoti(data)
        })
    },[socket])
  
      useEffect(()=>{
        arrivalNoti && setListNoti((prev) => [...prev, arrivalNoti]);
        NotificationService.getLengthNewNotification(currentUser.id).then(res => setLength(res));
      },[arrivalNoti])

    const showNoti = () => {
        dropdownRef.current.classList.toggle("active")
        NotificationService.checkedAllNotificaiton().then(res => setChange(!change));
    }

    return (
        <li>
            <p className="notification" onClick={() => showNoti()}>
                <i className="ti-bell" ></i>{length > 0 && <span className="length-show">{length}</span>}
            </p>
            <div className="dropdowns dropdown-noti" ref={dropdownRef}>
                <ul className="drops-menu">
                {
                    listNoti && listNoti.map(noty => <NotificationDetail noty = {noty} handle={showNoti}/>)
                }
                </ul>
            </div>
        </li>
    );
}

export default NotificationList;