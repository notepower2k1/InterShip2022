package com.ntth.socialnetwork.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ntth.socialnetwork.entity.Districts;
import com.ntth.socialnetwork.entity.Location;
import com.ntth.socialnetwork.entity.Provinces;
import com.ntth.socialnetwork.entity.Wards;

public interface LocationRepository extends JpaRepository<Location, Long> {

	

	

}
