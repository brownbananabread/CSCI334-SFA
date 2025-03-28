package server.service;

import org.springframework.stereotype.Service;

import server.models.Profile;

@Service
public class AuthService {

    public Profile login(String email, String password) {
        if (email.equals("johndoe@gmail.com") && password.equals("password")) {
            return new Profile(email, "John", "Doe", "password", false);
        }
        return null;
    }

    public Profile validate(String email) {
        if (email.equals("johndoe@gmail.com")) {
            return new Profile(email, "John", "Doe", "password", false);
        }
        return null;
    }

    public Profile register(String firstName, String lastName, String email, String password, boolean isBusinessAccount) {
        return new Profile(email, firstName, lastName, password, isBusinessAccount);
    }

    public Profile getProfile() {
        return new Profile("johndoe@gmail.com", "John", "Doe", "password", false);
    }
}
