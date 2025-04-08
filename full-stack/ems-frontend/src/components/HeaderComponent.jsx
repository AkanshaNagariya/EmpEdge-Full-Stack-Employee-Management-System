import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <header className="bg-dark text-white py-3 shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <i className="bi bi-people-fill me-2"></i>
                        <span className="fw-bold">Employee Management System</span>
                    </Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/employees">
                                    <i className="bi bi-list-ul me-1"></i> Employee List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add-employee">
                                    <i className="bi bi-person-plus me-1"></i> Add Employee
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default HeaderComponent;