package com.app.service;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;
import java.time.LocalDate;
import java.util.ArrayList;

import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.app.dao.EmployeeDao;
import com.app.dto.Employee;

@RunWith(MockitoJUnitRunner.class)
class Test {
	static EmployeeService employeeService = null;
	static EmployeeDao mockEmployeeDao = null;
	private static Employee e1;
	private static Employee e2;
	
	@BeforeAll
	static void setupBeforeClass() throws Exception {
		mockEmployeeDao = Mockito.mock(EmployeeDao.class);
		employeeService = new EmployeeServiceImpl(mockEmployeeDao);
		
		e1 = new Employee();
		e1.setEmpNo(1);
		e1.setEmpName("kay");
		e1.setHireDate(LocalDate.of(2021, 5, 20));
		e1.setSalary(22000);
		e1.setJob("Analyst");
		e2 = new Employee();
		e2.setEmpNo(2);
		e2.setEmpName("Kartikey");
		e2.setHireDate(LocalDate.of(2021, 5, 20));
		e2.setSalary(25000);
		e2.setJob("Dev");
		List <Employee> list = new ArrayList<>();
		list.add(e1);
		list.add(e2);
		Mockito.when(employeeService.getEmployees()).thenReturn(list);
	}
	
	
	
	@org.junit.jupiter.api.Test
	void getAllEmployeestest() {
		List<Employee> allEmp = employeeService.getEmployees();
		
		assertNotNull(allEmp);
		assertEquals(2,allEmp.size());
	}
}
