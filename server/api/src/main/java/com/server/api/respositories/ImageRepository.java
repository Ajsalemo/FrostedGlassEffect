package com.server.api.respositories;

import com.server.api.entities.Images;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Images, Integer> {

}