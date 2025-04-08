import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, updateEmployee, getEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const [errors, setErrors] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then(response => {
                setFormData({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    email: response.data.email
                });
            }).catch(error => console.error(error));
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const action = id ? updateEmployee(id, formData) : createEmployee(formData);
            action.then(() => navigate('/employees'))
                 .catch(error => console.error(error));
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white">
                            <h3 className="mb-0">
                                {id ? 'Edit Employee' : 'Add New Employee'}
                            </h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                    {errors.firstName && (
                                        <div className="invalid-feedback">{errors.firstName}</div>
                                    )}
                                </div>
                                
                                <div className="mb-3">
                                    <label htmlFor="lastName" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                    />
                                    {errors.lastName && (
                                        <div className="invalid-feedback">{errors.lastName}</div>
                                    )}
                                </div>
                                
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">{errors.email}</div>
                                    )}
                                </div>
                                
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">
                                        {id ? 'Update Employee' : 'Save Employee'}
                                    </button>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-secondary"
                                        onClick={() => navigate('/employees')}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;