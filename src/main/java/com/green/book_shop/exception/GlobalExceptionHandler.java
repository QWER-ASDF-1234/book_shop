package com.green.book_shop.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(Exception.class)
  public ResponseEntity<?> allExceptionHandler(Exception e) {
    e.printStackTrace();
    log.error("좀 더 주의하세요!!");
    log.error(e.getMessage());
    return ResponseEntity.badRequest().build();
  }
}
