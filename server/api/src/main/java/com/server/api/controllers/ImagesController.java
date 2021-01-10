package com.server.api.controllers;

import java.util.List;

import com.server.api.entities.Images;
import com.server.api.respositories.ImageRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImagesController {
    @Autowired
    private ImageRepository imagesRepository;
    
    @GetMapping("/images")
    public List<Images> listAll() {
        return imagesRepository.findAll();
    }
}