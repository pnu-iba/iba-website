package com.iba.springbootdeveloper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
    @GetMapping("/home")
    @ResponseBody
    public String home() {
        return "여기가 홈 화면입니다.";
    }
}
