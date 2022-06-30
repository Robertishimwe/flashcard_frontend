import React from "react";
interface InputBoxInterface {
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
}
export function InputBox(props: InputBoxInterface) {
  const { placeholder, type, onChange } = props;
  return (
    <>
      <br />
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="inputText"
      />
      <br />
    </>
  );
}

interface LoginBtninterface {
  value: string;
  onClick: () => void;
}
export function LoginBtn(props: LoginBtninterface) {
  const { onClick, value } = props;
  return (
    <>
      <br />
      <button onClick={onClick}>{value}</button>
    </>
  );
}
