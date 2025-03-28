package server.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Map;
@Entity
public class Profile {

    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String password;
    private boolean isBusinessAccount;

    public Profile() {}

    public Profile(String email, String firstName, String lastName, String password, boolean isBusinessAccount) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.isBusinessAccount = isBusinessAccount;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
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

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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
            "firstName", firstName,
            "lastName", lastName,
            "isBusinessAccount", isBusinessAccount
        );
    }
}