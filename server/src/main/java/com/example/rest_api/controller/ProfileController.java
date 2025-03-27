package com.example.rest_api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

import com.example.rest_api.entity.Profile;
import com.example.rest_api.service.ProfileService;

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
        return ResponseEntity.ok(Map.of(
            "name", profile.getName(),
            "email", profile.getEmail(),
            "isBusiness", profile.isBusiness()
        ));
    }
}
