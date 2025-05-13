package com.capstone.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.capstone.springboot.model.PaymentDetails;
import com.capstone.springboot.repository.PaymentDetailsRepository;

@Service
public class PaymentDetailsService {

    @Autowired
    private PaymentDetailsRepository paymentDetailsRepository;

    public PaymentDetails savePaymentDetails(PaymentDetails paymentDetails) {
        return paymentDetailsRepository.save(paymentDetails);
    }

    public List<PaymentDetails> getAllPaymentDetails() {
        return paymentDetailsRepository.findAll();
    }

    public PaymentDetails getPaymentDetailsById(Long id) {
        return paymentDetailsRepository.findById(id).orElse(null);
    }

    
    // Additional service methods can be defined here
}

