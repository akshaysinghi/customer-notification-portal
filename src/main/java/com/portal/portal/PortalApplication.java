package com.portal.portal;

import com.portal.portal.entity.Customer;
import com.portal.portal.entity.Notification;
import com.portal.portal.repository.CustomerRepository;
import com.portal.portal.repository.NotificationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.text.SimpleDateFormat;

@SpringBootApplication
public class PortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortalApplication.class, args);
    }

    @Bean
    public CommandLineRunner mappingDemo(CustomerRepository customerRepository, NotificationRepository notificationRepository) {
        return args -> {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
            Customer savedCustomerOne = customerRepository.save(new Customer("akshaysinghi"));
            Customer savedCustomerTwo = customerRepository.save(new Customer("msdhoni"));
            notificationRepository.save(new Notification("Notification one", "This is notification one.", sdf.parse("2022-06-15"), sdf.parse("2022-06-18"), savedCustomerOne));
            notificationRepository.save(new Notification("Notification two", "This is notification two.", sdf.parse("2022-04-21"), null, savedCustomerOne));
            notificationRepository.save(new Notification("Notification three", "This is notification three.", sdf.parse("2022-04-22"), null, savedCustomerOne));
            notificationRepository.save(new Notification("Notification four", "This is notification four.", sdf.parse("2022-04-23"), null, savedCustomerOne));
            notificationRepository.save(new Notification("Notification five", "This is notification five.", sdf.parse("2022-04-24"), null, savedCustomerOne));
            notificationRepository.save(new Notification("Notification Ms 1", "This is notification 1", sdf.parse("2022-06-18"), sdf.parse("2022-06-18"), savedCustomerTwo));
            notificationRepository.save(new Notification("Notification Ms 2", "This is notification 2", sdf.parse("2022-06-19"), null, savedCustomerTwo));
            notificationRepository.save(new Notification("Notification Ms 3", "This is notification 3", sdf.parse("2022-06-20"), null, savedCustomerTwo));
        };
    }
}
