package com.ntth.socialnetwork.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ntth.socialnetwork.entity.Conversation;

public interface ConversationRepository extends JpaRepository<Conversation, Long> {

	@Query(value = "SELECT * FROM conversation WHERE (user_one = :#{#userID}) or (user_two = :#{#userID})", nativeQuery = true)
	List<Conversation> getConversationByUserID(@Param("userID") long userID) ;
}
