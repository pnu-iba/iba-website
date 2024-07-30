package com.iba.springbootdeveloper.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class UpdateArticleRequest {
    @NotBlank(message = "제목은 필수 항목입니다.")
    private String title;

    @NotBlank(message = "내용은 필수 항목입니다.")
    @Size(max = 1000, message = "내용은 최대 1000자까지 가능합니다.")
    private String content;

    @NotBlank(message = "카테고리는 필수 항목입니다.")
    private String category;
}
