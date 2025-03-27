package com.example.rest_api.Profile;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Profile {

    @Id
    private String name;
    private String email;

    @JsonProperty("business")
    private boolean isBusiness;

    public Profile() {}

    public Profile(String name, String email, boolean isBusiness) {
        this.name = name;
        this.email = email;
        this.isBusiness = isBusiness;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public boolean isBusiness() {
        return isBusiness;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setBusiness(boolean isBusiness) {
        this.isBusiness = isBusiness;
    }
}