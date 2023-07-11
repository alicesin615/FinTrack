package com.fintrack.controller;

import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fintrack.model.User;
import com.fintrack.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("api/v1/users")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    public Optional<User> fetchUser(@PathVariable String userId) {
        System.out.println("hello am i here");
        return userService.getUserById(userId);
    }

}
