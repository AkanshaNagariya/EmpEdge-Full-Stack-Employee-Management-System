import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, updateEmployee, getEmployee } from '../services/EmployeeService';

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then(({ data }) => {
          setFirstName(data.firstName);
          setLastName(data.lastName);
          setEmail(data.email);
        })
        .catch(console.error);
    }
  }, [id]);

  const validateForm = () => {
    let valid = true;
    const newErrors = { firstName: '', lastName: '', email: '' };

    if (!firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const employee = { firstName, lastName, email };
    const operation = id ? updateEmployee(id, employee) : createEmployee(employee);

    operation
      .then(() => navigate('/employee'))
      .catch(console.error);
  };

  return (
    <div className="container main-content">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card employee-card">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">{id ? 'Edit Employee' : 'Add Employee'}</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.firstName && 'is-invalid'}`}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName && 
                    <div className="invalid-feedback">{errors.firstName}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.lastName && 'is-invalid'}`}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && 
                    <div className="invalid-feedback">{errors.lastName}</div>}
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email && 'is-invalid'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && 
                    <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => navigate('/employee')}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {id ? 'Update' : 'Submit'}
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
