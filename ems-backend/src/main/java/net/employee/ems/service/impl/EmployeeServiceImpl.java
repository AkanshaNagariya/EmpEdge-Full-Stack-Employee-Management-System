package net.employee.ems.service.impl;
import java.util.List;
import lombok.AllArgsConstructor;
import net.employee.ems.dto.EmployeeDto;
import net.employee.ems.entity.Employee;
import net.employee.ems.mapper.EmployeeMapper;
import net.employee.ems.repository.EmployeeRepository;
import net.employee.ems.service.EmployeeService;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with given id:" + employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
       List <Employee> employees = employeeRepository.findAll();
        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updatedEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        // if employee with this id does not exists
       Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exists with given id:" + employeeId));
       employee.setFirstName(updatedEmployee.getFirstName());
       employee.setLastName(updatedEmployee.getLastName());
       employee.setEmail(updatedEmployee.getEmail());

       Employee updatedemployeeobj = employeeRepository.save(employee);
     return EmployeeMapper.mapToEmployeeDto(updatedemployeeobj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee is not exists with given id:" + employeeId));
        employeeRepository.deleteById(employeeId);
    }
}

