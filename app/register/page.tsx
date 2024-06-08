import React from "react";
import { RegisterForm } from "../components/SignCom";

export const metadata = {
  title: "Register",
  root: "Register",
};
function register() {
  return (
    <div>
      <div className="p-4">
        <RegisterForm />
      </div>
    </div>
  );
}

export default register;
