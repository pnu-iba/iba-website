package com.iba.springbootdeveloper.dto;

import com.iba.springbootdeveloper.domain.Article;
import lombok.Getter;

@Getter
public class ArticleResponse {
    private final String title;
    private final String content;
    private final String category;

    public ArticleResponse(Article article){
        this.title= article.getTitle();
        this.content=article.getContent();
        this.category =article.getCategory();
    }
}
