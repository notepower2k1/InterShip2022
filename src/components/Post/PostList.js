import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PostService from "../../services/post.service";
import UserService from "../../services/user.service";
import Loading from "../Loading/Loading";
import PostModal from "./PostModal";
import Post from "./Post";
import { addPost } from "../../redux/actions/PostActions";
import AuthService from '../../services/auth.service'

import "./post.css";

const PostContainer = () => {
    const user = AuthService.getCurrentUser();

    const [posts, setPosts] = useState([]);

    const [isShowed, setIsShowed] = useState(false);

    /* const forceUpdate = useForceUpdate(); */
    const dispatch = useDispatch();
    const state = useSelector(state => state.allPosts);
    
	useEffect(() => {
        getAllPosts(user.id);
    }, [state]);

    useEffect(() => {
        getAllPosts(user.id);
        return () => {
            setPosts([]);
        }
    }, []);
    const getAllPosts = async (userID) => {
        
        await PostService.getFriendPostByUserID(userID)
			.then(res => {
				let allPosts = res.data;
				allPosts.forEach(post => {
					getUserProfileByUser(post.user)
					.then(profileRes => {
						let userProfile = profileRes.data;
						post.userProfile = userProfile;
                        setPosts(prev => {
                            if (prev.every(curPostValue => curPostValue.id !== post.id)) {
                                return [...prev, post];
                            } else {
                                return [...prev];
                            }
                        });
                        if (state.allPosts.every(curPostValue => curPostValue.id !== post.id)) {
                            dispatch(addPost(post));
                        }
					});
				})
            })
            .catch(e => {
                console.log(e);
            });
    }  
     
    const getUserProfileByUser = async (user) => {
        return await UserService.readUserProfile(user);
    }




    const showModal = () => {
        setIsShowed(true);
    }

    const hideModal = () => {
        setIsShowed(false);
    }

    return (
       
            <section>
                <div class="gap gray-bg">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                            <div class="row" id="page-contents">
                                <div class="col-lg-3">
                                <aside class="sidebar static">
                                <div class="widget">
                                    <h4 class="widget-title">Shortcuts</h4>
                                    <ul class="naves">
                                    <li>
                                        <i class="ti-clipboard"></i>
                                        <a href="newsfeed.html" title="">News feed</a>
                                    </li>
                                    <li>
                                        <i class="ti-mouse-alt"></i>
                                        <a href="inbox.html" title="">Inbox</a>
                                    </li>
                                    <li>
                                        <i class="ti-files"></i>
                                        <a href="fav-page.html" title="">My pages</a>
                                    </li>
                                    <li>
                                        <i class="ti-user"></i>
                                        <a href="timeline-friends.html" title="">friends</a>
                                    </li>
                                    <li>
                                        <i class="ti-image"></i>
                                        <a href="timeline-photos.html" title="">images</a>
                                    </li>
                                    <li>
                                        <i class="ti-video-camera"></i>
                                        <a href="timeline-videos.html" title="">videos</a>
                                    </li>
                                    <li>
                                        <i class="ti-comments-smiley"></i>
                                        <a href="messages.html" title="">Messages</a>
                                    </li>
                                    <li>
                                        <i class="ti-bell"></i>
                                        <a href="notifications.html" title="">Notifications</a>
                                    </li>
                                    <li>
                                        <i class="ti-share"></i>
                                        <a href="people-nearby.html" title="">People Nearby</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-bar-chart-o"></i>
                                        <a href="insights.html" title="">insights</a>
                                    </li>
                                    <li>
                                        <i class="ti-power-off"></i>
                                        <a href="landing.html" title="">Logout</a>
                                    </li>
                                    </ul>
                                </div>
                                <div class="widget">
                                    <h4 class="widget-title">Recent Activity</h4>
                                    <ul class="activitiez">
                                    <li>
                                        <div class="activity-meta">
                                        <i>10 hours Ago</i>
                                        <span><a href="#" title="">Commented on Video posted </a></span>
                                        <h6>by <a href="time-line.html">black demon.</a></h6>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="activity-meta">
                                        <i>30 Days Ago</i>
                                        <span><a href="#" title="">Posted your status. “Hello guys, how are you?”</a></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="activity-meta">
                                        <i>2 Years Ago</i>
                                        <span><a href="#" title="">Share a video on her timeline.</a></span>
                                        <h6>"<a href="#">you are so funny mr.been.</a>"</h6>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                <div class="widget stick-widget">
                                    <h4 class="widget-title">Who's follownig</h4>
                                    <ul class="followers">
                                    <li>
                                        <figure><img src="images/resources/friend-avatar2.jpg" alt=""/></figure>
                                        <div class="friend-meta">
                                        <h4><a href="time-line.html" title="">Kelly Bill</a></h4>
                                        <a href="#" title="" class="underline">Add Friend</a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src="images/resources/friend-avatar4.jpg" alt=""/></figure>
                                        <div class="friend-meta">
                                        <h4><a href="time-line.html" title="">Issabel</a></h4>
                                        <a href="#" title="" class="underline">Add Friend</a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src="images/resources/friend-avatar6.jpg" alt=""/></figure>
                                        <div class="friend-meta">
                                        <h4><a href="time-line.html" title="">Andrew</a></h4>
                                        <a href="#" title="" class="underline">Add Friend</a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src="images/resources/friend-avatar8.jpg" alt=""/></figure>
                                        <div class="friend-meta">
                                        <h4><a href="time-line.html" title="">Sophia</a></h4>
                                        <a href="#" title="" class="underline">Add Friend</a>
                                        </div>
                                    </li>
                                    <li>
                                        <figure><img src="images/resources/friend-avatar3.jpg" alt=""/></figure>
                                        <div class="friend-meta">
                                        <h4><a href="time-line.html" title="">Allen</a></h4>
                                        <a href="#" title="" class="underline">Add Friend</a>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                                </aside>
                                </div>

                            
                                <div class="col-lg-6">
                                <div class="central-meta">
									<div class="new-postbox">
										<div class="">
											<form method="post" onClick={ showModal } >
												<textarea disabled></textarea>
												<div class="attachments">
													<ul>
														<li>
															<i class="fa fa-music"></i>
															<label class="fileContainer">
																<input type="file"/>
															</label>
														</li>
														<li>
															<i class="fa fa-image"></i>
															<label class="fileContainer">
																<input type="file"/>
															</label>
														</li>
														<li>
															<i class="fa fa-video-camera"></i>
															<label class="fileContainer">
																<input type="file"/>
															</label>
														</li>
														<li>
															<i class="fa fa-camera"></i>
															<label class="fileContainer">
																<input type="file"/>
															</label>
														</li>
														<li>
															<button type="submit">Post</button>
														</li>
													</ul>
												</div>
											</form>
										</div>
									</div>
								</div>

                                { isShowed ? <PostModal handleClose={ hideModal } /> : '' }
                                {
                                    posts === undefined || posts.length === 0 ?
                                        <Loading />
                                    : posts.map((post, index) => (
                                        <div class="central-meta item" key={index}>
                                            <Post data={post}/>
                                            </div>
                                        
                                       
                                    ))
                                }
                                </div>
                                <div class="col-lg-3">
                                    <aside class="sidebar static">
                                        <div class="widget">
                                            <h4 class="widget-title">Your page</h4>	
                                            <div class="your-page">
                                                <figure>
                                                    <a href="#" title=""><img src="images/resources/friend-avatar9.jpg" alt=""/></a>
                                                </figure>
                                                <div class="page-meta">
                                                    <a href="#" title="" class="underline">My page</a>
                                                    <span><i class="ti-comment"></i><a href="insight.html" title="">Messages <em>9</em></a></span>
                                                    <span><i class="ti-bell"></i><a href="insight.html" title="">Notifications <em>2</em></a></span>
                                                </div>
                                                <div class="page-likes">
                                                    <ul class="nav nav-tabs likes-btn">
                                                        <li class="nav-item"><a class="active" href="#link1" data-toggle="tab">likes</a></li>
                                                        <li class="nav-item"><a class="" href="#link2" data-toggle="tab">views</a></li>
                                                    </ul>
                                                    <div class="tab-content">
                                                    <div class="tab-pane active fade show " id="link1" >
                                                        <span><i class="ti-heart"></i>884</span>
                                                        <a href="#" title="weekly-likes">35 new likes this week</a>
                                                        <div class="users-thumb-list">
                                                            <a href="#" title="Anderw" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-1.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="frank" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-2.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sara" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-3.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Amy" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-4.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Ema" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-5.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sophie" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-6.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Maria" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-7.jpg" alt=""/>  
                                                            </a>  
                                                        </div>
                                                    </div>
                                                    <div class="tab-pane fade" id="link2" >
                                                        <span><i class="ti-eye"></i>440</span>
                                                        <a href="#" title="weekly-likes">440 new views this week</a>
                                                        <div class="users-thumb-list">
                                                            <a href="#" title="Anderw" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-1.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="frank" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-2.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sara" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-3.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Amy" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-4.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Ema" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-5.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Sophie" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-6.jpg" alt=""/>  
                                                            </a>
                                                            <a href="#" title="Maria" data-toggle="tooltip">
                                                                <img src="images/resources/userlist-7.jpg" alt=""/>  
                                                            </a>  
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                        <div class="widget friend-list stick-widget">
                                            <h4 class="widget-title">Friends</h4>
                                            <div id="searchDir"></div>
                                            <ul id="people-list" class="friendz-list">
                                                <li>
                                                    <figure>
                                                        <img src="images/resources/friend-avatar.jpg" alt=""/>
                                                        <span class="status f-online"></span>
                                                    </figure>
                                                    <div class="friendz-meta">
                                                        <a href="time-line.html">bucky barnes</a>
                                                        <i><a href="https://wpkixx.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="a0d7c9ced4c5d2d3cfccc4c5d2e0c7cdc1c9cc8ec3cfcd">[email&#160;protected]</a></i>
                                                    </div>
                                                </li>
                                              
                                            </ul>
                                            <div class="chat-box">
                                                <div class="chat-head">
                                                    <span class="status f-online"></span>
                                                    <h6>Bucky Barnes</h6>
                                                    <div class="more">
                                                        <span><i class="ti-more-alt"></i></span>
                                                        <span class="close-mesage"><i class="ti-close"></i></span>
                                                    </div>
                                                </div>
                                                <div class="chat-list">
                                                    <ul>
                                                        <li class="me">
                                                            <div class="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
                                                            <div class="notification-event">
                                                                <span class="chat-message-item">
                                                                    Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                                                </span>
                                                                <span class="notification-date">Yesterday at 8:10pm</span>
                                                            </div>
                                                        </li>
                                                        <li class="you">
                                                            <div class="chat-thumb"><img src="images/resources/chatlist2.jpg" alt=""/></div>
                                                            <div class="notification-event">
                                                                <span class="chat-message-item">
                                                                    Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                                                </span>
                                                                <span class="notification-date">Yesterday at 8:10pm</span>
                                                            </div>
                                                        </li>
                                                        <li class="me">
                                                            <div class="chat-thumb"><img src="images/resources/chatlist1.jpg" alt=""/></div>
                                                            <div class="notification-event">
                                                                <span class="chat-message-item">
                                                                    Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                                                </span>
                                                                <span class="notification-date">Yesterday at 8:10pm</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <form class="text-box">
                                                        <textarea placeholder="Post enter to post..."></textarea>
                                                        <div class="add-smiles">
                                                            <span title="add icon" class="em em-expressionless"></span>
                                                        </div>
                                                        <div class="smiles-bunch">
                                                            <i class="em em---1"></i>
                                                            <i class="em em-smiley"></i>
                                                            <i class="em em-anguished"></i>
                                                            <i class="em em-laughing"></i>
                                                            <i class="em em-angry"></i>
                                                            <i class="em em-astonished"></i>
                                                            <i class="em em-blush"></i>
                                                            <i class="em em-disappointed"></i>
                                                            <i class="em em-worried"></i>
                                                            <i class="em em-kissing_heart"></i>
                                                            <i class="em em-rage"></i>
                                                            <i class="em em-stuck_out_tongue"></i>
                                                        </div>
                                                        <button type="submit"></button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
    );
}

export default PostContainer;