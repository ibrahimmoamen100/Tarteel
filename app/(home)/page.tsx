import React from "react";
import { NavigationMenuBar } from "../components/NavigationMenuBar";
import TopNavigation from "../components/TopNavigation";
import { BackgroundBoxesDemo } from "../components/BackgroundBoxesDemo.1";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionTwo from "../components/SectionTwo";
import { BentoGridDemo } from "../components/GridCards";
import { HeroScroll } from "../components/ContainerSrollAnimation";

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
      <HeroScroll />
    </div>
  );
}

export default home;
