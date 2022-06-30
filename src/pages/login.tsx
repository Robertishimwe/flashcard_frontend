import React from "react";
import LoginComponent from "../components/login_signup/Login";
import Unprotectedheader from "../components/login_signup/unProtectedheader";

function LoginPage() {
  return (
    <>
      <Unprotectedheader />
      <LoginComponent />
    </>
  );
}

export default LoginPage;
