import React from "react";
import InputForm from "../Elements/input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
  return (
    <div>
      <InputForm
        title="Fullname"
        type="text"
        name="fullname"
        placeholder="insert your name"
        htmlFor="email"
      />
      <InputForm
        title="Email"
        type="email"
        name="email"
        placeholder="example@gmail.com"
        htmlFor="email"
      />
      <InputForm
        title="Password"
        type="password"
        name="password"
        placeholder="***"
        htmlFor="password"
      />
      <InputForm
        title="Confirm Password"
        type="password"
        name="ConfirmPassword"
        placeholder="***"
        htmlFor="ConfirmPassword"
      />
      <Button className="bg-purple-600 w-full">Register</Button>
    </div>
  );
};

export default FormRegister;
