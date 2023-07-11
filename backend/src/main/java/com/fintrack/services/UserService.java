package com.fintrack.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fintrack.model.User;
import com.fintrack.repositories.UserRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    public Optional<User> getUserById(String userId) {
        return userRepository.findById(userId);
    }
}
