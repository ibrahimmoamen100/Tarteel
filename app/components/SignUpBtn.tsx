"use client";
import Link from "next/link";
import React from "react";

const SignUpBtn = () => {
  return (
    <div>
      <Link
        href={"login/"}
        className="w-40 h-10 rounded-xl text-center flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
      >
        <span className="z-10 hover:text-darkMain">Sign In</span>
      </Link>
    </div>
  );
};

export default SignUpBtn;
