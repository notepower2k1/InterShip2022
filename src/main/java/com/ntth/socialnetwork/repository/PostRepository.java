package com.ntth.socialnetwork.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ntth.socialnetwork.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	@Query(value="SELECT * from post where user_id =:#{#user_id}",nativeQuery = true)
	List<Post> getPostsWithUserID(@Param("user_id") Long userID);
	
	@Query(value = "SELECT p.post_id, p.user_id, p.content, p.image, p.published_date FROM post p JOIN userprofile up "
			+ "ON p.user_id = up.user_id WHERE p.content like %:keyword% or up.first_name like %:keyword% "
			+ "or up.last_name LIKE %:keyword% ", nativeQuery = true)
	List<Post> findByKeyword(@Param("keyword") String keyword);
}
