package com.capstone.springboot.model;

import jakarta.persistence.*;
 
@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String passengerName;
    private boolean cancelled;
    private Long flightId;
 
    // Getters and Setters
    public Long getId() { return id; }
public void setId(Long id) { this.id = id; }
 
    public Long getFlightId() { return flightId; }
    public void setFlightId(Long flightId) { this.flightId = flightId; }
 
    public String getPassengerName() { return passengerName; }
    public void setPassengerName(String passengerName) { this.passengerName = passengerName; }
 
    public boolean isCancelled() { return cancelled; }
    public void setCancelled(boolean cancelled) { this.cancelled = cancelled; }
}
