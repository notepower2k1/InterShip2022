package com.ntth.socialnetwork.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ntth.socialnetwork.entity.LikePost;
import com.ntth.socialnetwork.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
    
    // 2 Query, 1 lấy Năm, 1 lấy Count User rồi bỏ vào Chart 
    // Group By để lấy Năm theo thứ tự tăng dần 
    
    @Query(value = "SELECT DISTINCT YEAR(registered_date) FROM user GROUP BY YEAR(registered_date)"
		//	+ "WHERE l.user_id = :#{#user_id} AND p.post_id = l.post_id"
			, nativeQuery = true)
	public List<Long> getYearByUser();
    
    // DISTINCT YEAR(registered_date) as 'Year'
    @Query(value = "SELECT COUNT(user_id) as 'Total User Register' FROM user GROUP BY YEAR(registered_date)"
    			, nativeQuery = true)
    public List<Long> countUserByYear();
    
    // MonthName nên phải List<String>
    @Query(value = "SELECT DISTINCT MONTHNAME(registered_date) FROM user WHERE YEAR(registered_date) = :#{#year} GROUP BY MONTH(registered_date)"
    			, nativeQuery = true)
    public List<String> getMonthByUser(@Param("year") Long year);
        
    @Query(value = "SELECT COUNT(user_id) as 'Total User Register' FROM user WHERE YEAR(registered_date) = :#{#year} GROUP BY MONTH(registered_date)"
        			, nativeQuery = true)
    public List<Long> countUserByMonth(@Param("year") Long year);
    
    @Query(value = "SELECT username FROM user"
			, nativeQuery = true)
    public List<String> getListUserName();
    
    @Query(value = "SELECT name FROM role"
 			, nativeQuery = true)
    public List<String> getListRole();
    
    
}
