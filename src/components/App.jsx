import React from "react";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}

export default App;
