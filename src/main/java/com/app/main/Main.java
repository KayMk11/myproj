package com.app.main;


import java.util.List;

import com.app.dao.EmployeeDao;
import com.app.dao.EmployeeDaoImpl;
import com.app.dto.Employee;
import com.app.service.EmployeeService;
import com.app.service.EmployeeServiceImpl;

public class Main {

	public static void main(String[] args) {
		EmployeeDao employeeDao = new EmployeeDaoImpl();
		EmployeeService employeeService = new EmployeeServiceImpl(employeeDao);
		
		List<Employee> empList = employeeService.getEmployees();
		for(Employee employee : empList) {
			System.out.println(employee);
		}
	}
}