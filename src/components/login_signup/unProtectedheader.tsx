import React from "react";
import { Link } from "react-router-dom";
import "./loginSignup.css";

function Unprotectedheader() {
  return (
    <div>
      <ul className="headerLinkContainer">
        <li>
          <Link to="/login" style={{ color: "#FFF" }}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ color: "#FFF" }}>
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Unprotectedheader;
