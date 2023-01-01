import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AuthService from "../../services/auth.service";
import PostService from "../../services/post.service";
import LikePostService from "../../services/likepost.service";
import UserService from "../../services/user.service";
import Loading from "../Loading/Loading";
import PostModal from "./PostModal";
import Post from "./Post";
import { addPost } from "../../redux/actions/PostActions";

import "./post.css";

const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    const [isShowed, setIsShowed] = useState(false);

    /* const forceUpdate = useForceUpdate(); */
    const dispatch = useDispatch();
    const state = useSelector(state => state.allPosts);

    const [likes, setLikes] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const [postsLiked, setPostLiked] = useState([]);
    const [userID, setUserIDLiked] = useState([]);
    const [newPosts, setNewPosts] = useState([]);
    const [isRerender, setIsRerender] = useState(false);

    const currentUser = AuthService.getCurrentUser();
    

	useEffect(() => {
        getAllPosts();
    }, [state]);
    

    useEffect(() => {
        getAllPosts();
        return () => {
            setPosts([]);
        }
    }, []);

    useEffect(() => {
        getPostsCurrentUserLiked(currentUser.id);
    }, [isRerender]);

    useEffect(() => {
        // some để trả về True/False với điều kiện
        // Điều kiện ở đây
        // Không lấy được postLiked.id vì ghi sai
        // Ghi đúng là postLiked.post.id
 
        let newPosts = (posts && postsLiked) && posts.map(post => {
            if (postsLiked.some(postLiked => postLiked.post.id === post.id)) {
                post.isLiked = true;
    
            } 
            // Điều kiện if không ăn nên lấy else
            else 
            {
                //setIsLiked(false);
                post.isLiked = false;
            }
            return post;
        });

        // console.log(newPosts);

        setNewPosts(newPosts);
       
    }, [postsLiked, posts, isRerender])

        
    const getPostsCurrentUserLiked = async (userID) => {
        await LikePostService.readPostUserLiked(userID)
            .then(res => {
                setPostLiked(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const getAllPosts = async () => {
        
        await PostService.readAllPosts()
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
        <>
            <button type="button" className="btn btn-primary" onClick={ showModal }>Add</button>
            { isShowed ? <PostModal handleClose={ hideModal } /> : '' }
            {
                posts === undefined || posts.length === 0 ?
                    <Loading />
                // Render Post
                : newPosts && newPosts.map((post, index) => (
					<Post 
                    key={index} 
                    data={post}
                    render={setIsRerender}
                    //like={isLiked}
                    // user = {currentUser}

                    // liked = {
                    //     post.likes.filter((like) => like.data === currentUser).length > 0
                    // }

                    />
                    // Nếu gọi {user} bên Post.js thì truyền ở vào sau đoạn data={post}
                    // user= {currentUser} 
				))
            }
        </>
    );
}

export default PostContainer;