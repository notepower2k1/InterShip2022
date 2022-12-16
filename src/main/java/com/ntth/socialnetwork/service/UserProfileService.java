package com.ntth.socialnetwork.service;


import com.ntth.socialnetwork.entity.UserProfile;

public interface UserProfileService {

	UserProfile getProfileWithUserID(Long userID);
}
