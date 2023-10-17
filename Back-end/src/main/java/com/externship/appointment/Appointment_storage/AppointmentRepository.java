package com.externship.appointment.Appointment_storage;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends CrudRepository<Appointment, String> {
    // You can add custom query methods here if needed
}
