package com.externship.appointment.Doctor_storage;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends CrudRepository<Doctor, String> {
    // You can add custom query methods here if needed
    @Query("SELECT d.name FROM Doctor d")
    List<String> findAllDoctorNames();
    @Query("SELECT d.specialization FROM Doctor d")
    List<String> findAllDoctorSpecializations();
}
