package server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import server.models.Profile;
import server.service.AuthService;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        if (email == null || password == null) {
            return ResponseEntity.status(400).body(Map.of("message", "Email and password are required"));
        }

        Profile profile = authService.login(email, password);

        if (profile == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email or password"));
        }

        return ResponseEntity.ok(profile.getAll());
    }

    @PostMapping("/validate")
    public ResponseEntity<?> validate(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");

        if (email == null) {
            return ResponseEntity.status(400).body(Map.of("message", "Email is required"));
        }

        Profile profile = authService.validate(email);

        if (profile == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Invalid email"));
        }

        return ResponseEntity.ok(Map.of("message", "Email is valid"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Map<String, String> credentials) {
        String firstName = credentials.get("firstName");
        String lastName = credentials.get("lastName");
        String email = credentials.get("email");
        String password = credentials.get("password");
        String isBusinessAccount = credentials.get("isBusinessAccount");

        if (firstName == null || lastName == null || email == null || password == null || isBusinessAccount == null) {
            return ResponseEntity.status(400).body(Map.of("message", "All fields are required"));
        }

        Profile profile = authService.register(firstName, lastName, email, password, Boolean.parseBoolean(isBusinessAccount));

        if (profile == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Registration failed"));
        }

        return ResponseEntity.ok(profile.getAll());
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        Profile profile = authService.getProfile();

        if (profile == null) {
            return ResponseEntity.status(401).body(Map.of("message", "Profile not found"));
        }

        return ResponseEntity.ok(profile.getAll());
    }
}
