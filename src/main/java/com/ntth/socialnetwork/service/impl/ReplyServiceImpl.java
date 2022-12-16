package com.ntth.socialnetwork.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntth.socialnetwork.entity.Reply;
import com.ntth.socialnetwork.repository.ReplyRepository;
import com.ntth.socialnetwork.service.ReplyService;
@Service
public class ReplyServiceImpl implements ReplyService{

	@Autowired
	private ReplyRepository replyRepo;

	@Override
	public List<Reply> SelectRepliesOnComment(Long commentID) {
		// TODO Auto-generated method stub
		return this.replyRepo.SelectRepliesOnComment(commentID);
	}

}
