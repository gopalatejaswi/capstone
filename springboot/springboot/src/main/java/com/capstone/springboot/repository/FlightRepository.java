package com.capstone.springboot.repository;

import com.capstone.springboot.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
 
public interface FlightRepository extends JpaRepository<Flight, Long> {}
 
