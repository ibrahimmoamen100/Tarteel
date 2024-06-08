import React from "react";
import GetSession from "./GetSession";
import { NavigationMenuBar } from "./NavigationMenuBar";
import AvatarDropdown from "./AvatarDropdown";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextAuth";

async function BaseNavbar() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <NavigationMenuBar>
        <GetSession />
      </NavigationMenuBar>
    </div>
  );
}

export default BaseNavbar;
