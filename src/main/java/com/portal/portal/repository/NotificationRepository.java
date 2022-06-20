package com.portal.portal.repository;

import com.portal.portal.entity.Notification;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends CrudRepository<Notification, Long> {

    Long countAllByCustomer_UsernameAndReadDateNull(String username);

    List<Notification> findAllByCustomer_UsernameOrderByCreatedDateDesc(String username);

    Notification findByNotificationId(Long id);
}
