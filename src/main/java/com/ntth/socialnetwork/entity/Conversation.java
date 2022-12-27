package com.ntth.socialnetwork.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonCreator;

@Entity
@Table(name = "conversation")
public class Conversation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "c_id", nullable = false)
	private Long id;


	
	@NotNull
	@Column(name = "status", nullable = false)
	private int status;
	
	@ManyToOne
    @JoinColumn(name="user_one", nullable=false)
    private User userOne;
	
	@ManyToOne
    @JoinColumn(name="user_two", nullable=false)
    private User userTwo;

	
	@OneToMany(mappedBy="conversation", cascade = CascadeType.ALL)
  	private Set<ConversationReply> conversationReply;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}



	public User getUserOne() {
		return userOne;
	}

	public void setUserOne(User userOne) {
		this.userOne = userOne;
	}

	public User getUserTwo() {
		return userTwo;
	}

	public void setUserTwo(User userTwo) {
		this.userTwo = userTwo;
	}

	public Conversation(Long id, User userOne, User userTwo) {
		super();
		this.id = id;
		this.userOne = userOne;
		this.userTwo = userTwo;
	}

	public Conversation() {
		super();
	}
	





	
	
	
	
}
