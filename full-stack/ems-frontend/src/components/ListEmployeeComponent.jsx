import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    listEmployees()
      .then(response => setEmployees(response.data))
      .catch(console.error);
  };

  const addNewEmployee = () => navigate('/add-employee');
  const updateEmployee = (id) => navigate(`/edit-employee/${id}`);
  
  const removeEmployee = (id) => {
    deleteEmployee(id)
      .then(getAllEmployees)
      .catch(console.error);
  };

  const filteredEmployees = employees.filter(employee =>
    `${employee.firstName} ${employee.lastName} ${employee.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container main-content">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Employee List</h2>
        <button className="btn btn-primary" onClick={addNewEmployee}>
          <i className="bi bi-plus-lg me-2"></i>Add Employee
        </button>
      </div>

      <div className="search-container">
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search employees..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div className="card employee-card">
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td className="text-end action-buttons">
                    <button 
                      className="btn btn-warning btn-sm"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      <i className="bi bi-pencil me-1"></i>Update
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      <i className="bi bi-trash me-1"></i>Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
