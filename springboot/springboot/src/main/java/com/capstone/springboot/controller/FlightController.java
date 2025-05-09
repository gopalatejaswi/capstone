package com.capstone.springboot.controller;

import com.capstone.springboot.model.Flight;
import com.capstone.springboot.repository.FlightRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
 
@RestController
@RequestMapping("/flights")
@CrossOrigin(origins = "http://localhost:3000")
public class FlightController {
    private final FlightRepository repo;
 
    public FlightController(FlightRepository repo) {
        this.repo = repo;
    }
 
    @PostMapping
    public Flight addFlight(@RequestBody Flight flight) {
return repo.save(flight);
    }
 
    @GetMapping
    public List<Flight> getAllFlights() {
        return repo.findAll();
    }
    @DeleteMapping("/{id}")
public void disableFlight(@PathVariable Long id) {
    Flight f = repo.findById(id).orElseThrow();
    f.setAvailable(false); // Soft delete
repo.save(f);
}
    
}
 
