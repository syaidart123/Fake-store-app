import React, { forwardRef } from "react";
import Label from "./label";
import Input from "./Input";

const InputForm = forwardRef((props, ref) => {
  const { label, type, name, htmlFor, placeholder } = props;
  return (
    <>
      <div className="mb-4">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} ref={ref} />
      </div>
    </>
  );
});

export default InputForm;
