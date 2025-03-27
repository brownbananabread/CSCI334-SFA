package com.example.rest_api.Profile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class ProfileService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Profile getProfile() {
        
        // String sql = "SELECT name, email, is_business FROM users WHERE id = ?";
        // return jdbcTemplate.queryForObject(sql, new Object[]{1}, (rs, rowNum) -> 
        //     new Profile(
        //         rs.getString("name"),
        //         rs.getString("email"),
        //         rs.getBoolean("is_active")
        //     )
        // );
       

        Profile profile = new Profile("John Doe", "johndoe@gmail.com", false);
        return profile;
    }
}
