package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coforge.hms.model.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {


	public Doctor findFirstByDoctorPhoneNO(long doctorPhoneNO);
}
