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
import com.ntth.socialnetwork.entity.Location;
import com.ntth.socialnetwork.entity.Post;
import com.ntth.socialnetwork.entity.User;
import com.ntth.socialnetwork.payload.request.JoinGroupRequest;
import com.ntth.socialnetwork.payload.request.LikePostRequest;
import com.ntth.socialnetwork.repository.LikePostRepository;
import com.ntth.socialnetwork.repository.LocationRepository;
import com.ntth.socialnetwork.repository.PostRepository;
import com.ntth.socialnetwork.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/api/location")
public class LocationController {
	@Autowired
	private LocationRepository locationRepo;


	
	public LocationController(LocationRepository locationRepo) {
		super();
		this.locationRepo = locationRepo;
	}
	
	@GetMapping("/all")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	Collection<Location> getAllLocations() {
		return this.locationRepo.findAll();
	}
	@GetMapping("/{id}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<?> getLocationById(@PathVariable("id") Long id) {
		Optional<Location> location = this.locationRepo.findById(id);
		return location.map(res -> ResponseEntity.ok().body(res)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	}
	

	@PostMapping("/")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	ResponseEntity<Location> createLocation(@RequestBody Location location) throws URISyntaxException {
		Location result = locationRepo.save(location);
		return new ResponseEntity<>(result, HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	ResponseEntity<Location> updateLocation(/*@PathVariable("id") Long id, */@RequestBody Location location){
		Location result = locationRepo.save(location);
		return ResponseEntity.ok().body(result);
	}
	@DeleteMapping("/{id}")
	ResponseEntity<?> deleteLocation(@PathVariable Long id){
		locationRepo.deleteById(id);
		return ResponseEntity.ok().build();
	}
}
