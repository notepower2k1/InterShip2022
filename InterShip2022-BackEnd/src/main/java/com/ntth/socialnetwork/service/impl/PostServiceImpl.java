package com.ntth.socialnetwork.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntth.socialnetwork.entity.Post;
import com.ntth.socialnetwork.repository.PostRepository;
import com.ntth.socialnetwork.service.PostService;

@Service
public class PostServiceImpl implements PostService{

	@Autowired
	private PostRepository postRepo;
	
	@Override
	public List<Post> getPostsWithUserID(Long userID) {
		// TODO Auto-generated method stub
		return postRepo.getPostsWithUserID(userID);
	}

}
