package com.fintrack.model;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class User {
    private String id;
    private String username;
    private String email;
    private String password;

    public User(String id, String username, String email, String password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

}
