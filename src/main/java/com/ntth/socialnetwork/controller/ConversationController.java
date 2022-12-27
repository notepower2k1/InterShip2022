package com.ntth.socialnetwork.controller;

import java.net.URISyntaxException;
import java.sql.Timestamp;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntth.socialnetwork.entity.Conversation;
import com.ntth.socialnetwork.entity.ConversationReply;
import com.ntth.socialnetwork.entity.User;
import com.ntth.socialnetwork.repository.ConversationRepository;
import com.ntth.socialnetwork.repository.UserRepository;


@RestController
@CrossOrigin
@RequestMapping("/api/conversation")
public class ConversationController {

	@Autowired
	private ConversationRepository conversationRepository;
	
	@Autowired
	UserRepository userRepository;
	
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
	
	

	@PostMapping("/add")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<Conversation> createConversation(@RequestBody Conversation conversation) throws URISyntaxException {
		Conversation result = conversationRepository.save(conversation);
		return new ResponseEntity<>(result, HttpStatus.CREATED);
	}
	
	

}
