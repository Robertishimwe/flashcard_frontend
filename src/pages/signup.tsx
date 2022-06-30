import React from "react";
import SignupComponent from "../components/login_signup/Signup";
import Unprotectedheader from "../components/login_signup/unProtectedheader";

function Signup() {
  return (
    <div>
      <Unprotectedheader />
      <SignupComponent />
    </div>
  );
}

export default Signup;
