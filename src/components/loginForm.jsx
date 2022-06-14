import React from "react";
import Input from "./Input";
import Button from "./Button";

function loginForm() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button btnName="Login" />
    </form>
  );
}

export default loginForm;
