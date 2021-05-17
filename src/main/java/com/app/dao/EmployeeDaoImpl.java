package com.app.dao;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.dto.Employee;

public class EmployeeDaoImpl implements EmployeeDao{
	List<Employee> empList = new ArrayList<Employee>();
	@Override
	public Employee findEmployeeById(int empId) {
		
		return null;
	}

	@Override
	public List<Employee> getEmployees() {
		Employee employee  = new Employee();
		employee.setEmpNo(1);
		employee.setEmpName("Kartikey");
		employee.setHireDate(LocalDate.of(2021, 5, 20));
		employee.setSalary(22000);
		employee.setJob("Analyst");
		empList.add(employee);
	
		return empList;
	}

	@Override
	public List<Employee> findEmployeesByDept() {
		
		return null;
	}

	@Override
	public void deleteEmployee(Employee empId) {
		
	}

}
