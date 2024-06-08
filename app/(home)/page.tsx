import React from "react";
import { NavigationMenuBar } from "../components/NavigationMenuBar";
import TopNavigation from "../components/TopNavigation";
import { BackgroundBoxesDemo } from "../components/BackgroundBoxesDemo";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionTwo from "../components/SectionTwo";
import { BentoGridDemo } from "../components/GridCards";

export const metadata = {
  title: "Home",
};
function home() {
  return (
    <div className="">
      <BackgroundBoxesDemo />
      <SectionTwo />
      <div className=" ">
        <BentoGridDemo />
      </div>
    </div>
  );
}

export default home;
