package com.externship.appointment.Doctor_storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    // Create a new doctor
    public Doctor save(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // Get a list of all doctors
    public List<Doctor> getAllDoctors() {
        Iterable<Doctor> doctorsIterable = doctorRepository.findAll();
        return StreamSupport.stream(doctorsIterable.spliterator(), false)
                            .collect(Collectors.toList());
    }

    // Get a doctor by email
    public Doctor getDoctorById(String id) {
        return doctorRepository.findById(id).orElse(null);
    }

    // Update a doctor
    public Doctor updateDoctor(Doctor doctor) {
        return doctorRepository.save(doctor);
    }

    // Delete a doctor by email
    public void deleteDoctorById(String id) {
        doctorRepository.deleteById(id);
    }

    public List<String> getDoctorNames() {
        // Use your DoctorRepository to fetch doctor names
        List<String> doctorNames = doctorRepository.findAllDoctorNames(); // Implement this method in your repository
        return doctorNames;
    }

    public List<String> getDoctorSpecializations() {
        // Use your DoctorRepository to fetch doctor names
        List<String> doctorSpecs = doctorRepository.findAllDoctorSpecializations(); // Implement this method in your repository
        return doctorSpecs;
    }


}
