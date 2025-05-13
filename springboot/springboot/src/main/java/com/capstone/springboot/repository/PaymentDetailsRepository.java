package com.capstone.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.springboot.model.PaymentDetails;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails, Long> {
    // Additional query methods can be defined here if needed
}

