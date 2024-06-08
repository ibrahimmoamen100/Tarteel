import React from "react";

import { LoginForm } from "../components/Login";
import { title } from "process";

export const metadata = {
  title: "Login",
};

function Login() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default Login;
