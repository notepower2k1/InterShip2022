package com.ntth.socialnetwork.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ntth.socialnetwork.entity.User;
import com.ntth.socialnetwork.entity.UserProfile;


@Repository
public interface UserProfileRepository extends JpaRepository<UserProfile, Long> {
	
	@Query(value="SELECT * from userprofile where user_id =:#{#user_id}",nativeQuery = true)
	UserProfile getProfileWithUserID(@Param("user_id") Long userID);
	
	
	Optional<UserProfile> findByUser(User user);
}
