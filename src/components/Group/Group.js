import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import UserService from "../../services/user.service";
import GroupService from "../../services/group.service";

const Group = ({ data, user }) => {

    const [totalMembers, setTotalMembers] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        GroupService.readTotalMembersById(data.id)
            .then(res => {
                setTotalMembers(res.data);
            })
            .catch(err => {

            })
    }, [])

    const handleJoinGroup = async (event) => {
        event.preventDefault();
        await UserService.joinGroup(data.id, user.id)
            .then((res) => {
                console.log(res.data);
                navigate("/group/" + data.id);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="nearly-pepls">
            <figure>
                <Link to={"/group/"+data.id} title=""><img src="images/resources/group1.jpg" alt="" /></Link>
            </figure>
            <div className="pepl-info">
                <h4><Link to={"/group/"+data.id}>{ data.groupName }</Link></h4>
                <span>(public-private)</span>
                <em>{ totalMembers } thành viên</em>
                {
                    data.isJoined 
                        ? <a href="#" title="" className="add-butn bg-secondary" data-ripple="" 
                            onClick={ handleJoinGroup }
                            style={{ pointerEvents: "none" }}
                        >Joined 😉😉</a>
                        : <a href="#" title="" className="add-butn" data-ripple="" 
                            onClick={ handleJoinGroup }
                        >join now</a>
                }
                
                
            </div>
        </div>
    )
}

export default Group;