package com.capstone.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.capstone.springboot.model.PaymentDetails;
import com.capstone.springboot.service.PaymentDetailsService;

@RestController
@RequestMapping("/payments")
public class PaymentDetailsController {

    @Autowired
    private PaymentDetailsService paymentDetailsService;

    @PostMapping("/add")
    public PaymentDetails addPaymentDetails(@RequestBody PaymentDetails paymentDetails) {
        System.out.println("Received payment details: " + paymentDetails);
        return paymentDetailsService.savePaymentDetails(paymentDetails);
    }

    @GetMapping("/all")
    public List<PaymentDetails> getAllPaymentDetails() {
        return paymentDetailsService.getAllPaymentDetails();
    }

    @GetMapping("/{id}")
    public PaymentDetails getPaymentDetailsById(@PathVariable Long id) {
        return paymentDetailsService.getPaymentDetailsById(id);
    }
    
    // Additional endpoints can be added here
}

