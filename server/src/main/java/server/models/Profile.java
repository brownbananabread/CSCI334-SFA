package server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Map;
@Entity
public class Profile {

    @Id
    private String email;
    private String firstname;
    private String lastname;
    private String password;
    private boolean isBusinessAccount;

    public Profile() {}

    public Profile(String email, String firstname, String lastname, String password, boolean isBusinessAccount) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.isBusinessAccount = isBusinessAccount;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstname() {
        return firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public String getPassword() {
        return password;
    }

    public boolean isBusinessAccount() {
        return isBusinessAccount;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setBusinessAccount(boolean isBusinessAccount) {
        this.isBusinessAccount = isBusinessAccount;
    }

    public Map<String, Object> getAll() {
        return Map.of(
            "email", email,
            "firstname", firstname,
            "lastname", lastname,
            "isBusinessAccount", isBusinessAccount
        );
    }
}