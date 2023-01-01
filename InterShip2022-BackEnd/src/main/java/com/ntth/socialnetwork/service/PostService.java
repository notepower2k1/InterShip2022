package com.ntth.socialnetwork.service;

import java.util.List;


import com.ntth.socialnetwork.entity.Post;

public interface PostService {
	List<Post> getPostsWithUserID(Long userID);

}
