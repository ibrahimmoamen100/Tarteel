import { authOptions } from "@/lib/nextAuth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AvatarDropdown from "./AvatarDropdown";

async function GetSession() {
  const session = await getServerSession(authOptions);

  const avatarSrc = session?.user?.image as string; // Replace with your avatar image URL
  const name = session?.user?.name as string; // Replace with your name
  const links = [
    { href: "/profile", label: "Profile" },
    { href: "/settings", label: "Settings" },
  ];
  return (
    <div>
      {session ? (
        <div className="sm:flex flex-col items-center justify-between gap-2">
          <AvatarDropdown avatarSrc={avatarSrc} name={name} links={links} />
        </div>
      ) : (
        <div className="sm:flex flex-row items-center justify-between gap-2  hidden ">
          <Link
            className="bg-transparent border-2 border-darkMain p-2 rounded-md"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="bg-darkMain text-lightMain p-2 flex justify-center items-center rounded-md bg-gradient-to-r from-primaryMain to-darkMain"
            href={"/register"}
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default GetSession;
