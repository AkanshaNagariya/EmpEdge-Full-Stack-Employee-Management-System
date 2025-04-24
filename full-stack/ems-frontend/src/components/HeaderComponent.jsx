import React from 'react';

const HeaderComponent = () => {
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <i className="bi bi-people-fill me-2"></i>
          Employee Management System
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
