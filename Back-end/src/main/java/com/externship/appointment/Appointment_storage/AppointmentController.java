package com.externship.appointment.Appointment_storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    // Create a new appointment
    @PostMapping
    public ResponseEntity<Appointment> createAppointment(@RequestBody Appointment appointment) {
        Appointment savedAppointment = appointmentService.save(appointment);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }

    // Get a list of all appointments
    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        List<Appointment> appointments = appointmentService.getAllAppointments();
        return new ResponseEntity<>(appointments, HttpStatus.OK);
    }

    // Get an appointment by ID
    @GetMapping("/{appId}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable String appId) {
        Appointment appointment = appointmentService.getAppointmentById(appId);
        if (appointment != null) {
            return new ResponseEntity<>(appointment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update an appointment by ID
    @PutMapping("/{appId}")
    public ResponseEntity<Appointment> updateAppointmentById(@PathVariable String appId, @RequestBody Appointment updatedAppointment) {
        Appointment appointment = appointmentService.getAppointmentById(appId);
        if (appointment != null) {
            updatedAppointment.setAppId(appId);
            Appointment savedAppointment = appointmentService.save(updatedAppointment);
            return new ResponseEntity<>(savedAppointment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete an appointment by ID
    @DeleteMapping("/{appId}")
    public ResponseEntity<Void> deleteAppointmentById(@PathVariable String appId) {
        Appointment appointment = appointmentService.getAppointmentById(appId);
        if (appointment != null) {
            appointmentService.deleteAppointmentById(appId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
