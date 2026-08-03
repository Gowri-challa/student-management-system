package com.gowri.studentmanagementsystem.controller;

import com.gowri.studentmanagementsystem.dto.AuthenticationResponse;
import com.gowri.studentmanagementsystem.dto.LoginRequest;
import com.gowri.studentmanagementsystem.dto.RegisterRequest;
import com.gowri.studentmanagementsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public AuthenticationResponse register(
            @RequestBody RegisterRequest request) {

        return userService.register(request);
    }

    @PostMapping("/login")
    public AuthenticationResponse login(
            @RequestBody LoginRequest request) {

        return userService.login(request);
    }
}