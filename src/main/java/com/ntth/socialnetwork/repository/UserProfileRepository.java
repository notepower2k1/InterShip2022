package com.ntth.socialnetwork.repository;

import java.util.List;
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
	
	@Query(value = "SELECT * FROM userprofile up WHERE up.first_name LIKE %:keyword% OR up.last_name LIKE %:keyword% "
			+ "OR up.about like %:keyword% ", nativeQuery = true)
	List<UserProfile> findByKeyword(@Param("keyword") String keyword);
	
	//get all list friend
	@Query(value = "SELECT * FROM userprofile up JOIN friendship f ON up.user_id = f.user_id_1 "
			+ "WHERE f.user_id_2 = :userID and status_id = 2 "
			+ "UNION SELECT *  FROM userprofile up JOIN friendship f ON up.user_id = f.user_id_2 "
			+ "WHERE f.user_id_1 = :userID and status_id = 2",nativeQuery = true)
	List<UserProfile> getListFriend(@Param("userID") long userId);
	
	//get list people send add request to userID
	@Query(value = "SELECT * FROM userprofile up JOIN friendship f ON up.user_id = f.user_id_1 "
			+ "WHERE f.user_id_2 = :userID and f.status_id = 1", nativeQuery = true)
	List<UserProfile> getListRequestFriendToUser(@Param("userID")  long userId);
	
	//get list user request friend
	@Query(value = "SELECT * FROM userprofile up JOIN friendship f ON up.user_id = f.user_id_2 "
			+ "WHERE f.user_id_1 = :userID and f.status_id = 1", nativeQuery = true)
	List<UserProfile> getListUserRequestFriend(@Param("userID") long userId);
	
	//get list in friendship with user
	//get all list friend
	@Query(value = "SELECT * FROM userprofile up JOIN friendship f ON up.user_id = f.user_id_1 "
			+ "WHERE f.user_id_2 = :userID "
			+ "UNION SELECT *  FROM userprofile up JOIN friendship f ON up.user_id = f.user_id_2 "
			+ "WHERE f.user_id_1 = :userID ",nativeQuery = true)
	List<UserProfile> getListFriendShip(@Param("userID") long userId);
	
	
	
	Optional<UserProfile> findByUser(User user);
}
