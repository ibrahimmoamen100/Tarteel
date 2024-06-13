import React from "react";
import { NavigationMenuBar } from "../components/NavigationMenuBar";
import TopNavigation from "../components/TopNavigation";
import { BackgroundBoxesDemo } from "../components/BackgroundBoxesDemo.1";
import { TracingBeam } from "@/components/ui/tracing-beam";
import SectionTwo from "../components/SectionTwo";
import { BentoGridDemo } from "../components/GridCards";
import { HeroScroll } from "../components/ContainerSrollAnimation";
import Pricing from "../components/Pricing";
import { CardHoverEffectDemo } from "../components/CardHoverEffeict";
import { TabsDemo } from "../components/Tabs";
import { FollowingPointerDemo } from "../components/FollowingPointerDemo";

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
      <Pricing />
      <div className="bg-lighterMain">
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default home;
