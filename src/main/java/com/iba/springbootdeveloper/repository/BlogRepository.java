package com.iba.springbootdeveloper.repository;

import com.iba.springbootdeveloper.domain.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Article, Long> {
    Page<Article> findAll(Pageable pageable);
    Page<Article> findAll(Specification<Article> spec, Pageable pageable);
}