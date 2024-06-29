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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

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
