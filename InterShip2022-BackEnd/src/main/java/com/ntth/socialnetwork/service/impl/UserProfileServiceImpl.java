package com.ntth.socialnetwork.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ntth.socialnetwork.entity.UserProfile;
import com.ntth.socialnetwork.repository.UserProfileRepository;
import com.ntth.socialnetwork.service.UserProfileService;
@Service
public class UserProfileServiceImpl implements UserProfileService {

	@Autowired
	private UserProfileRepository userProfileRepo;

	@Override
	public UserProfile getProfileWithUserID(Long userID) {
		// TODO Auto-generated method stub
		return userProfileRepo.getProfileWithUserID(userID);
	}

}
