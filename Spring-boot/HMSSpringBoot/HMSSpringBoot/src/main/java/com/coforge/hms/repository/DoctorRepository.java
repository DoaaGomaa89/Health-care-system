package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
 import com.coforge.hms.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}
