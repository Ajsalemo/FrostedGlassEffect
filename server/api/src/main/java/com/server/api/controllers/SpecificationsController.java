package com.server.api.controllers;

import java.util.List;

import com.server.api.entities.Specifications;
import com.server.api.respositories.SpecificationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SpecificationsController {
    @Autowired
    private SpecificationRepository specificationRepository;
    
    @GetMapping("/specifications")
    public List<Specifications> listAll() {
        return specificationRepository.findAll();
    }
}