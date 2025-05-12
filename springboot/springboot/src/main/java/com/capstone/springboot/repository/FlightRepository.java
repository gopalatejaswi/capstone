package com.capstone.springboot.repository;

import com.capstone.springboot.model.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
 
public interface FlightRepository extends JpaRepository<Flight, Long> {
    @Query("SELECT f FROM Flight f WHERE lower(f.origin) = lower(?1) AND lower(f.destination) = lower(?2)")
    List<Flight> findByOriginAndDestination(String origin, String destination);
}
 
