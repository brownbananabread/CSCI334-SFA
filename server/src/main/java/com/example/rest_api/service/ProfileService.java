package com.example.rest_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.example.rest_api.entity.Profile;
import com.example.rest_api.repository.ProfileRepository;

@Service
public class ProfileService {

    @Autowired
    private ProfileRepository profileRepository;

    public Profile getProfile() {
        Profile profile = new Profile("John Doe", "johndoe@gmail.com", true);
        return profile;
    }
}
