package com.fintrack.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fintrack.auth.AuthenticationRequest;
import com.fintrack.auth.AuthenticationResponse;
import com.fintrack.auth.RegisterRequest;
import com.fintrack.services.AuthenticationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

        private final AuthenticationService authenticationService;

        @PostMapping("/register")
        public ResponseEntity<AuthenticationResponse> register(
                        @Valid @RequestBody RegisterRequest request) {
                return ResponseEntity.ok(authenticationService.register(request));

        }

        @PostMapping("/authenticate")
        public ResponseEntity<AuthenticationResponse> authenticate(
                        @RequestBody AuthenticationRequest request) {
                return ResponseEntity.ok(authenticationService.authenticate(request));

        }

}
