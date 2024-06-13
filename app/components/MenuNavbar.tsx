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
            className="p-3 rounded-xl  flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
            href={"/"}
          >
            <span className="z-10 hover:text-darkMain">Home</span>
          </Link>
          <Link
            className="p-3 rounded-xl  flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
            href={"/"}
          >
            <span className="z-10 hover:text-darkMain"> Getting started</span>
          </Link>
          <Link
            className="p-3 rounded-xl  flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
            href={"/"}
          >
            <span className="z-10 hover:text-darkMain"> Our Programmers</span>
          </Link>
          <Link
            className="p-3 rounded-xl  flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
            href={"/"}
          >
            <span className="z-10 hover:text-darkMain"> Documentation</span>
          </Link>
          <Link
            className="p-3 rounded-xl  flex justify-center items-center bg-lightMain text-black border border-black  text-sm sign-btn"
            href={"/"}
          >
            <span className="z-10 hover:text-darkMain">Contact Us</span>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
