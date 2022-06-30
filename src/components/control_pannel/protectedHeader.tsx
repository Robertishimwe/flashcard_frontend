import React from "react";
import "../login_signup/loginSignup.css";

const signout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

function ProtectedHover() {
  return (
    <div>
      <ul className="headerLinkContainer">
        <button onClick={signout}> ← signout</button>
      </ul>
    </div>
  );
}

export default ProtectedHover;
