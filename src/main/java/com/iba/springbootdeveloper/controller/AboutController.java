package com.iba.springbootdeveloper.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AboutController {
    @GetMapping("/about")
    @ResponseBody
    public String about() {
        return "동아리 소개";
    }
}
