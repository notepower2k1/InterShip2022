package com.ntth.socialnetwork.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ntth.socialnetwork.entity.ConverJoinDetails;

@Repository
public interface ConvJoinDetailsRepository extends JpaRepository<ConverJoinDetails, Long> {

}
