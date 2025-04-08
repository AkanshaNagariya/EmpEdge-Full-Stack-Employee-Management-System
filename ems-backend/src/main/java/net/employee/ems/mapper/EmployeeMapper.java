package net.employee.ems.mapper;
import net.employee.ems.dto.EmployeeDto;
import net.employee.ems.entity.Employee;
public class EmployeeMapper {

    // Convert EmployeeDto to Employee Entity
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
       // Convert Employee Entity to EmployeeDto
    public static Employee mapToEmployee(EmployeeDto employeeDto){

            return new Employee(
                    employeeDto.getId(),
                    employeeDto.getFirstName(),
                    employeeDto.getLastName(),
                    employeeDto.getEmail()
            );
        }
}
