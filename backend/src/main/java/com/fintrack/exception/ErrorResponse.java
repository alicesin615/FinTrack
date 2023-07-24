package com.fintrack.exception;

import java.time.LocalDateTime;
import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    private Number status;
    private HttpStatus error;
    private String message;
    private LocalDateTime timestamp;
}
