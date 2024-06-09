"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmoothDemo } from "./Typer";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

export function BackgroundBoxesDemo() {
  const words = ["Read", "Write", "Tajweed", "Fiqh", "Ahkaam"];

  return (
    <div className="h-[80vh]  relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="boy-image absolute inset-0 w-full h-full bg-slate-900 z-5 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div>

      <div className="">
        <TypewriterEffectSmoothDemo />
      </div>

      <div className="flex flex-col md:flex-row space-y-4 py-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          href={"login/"}
          className="w-40 h-10 rounded-xl bg-primaryMain border dark:border-white flex justify-center items-center items-center border-transparent text-white text-sm"
        >
          Login
        </Link>
        <Link
          href={"register/"}
          className="w-40 h-10 rounded-xl text-center flex justify-center items-center bg-lightMain text-black border border-black  text-sm"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
