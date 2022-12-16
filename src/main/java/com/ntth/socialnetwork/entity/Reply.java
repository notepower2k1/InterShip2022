package com.ntth.socialnetwork.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "comment_reply")
public class Reply {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_reply_id ", nullable = false)
	private Long id;
	@Column(name = "reply", nullable = false)
	private String reply;
	@Column(name = "date_reply", nullable = false)
	private String dateReply;
	
	@ManyToOne
    @JoinColumn(name="user_id", nullable=false)
    private User user;
	
   
	@ManyToOne
	@JoinColumn(name = "post_comment_id ", nullable = false)
	private PostComment comment;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getReply() {
		return reply;
	}

	public void setReply(String reply) {
		this.reply = reply;
	}

	public String getDateReply() {
		return dateReply;
	}

	public void setDateReply(String dateReply) {
		this.dateReply = dateReply;
	}

	


	public Reply(Long id, String reply, String dateReply, User user, PostComment comment) {
		super();
		this.id = id;
		this.reply = reply;
		this.dateReply = dateReply;
		this.user = user;
		this.comment = comment;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public PostComment getComment() {
		return comment;
	}

	public void setComment(PostComment comment) {
		this.comment = comment;
	}

	public Reply() {
		super();
	}


	
	
}
