package com.capstone.springboot.controller;

import com.capstone.springboot.model.Booking;
import com.capstone.springboot.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;
 
@RestController
@RequestMapping("/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {
    private final BookingRepository repo;
 
    public BookingController(BookingRepository repo) {
        this.repo = repo;
    }
 
    @PostMapping
    public Booking addBooking(@RequestBody Booking booking) {
return repo.save(booking);
    }
 
    @GetMapping
    public List<Booking> getAllBookings() {
        return repo.findAll();
    }
    @DeleteMapping("/{id}")
    public void cancelBooking(@PathVariable Long id) {
        Booking b = repo.findById(id).orElseThrow();
        b.setCancelled(false);
repo.save(b);
    }
}
