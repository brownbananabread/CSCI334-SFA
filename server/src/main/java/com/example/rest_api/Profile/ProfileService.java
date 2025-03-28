package com.example.rest_api.Profile;

import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    public Profile getProfile() {

        Profile profile = new Profile("John Doe", "johndoe@gmail.com", false);
        return profile;
    }
}
