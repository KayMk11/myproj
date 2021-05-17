package com.app.service;

import java.util.List;

import com.app.dao.EmployeeDao;
import com.app.dto.Employee;

public class EmployeeServiceImpl implements EmployeeService{
	EmployeeDao empDao;
	public EmployeeServiceImpl(EmployeeDao empDao) {
		this.empDao = empDao;
	}
	
	@Override
	public Employee getEmployeeById(int empId) {
		Employee emp = empDao.findEmployeeById(empId);
		return emp;
	}
	
	@Override
	public List<Employee> getEmployees() {
		List<Employee> empList = empDao.getEmployees();
		return empList;
	}
	
	@Override
	public List<Employee> getEmployeesByDept() {
		  
		return null;
	}
	
	@Override
	public void deleteEmployee(int empId) {
		
		
	}

}