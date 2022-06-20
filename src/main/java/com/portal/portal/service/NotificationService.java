package com.portal.portal.service;

import com.portal.portal.entity.Notification;
import com.portal.portal.repository.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;


@Service
public class NotificationService {

    NotificationRepository notificationRepository;

    @Autowired
    public NotificationService(NotificationRepository notificationRepository) {
        this.notificationRepository = notificationRepository;
    }

    public List<Notification> getListOfNotificationsByCustomer(String username) {
        return notificationRepository.findAllByCustomer_UsernameOrderByCreatedDateDesc(username);
    }

    public Long getListOfNotificationsCount(String username) {
        return notificationRepository.countAllByCustomer_UsernameAndReadDateNull(username);
    }

    public Boolean updateNotificationReadById(Long notificationId) {
        Notification notification = notificationRepository.findByNotificationId(notificationId);
        if (notification == null) {
            return false;
        }
        notification.setReadDate(new Date());
        notificationRepository.save(notification);
        return true;
    }
}
