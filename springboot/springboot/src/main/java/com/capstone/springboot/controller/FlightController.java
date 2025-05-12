package com.capstone.springboot.controller;

import com.capstone.springboot.model.Flight;
import com.capstone.springboot.repository.FlightRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
 
@RestController
@RequestMapping("/flights")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {

    @Autowired
    private final FlightRepository repo;
 
    public FlightController(FlightRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Flight> getAllFlights() {
        return repo.findAll();
    }

    @GetMapping("/search")
    public List<Flight> searchFlights(@RequestParam String origin, @RequestParam String destination) {
        return repo.findByOriginAndDestination(origin, destination);
    }
 
    @PostMapping
    public Flight addFlight(@RequestBody Flight flight) {
return repo.save(flight);
    }
 
    
    @DeleteMapping("/{id}")
public void disableFlight(@PathVariable Long id) {
    Flight f = repo.findById(id).orElseThrow();
    //f.setAvailable(false); // Soft delete
repo.save(f);
}
    
}
 
