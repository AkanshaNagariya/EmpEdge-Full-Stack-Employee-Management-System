package net.employee.ems.service;
import java.util.*;
import net.employee.ems.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);
    List <EmployeeDto> getAllEmployees();
    EmployeeDto updatedEmployee(Long employeeId , EmployeeDto updatedEmployee);
    void deleteEmployee(Long employeeId);
}

