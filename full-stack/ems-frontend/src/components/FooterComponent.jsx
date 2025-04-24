import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <span className="text-white">
          © {new Date().getFullYear()} Employee Management System. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
