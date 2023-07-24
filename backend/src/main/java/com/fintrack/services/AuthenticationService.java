package com.fintrack.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fintrack.auth.AuthenticationRequest;
import com.fintrack.auth.AuthenticationResponse;
import com.fintrack.auth.RegisterRequest;
import com.fintrack.exception.DuplicateKeyException;
import com.fintrack.model.User;
import com.fintrack.repositories.UserRepository;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;

        private final PasswordEncoder passwordEncoder;

        private final JwtService jwtService;

        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(@Valid RegisterRequest request) {
                if (userRepository.existsByEmail(request.getEmail())) {
                        throw new DuplicateKeyException("Email already exists.");
                }
                var user = User.builder()
                                .username(request.getUsername())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .build();
                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                var refreshToken = jwtService.generateRefreshToken(user);
                return AuthenticationResponse.builder().accessToken(jwtToken).refreshToken(refreshToken).build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
                authenticationManager.authenticate(
                                new UsernamePasswordAuthenticationToken(
                                                request.getEmail(),
                                                request.getPassword()));
                var user = userRepository.findByEmail(request.getEmail())
                                .orElseThrow();
                var jwtToken = jwtService.generateToken(user);
                var refreshToken = jwtService.generateRefreshToken(user);
                // revokeAllUserTokens(user);
                // saveUserToken(user, jwtToken);
                return AuthenticationResponse.builder()
                                .accessToken(jwtToken)
                                .refreshToken(refreshToken)
                                .build();
        }

        // private void saveUserToken(UserDetails user, String jwtToken) {
        // var token = Token.builder()
        // .user(user)
        // .token(jwtToken)
        // .tokenType(TokenType.BEARER)
        // .expired(false)
        // .revoked(false)
        // .build();
        // tokenRepository.save(token);
        // }

        // private void revokeAllUserTokens(User user) {
        // var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
        // if (validUserTokens.isEmpty())
        // return;
        // validUserTokens.forEach(token -> {
        // token.setExpired(true);
        // token.setRevoked(true);
        // });
        // tokenRepository.saveAll(validUserTokens);
        // }

}
