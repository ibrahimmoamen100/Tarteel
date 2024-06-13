import React from "react";

import { LoginForm } from "../components/Login";
import { title } from "process";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";
import { log } from "console";

export const metadata = {
  title: "Login",
};

async function Login() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {session ? (
        <div>
          <h1 className="text-md  text-darkMain p-4 bg-lighterMain">
            You already Logged in Go to your Profile
          </h1>
        </div>
      ) : (
        <div>
          <LoginForm />
        </div>
      )}
    </div>
  );
}

export default Login;
