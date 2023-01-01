package com.ntth.socialnetwork.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ntth.socialnetwork.entity.Group;
import com.ntth.socialnetwork.entity.LikePost;
import com.ntth.socialnetwork.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	@Query(value="SELECT * from post where user_id =:#{#user_id}",nativeQuery = true)
	List<Post> getPostsWithUserID(@Param("user_id") Long userID);
	
	@Query(value = "SELECT p.post_id, p.user_id, p.content, p.image, p.published_date FROM post p JOIN userprofile up "
			+ "ON p.user_id = up.user_id WHERE p.content like %:keyword% or up.first_name like %:keyword% "
			+ "or up.last_name LIKE %:keyword% ", nativeQuery = true)
	List<Post> findByKeyword(@Param("keyword") String keyword);

	
    // 2 Query, 1 lấy Năm, 1 lấy Count Post rồi bỏ vào Chart 
    // Group By để lấy Năm theo thứ tự tăng dần 
    
    @Query(value = "SELECT DISTINCT YEAR(published_date) FROM post GROUP BY YEAR(published_date)"
		//	+ "WHERE l.user_id = :#{#user_id} AND p.post_id = l.post_id"
			, nativeQuery = true)
	public List<Long> getYearByPost();
    
    // DISTINCT YEAR(registered_date) as 'Year'
    @Query(value = "SELECT COUNT(post_id) as 'Total Post Published' FROM post GROUP BY YEAR(published_date)"
    			, nativeQuery = true)
    public List<Long> countPostByYear();
    
    // MonthName nên phải List<String>
    @Query(value = "SELECT DISTINCT MONTHNAME(published_date) FROM post WHERE YEAR(published_date) = :#{#year} GROUP BY MONTH(published_date)"
    			, nativeQuery = true)
    public List<String> getMonthByPost(@Param("year") Long year);
        
    @Query(value = "SELECT COUNT(post_id) as 'Total Post Published' FROM post WHERE YEAR(published_date) = :#{#year} GROUP BY MONTH(published_date)"
        			, nativeQuery = true)
    public List<Long> countPostByMonth(@Param("year") Long year);
}
