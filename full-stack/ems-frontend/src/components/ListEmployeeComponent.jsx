import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        listEmployees()
            .then(response => setEmployees(response.data))
            .catch(error => console.error(error));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this employee?')) {
            deleteEmployee(id)
                .then(() => fetchEmployees())
                .catch(error => console.error(error));
        }
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-primary">Employee Directory</h2>
                <button 
                    className="btn btn-success"
                    onClick={() => navigate('/add-employee')}
                >
                    <i className="bi bi-plus-circle me-2"></i>Add New Employee
                </button>
            </div>
            
            <div className="card shadow">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="table-light">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map(employee => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td className="text-end">
                                            <button 
                                                className="btn btn-sm btn-outline-primary me-2"
                                                onClick={() => navigate(`/edit-employee/${employee.id}`)}
                                            >
                                                <i className="bi bi-pencil"></i> Edit
                                            </button>
                                            <button 
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDelete(employee.id)}
                                            >
                                                <i className="bi bi-trash"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;