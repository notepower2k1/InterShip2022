package com.ntth.socialnetwork.service;

import java.util.List;

import com.ntth.socialnetwork.entity.Reply;


public interface ReplyService {

	List<Reply> SelectRepliesOnComment(Long commentID);

}
