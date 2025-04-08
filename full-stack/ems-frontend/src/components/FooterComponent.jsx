import React from 'react';

const FooterComponent = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="mb-3">Employee Management System</h5>
                        <p className="text-muted">
                            A comprehensive solution for managing your organization's employee data.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-decoration-none text-muted">Home</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">About</a></li>
                            <li><a href="#" className="text-decoration-none text-muted">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact</h5>
                        <address className="text-muted">
                            <i className="bi bi-envelope me-2"></i> info@example.com<br />
                            <i className="bi bi-telephone me-2"></i> +1 (123) 456-7890
                        </address>
                    </div>
                </div>
                <hr className="my-4 bg-secondary" />
                <div className="text-center text-muted">
                    &copy; {new Date().getFullYear()} Employee Management System. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;