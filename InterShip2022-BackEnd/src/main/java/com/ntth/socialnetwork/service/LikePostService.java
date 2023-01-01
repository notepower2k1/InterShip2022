package com.ntth.socialnetwork.service;

import com.ntth.socialnetwork.entity.LikePost;
import com.ntth.socialnetwork.entity.UserProfile;

public interface LikePostService {
	LikePost getLikePostWithID(Long postID, Long userID);
}
