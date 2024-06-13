"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { BsList } from "react-icons/bs";
import GetSession from "./GetSession";
import { authOptions } from "@/lib/nextAuth";
import { signOut, useSession } from "next-auth/react";
import SignUpBtn from "./SignUpBtn";

export function MenuNavbar() {
  const { data, status } = useSession();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-darkMain hover:bg-lightMain text-white hover:text-darkMain border-darkMain border-2">
          <BsList className="text-xl  " />
        </Button>
      </SheetTrigger>
      <SheetContent className=" flex flex-col py-12 text-center sm:text-left ">
        {status === "loading" && <p> Loading</p>}
        {status === "unauthenticated" && <SignUpBtn />}
        {status === "authenticated" && data.user?.image && (
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="border-8 border-lightMain rounded-full flex overflow-hidden ">
              <Image
                src={data.user.image}
                width={70}
                height={70}
                alt="profile image"
              />
            </div>

            <span className=" underline  font-bold text-darkMain decoration-darkMain">
              {data.user?.name}
            </span>
            <Link href={"/dashboard"}>Profile</Link>
            <button type="submit" onClick={() => signOut()}>
              Logout
            </button>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <Link
            className="p-2 font-semibold  border-darkMain  border-2 rounded-xl hover:bg-darkMain hover:text-lightMain"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="p-2 font-semibold  border-darkMain  border-2 rounded-xl hover:bg-darkMain hover:text-lightMain"
            href={"/"}
          >
            Getting started
          </Link>
          <Link
            className="p-2 font-semibold  border-darkMain  border-2 rounded-xl hover:bg-darkMain hover:text-lightMain"
            href={"/"}
          >
            Our Programmers
          </Link>
          <Link
            className="p-2 font-semibold  border-darkMain  border-2 rounded-xl hover:bg-darkMain hover:text-lightMain"
            href={"/"}
          >
            Documentation
          </Link>
          <Link
            className="p-3 rounded-xl  flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
            href={"/"}
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
