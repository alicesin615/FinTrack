package com.fintrack.repositories;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.fintrack.model.User;

public interface UserRepository extends MongoRepository<User, String> {

}
