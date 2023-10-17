package com.externship.appointment.Appointment_storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment save(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return (List<Appointment>) appointmentRepository.findAll();
    }

    public Appointment getAppointmentById(String appId) {
        return appointmentRepository.findById(appId).orElse(null);
    }

    public void deleteAppointmentById(String appId) {
        appointmentRepository.deleteById(appId);
    }

    // You can add more service methods as needed
}
