package com.ntth.socialnetwork.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntth.socialnetwork.entity.Conversation;
import com.ntth.socialnetwork.repository.ConversationRepository;


@RestController
@CrossOrigin
@RequestMapping("/api/conversation")
public class ConversationController {

	@Autowired
	private ConversationRepository conversationRepository;
	
	
	@GetMapping("/{userID}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public ResponseEntity<List<Conversation>> getAllConversationsList(@PathVariable("userID") Long userID) {
		try {
			List<Conversation> allConversations = conversationRepository.getConversationByUserID(userID);
			return new ResponseEntity<List<Conversation>>(allConversations, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	

}
