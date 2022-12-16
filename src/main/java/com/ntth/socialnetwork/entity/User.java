package com.ntth.socialnetwork.entity;

import java.sql.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "user", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", nullable = false)
	private Long id;

	@NotBlank
	@Size(max = 20)
	@Column(name = "username", nullable = false)
	private String username;

  	@NotBlank
  	@Size(max = 50)
  	@Email
  	@Column(name = "email", nullable = false)
  	private String email;

  	@NotBlank
  	@Size(max = 120)
  	@Column(name = "password", nullable = false)
  	private String password;
  
  	@Column(name = "registered_date", nullable = false)
  	private Date registeredDate;
  	@JsonIgnore
  	@ManyToMany(fetch = FetchType.LAZY)
  	@JoinTable(  name = "user_roles", 
        joinColumns = @JoinColumn(name = "user_id"), 
        inverseJoinColumns = @JoinColumn(name = "role_id"))
  	private Set<Role> roles = new HashSet<>();
  
  	@JsonIgnore
  	@OneToMany(mappedBy="user")
  	private Set<Post> post;
  	
  	@JsonIgnore
  	@OneToMany(mappedBy="user")
  	private Set<PostComment> comment;
  	
  	@JsonIgnore
  	@OneToMany(mappedBy="user", cascade = CascadeType.ALL)
  	private Set<GroupJoinDetails> gpDetailsList;
  	

	
  	public Set<Post> getPost() {
		return post;
	}

	public void setPost(Set<Post> post) {
		this.post = post;
	}

	public Set<PostComment> getComment() {
		return comment;
	}

	public void setComment(Set<PostComment> comment) {
		this.comment = comment;
	}

	public Set<GroupJoinDetails> getGpDetailsList() {
		return gpDetailsList;
	}

	public void setGpDetailsList(Set<GroupJoinDetails> gpDetailsList) {
		this.gpDetailsList = gpDetailsList;
	}

	
	public User() {
  		
  	}

  	public User(String username, String email, String password, Date registeredDate) {
	  this.username = username;
	  this.email = email;
	  this.password = password;
	  this.registeredDate = registeredDate;
  	}

  	public Long getId() {
  		return id;
  	}

  	public void setId(Long id) {
  		this.id = id;
  	}

  	public String getUsername() {
  		return username;
  	}

  	public void setUsername(String username) {
	  	this.username = username;
  	}

  	public String getEmail() {
  		return email;
  	}

  	public void setEmail(String email) {
  		this.email = email;
  	}

  	public String getPassword() {
  		return password;
  	}

  	public void setPassword(String password) {
  		this.password = password;
  	}

  	public Set<Role> getRoles() {
  		return roles;
  	}

  	public void setRoles(Set<Role> roles) {
  		this.roles = roles;
  	}

	public Date getRegisteredDate() {
		return registeredDate;
	}
	
	public void setRegisteredDate(Date registeredDate) {
		this.registeredDate = registeredDate;
	}
}
