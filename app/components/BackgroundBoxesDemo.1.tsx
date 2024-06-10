import React from "react";
import { TypewriterEffectSmoothDemo } from "./Typer";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";
import SignUpBtn from "./SignUpBtn";

export function BackgroundBoxesDemo() {
  const words = ["Reading", "Writing", "Tajweed", "Fiqh", "Ahkaam"];

  return (
    <div className="h-[80vh]  relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="boy-image absolute inset-0 w-full h-full bg-slate-900 z-5 [mask-image:radial-gradient(transparent,white)] pointer-events-none"></div>

      <div className="">
        <TypewriterEffectSmoothDemo />
      </div>

      <div className="text-xl text-lightMain font-semibold">
        <span>We Teach</span>
        <FlipWords words={words} /> <br />
      </div>
      <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
        <p className="text-lightMain text-md font-bold ">Join us by Sign In</p>
        <SignUpBtn />
      </div>
    </div>
  );
}
