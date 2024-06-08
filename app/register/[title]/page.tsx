import React from "react";

export const metadata = {
  title: "Register",
  root: "Register",
};
function Register(props: any) {
  return (
    <div>
      {" "}
      this register <br />
      {props.params.title}
    </div>
  );
}

export default Register;
