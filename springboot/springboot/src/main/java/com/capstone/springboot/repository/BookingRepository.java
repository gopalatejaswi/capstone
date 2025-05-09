package com.capstone.springboot.repository;

import com.capstone.springboot.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
 
public interface BookingRepository extends JpaRepository<Booking, Long> {}
