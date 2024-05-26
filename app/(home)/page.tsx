import React from "react";
import { NavigationMenuBar } from "../components/NavigationMenuBar";
import TopNavigation from "../components/TopNavigation";
import { BackgroundBoxesDemo } from "../components/SectionOne";
import { TracingBeam } from "@/components/ui/tracing-beam";

function home() {
  return (
    <div className="h-[5000px]">
      <BackgroundBoxesDemo />
    </div>
  );
}

export default home;