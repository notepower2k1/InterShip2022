package com.ntth.socialnetwork.service;

import java.util.List;

import com.ntth.socialnetwork.entity.PostComment;


public interface CommentService {

	List<PostComment> SelectCommentsOnPost(Long postID);

}
