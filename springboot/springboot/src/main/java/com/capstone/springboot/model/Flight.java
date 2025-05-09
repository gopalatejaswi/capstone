package com.capstone.springboot.model;


 
import jakarta.persistence.*;
 
@Entity
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String origin;
    private String destination;
    private String departureTime;
    private double price;
    private boolean available;
 
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
 
    public String getOrigin() { return origin; }
    public void setOrigin(String origin) { this.origin = origin; }
 
    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }
 
    public String getDepartureTime() { return departureTime; }
    public void setDepartureTime(String departureTime) { this.departureTime = departureTime; }
 
    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }
 
    public boolean isAvailable() { return available; }
    public void setAvailable(boolean available) { this.available = available; }
}
 
