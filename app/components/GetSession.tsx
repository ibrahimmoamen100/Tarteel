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
    { href: "profile", label: "Profile" },
    { href: "dashboard", label: "Dashboard" },
  ];
  return (
    <div>
      {session ? (
        <div className="sm:flex flex-col items-center justify-between gap-2">
          <AvatarDropdown avatarSrc={avatarSrc} name={name} links={links} />
        </div>
      ) : (
        <div className="sm:flex flex-row items-center justify-between gap-2 hidden ">
          <Link
            className="bg-darkMain font-semibold text-lightMain border-2 border-darkMain py-1 px-4 rounded-md hover:bg-transparent hover:text-darkMain duration-100 transtion-bg"
            href={"/login"}
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default GetSession;
