package com.externship.appointment.Doctor_storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/doctors")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    // Create a new doctor
    @PostMapping
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        Doctor savedDoctor = doctorService.save(doctor);
        return new ResponseEntity<>(savedDoctor, HttpStatus.CREATED);
    }

    // Get a list of all doctors
    @GetMapping
    public ResponseEntity<List<Doctor>> getAllDoctors() {
        List<Doctor> doctors = doctorService.getAllDoctors();
        return new ResponseEntity<>(doctors, HttpStatus.OK);
    }

    // Get a doctor by email
    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorById(@PathVariable String id) {
        Doctor doctor = doctorService.getDoctorById(id);
        if (doctor != null) {
            return new ResponseEntity<>(doctor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a doctor by email
    @PutMapping("/{id}")
    public ResponseEntity<Doctor> updateDoctorById(@PathVariable String id, @RequestBody Doctor updatedDoctor) {
        Doctor doctor = doctorService.getDoctorById(id);
        if (doctor != null) {
            updatedDoctor.setId(id);
            Doctor savedDoctor = doctorService.save(updatedDoctor);
            return new ResponseEntity<>(savedDoctor, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a doctor by email
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctorById(@PathVariable String id) {
        Doctor doctor = doctorService.getDoctorById(id);
        if (doctor != null) {
            doctorService.getDoctorById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/names")
    public ResponseEntity<List<String>> getDoctorNames() {
        List<String> doctorNames = doctorService.getDoctorNames(); // Implement this method in your DoctorService
        return new ResponseEntity<>(doctorNames, HttpStatus.OK);
    }

    @GetMapping("/specs")
    public ResponseEntity<List<String>> getSpecializations() {
        List<String> doctorSpecs = doctorService.getDoctorSpecializations(); // Implement this method in your DoctorService
        return new ResponseEntity<>(doctorSpecs, HttpStatus.OK);
    }


}
