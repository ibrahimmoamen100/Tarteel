import React from "react";
import Link from "next/link";
import { SiWhatsapp, SiFacebook, SiYoutube, SiInstagram } from "react-icons/si";

function TopNavigation() {
  return (
    <div className="bg-darkMain">
      <div className="container max-w-4xl text-lightMain px-4 py-2 flex flex-row justify-between items-center">
        <Link
          className="flex flex-row  items-center hover:text-secondMain transition hover:scale-[1.1]  duration-300 ease-in-out"
          href=""
        >
          <SiWhatsapp />
          <span> +201024911062</span>
        </Link>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link
            href=""
            className="text-2xl hover:text-secondMain transition hover:scale-[1.2]  duration-300 ease-in-out"
          >
            <SiFacebook />
          </Link>
          <Link
            href=""
            className="text-2xl hover:text-secondMain transition hover:scale-[1.2]  duration-300 ease-in-out"
          >
            <SiYoutube />
          </Link>
          <Link
            href=""
            className="text-2xl hover:text-secondMain transition hover:scale-[1.2]  duration-300 ease-in-out"
          >
            <SiInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
