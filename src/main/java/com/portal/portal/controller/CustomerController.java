package com.portal.portal.controller;

import com.portal.portal.entity.Notification;
import com.portal.portal.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/customer")
public class CustomerController {

    private final NotificationService notificationService;

    @Autowired
    public CustomerController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("{customerId}/notifications")
    public ResponseEntity<List<Notification>> getAllCustomerNotification(@PathVariable("customerId") String customerId) {
        try {
            return new ResponseEntity<>(notificationService.getListOfNotificationsByCustomer(customerId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("{customerId}/notification-count")
    public ResponseEntity<Long> getCustomerNotifications(@PathVariable("customerId") String customerId) {
        try {
            return new ResponseEntity<>(notificationService.getListOfNotificationsCount(customerId), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
