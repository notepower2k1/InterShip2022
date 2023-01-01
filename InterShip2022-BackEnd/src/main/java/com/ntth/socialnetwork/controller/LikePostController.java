package com.ntth.socialnetwork.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ntth.socialnetwork.entity.Group;
import com.ntth.socialnetwork.entity.LikePost;
import com.ntth.socialnetwork.entity.Post;
import com.ntth.socialnetwork.entity.User;
import com.ntth.socialnetwork.payload.request.JoinGroupRequest;
import com.ntth.socialnetwork.payload.request.LikePostRequest;
import com.ntth.socialnetwork.repository.LikePostRepository;
import com.ntth.socialnetwork.repository.PostRepository;
import com.ntth.socialnetwork.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/api/like")
public class LikePostController {
	@Autowired
	private LikePostRepository likeRepo;
	
	@Autowired
	private PostRepository postRepo;

	@Autowired
	private UserRepository userRepo;


	public LikePostController(LikePostRepository likeRepo) {
		super();
		this.likeRepo = likeRepo;
	}
	
	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	Collection<LikePost> getAllLikes() {
		return this.likeRepo.findAll();
	}
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<?> getLikeById(@PathVariable("id") Long id) {
		Optional<LikePost> like = this.likeRepo.findById(id);
		return like.map(res -> ResponseEntity.ok().body(res)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	

	@PostMapping("/add")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<LikePost> createLike(@RequestBody LikePost like) throws URISyntaxException {
		LikePost result = likeRepo.save(like);
		return new ResponseEntity<>(result, HttpStatus.CREATED);
	}
	
	@PutMapping("/update/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<LikePost> updateLike(/*@PathVariable("id") Long id, */@RequestBody LikePost like){
		LikePost result = likeRepo.save(like);
		return ResponseEntity.ok().body(result);
	}
	
	@DeleteMapping("/remove/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<?> deleteLike(@PathVariable Long id){
		likeRepo.deleteById(id);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping("/{id}/total-like")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public ResponseEntity<?> getTotalLike(@PathVariable("id") Long id) {
		try {
			Long total = likeRepo.getTotalLike(id);
			return new ResponseEntity<>(total, HttpStatus.ACCEPTED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
//	@GetMapping("/post-liked/{id}")
//	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//	public ResponseEntity<List<LikePost>> getPostUserLiked(@PathVariable("id") Long id) {
//		try {
//			List<LikePost> posts = likeRepo.getPostsUserLiked(id);
//			return new ResponseEntity<>(posts, HttpStatus.ACCEPTED);
//		} catch (Exception e) {	
//			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}
//	
//	

}
