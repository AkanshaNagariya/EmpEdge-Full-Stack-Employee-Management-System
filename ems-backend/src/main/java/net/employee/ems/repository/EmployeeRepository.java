package net.employee.ems.repository;

import net.employee.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    // created Employee Repository interface that extends jpaRepository interface to get
    // crud methods to perform crud operations
}
