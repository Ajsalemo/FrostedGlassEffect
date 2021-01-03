package com.server.api.respositories;

import com.server.api.entities.Specifications;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecificationRepository extends JpaRepository<Specifications, Integer> {

}