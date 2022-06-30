import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { InputBox, LoginBtn } from "./InputBox";
import "./loginSignup.css";

const LOGIN_MUTATION = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loginUser, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      email,
      password,
    },
  });
  if (data != null && data !== undefined) {
    localStorage.setItem("token", data?.login?.token);
  }
  if (loading === true) {
    return <div>Loading...</div>;
  }
  if (error !== undefined) {
    console.log(error);
    return <div>Something went wrong</div>;
  }
  console.log(data);

  const btnProps = {
    value: "Login",
  };

  interface LoginProps {
    name: string;
    placeholder: string;
    type: string;
  }

  const inputProps: LoginProps[] = [
    {
      name: "email",
      placeholder: "Username",
      type: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
    },
  ];
  return (
    <div className="mainLScontainer">
      {inputProps.map((inputProp) => (
        <InputBox
          key={inputProp.name}
          name={inputProp.name}
          type={inputProp.type}
          placeholder={inputProp.placeholder}
          onChange={(e: any) => {
            if (inputProp.name === "email") {
              setEmail(e.target.value);
            }
            if (inputProp.name === "password") {
              setPassword(e.target.value);
            }
          }}
        />
      ))}

      <LoginBtn onClick={loginUser} value={btnProps.value} />
    </div>
  );
}

export default Login;
