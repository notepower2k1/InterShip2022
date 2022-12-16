package com.ntth.socialnetwork.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntth.socialnetwork.entity.PostComment;
import com.ntth.socialnetwork.repository.PostCommentRepository;
import com.ntth.socialnetwork.service.CommentService;
@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	private PostCommentRepository commentRepo;
	
	@Override
	public List<PostComment> SelectCommentsOnPost(Long postID) {
		// TODO Auto-generated method stub
		return commentRepo.SelectCommentsOnPost(postID);
	}

}
