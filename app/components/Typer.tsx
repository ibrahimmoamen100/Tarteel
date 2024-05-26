"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FlipWords } from "@/components/ui/flip-words";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Learn ",
    },
    {
      text: "Arabic",
    },
    {
      text: "and Islam",
    },
    {
      text: "with",
    },
    {
      text: "Tarteel.",
      className: "text-secondMain dark:text-blue-500 ",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-auto  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
