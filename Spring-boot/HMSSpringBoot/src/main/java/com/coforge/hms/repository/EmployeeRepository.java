package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coforge.hms.model.Employee;

public interface EmployeeRepository  extends JpaRepository<Employee, Long>{

	
	public Employee findFirstEmployeeByEmpMobileNo(long empMobileNo);

}
