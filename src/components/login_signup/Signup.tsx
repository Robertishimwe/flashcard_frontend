import React, { useState } from "react";
import { InputBox, LoginBtn } from "./InputBox";
import "./loginSignup.css";

function Login() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sbmt = () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log("Login Successful");
  };

  const btnProps = {
    value: "Register",
  };

  interface LoginProps {
    name: string;
    placeholder: string;
    type: string;
  }

  const inputProps: LoginProps[] = [
    {
      name: "name",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      name: "email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      name: "password",
      placeholder: "Enter your password",
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
            if (inputProp.name === "name") {
              setName(e.target.value);
            }
          }}
        />
      ))}

      <LoginBtn onClick={sbmt} value={btnProps.value} />
    </div>
  );
}

export default Login;
