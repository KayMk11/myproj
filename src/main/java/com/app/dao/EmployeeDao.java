package com.app.dao;
import com.app.dto.*;

import java.util.List;

public interface EmployeeDao {
	public Employee findEmployeeById(int empId);
	public List<Employee> getEmployees();
	public List<Employee> findEmployeesByDept();
	public void deleteEmployee(Employee empId);
}