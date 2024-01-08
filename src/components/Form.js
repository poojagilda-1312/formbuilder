import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import the external CSS file

const Form = () => {
  return (
    <div className="center-container">
      <div className="mb-4">Welcome to Form.com</div>
      <h4 className="mb-4">This is a simple form builder</h4>

      {/* Use Link to navigate to a new page */}
      <Link to="/CreateForm">
        <button className="custom-button">CREATE NEW FORM</button>
      </Link>
    </div>
  );
};

export default Form;
