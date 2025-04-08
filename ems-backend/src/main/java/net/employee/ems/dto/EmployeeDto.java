package net.employee.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto { // class to transfer data between client and server
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
}
