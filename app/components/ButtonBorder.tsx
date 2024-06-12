"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo({ name }: { name: string }) {
  return (
    <div>
      <Button className="bg-secondMain hover:bg-lighterMain dark:bg-slate-900 px-4 py-3 font-semibold text-darkMain dark:text-white border-neutral-200 dark:border-slate-800">
        {name}
      </Button>
    </div>
  );
}
