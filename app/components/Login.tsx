"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { signIn as nextAuthSignIn } from "next-auth/react";
import googleIcon from "@/public/images/google-icon.png";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginInPrograss, setLoginInPrograss] = React.useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoginInPrograss(true);
    // nextAuthSignIn("credentials", { email, password });
    // setLoginInPrograss(false);
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl mt-16 p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-center text-darkMain dark:text-neutral-200">
        Tarteel Academy Login
      </h2>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
        <p className="text-center py-4 text-sm text-darkMain">
          Sign in with our provider Google
        </p>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => nextAuthSignIn("google")}
            className=" relative group/btn flex space-x-2  items-center justify-center  px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <Image src={googleIcon} alt="google" width={24} height={24} />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm justify-self-start">
              Google
            </span>

            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
