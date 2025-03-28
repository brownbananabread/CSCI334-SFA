package com.example.rest_api.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        Profile profile = profileService.getProfile();
        if (profile == null) {
            return ResponseEntity.status(401).build();
        }

        return ResponseEntity.ok(profile.getAll());
    }
}
