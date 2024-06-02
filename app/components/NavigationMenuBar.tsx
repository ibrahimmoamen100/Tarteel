"use client";

import * as React from "react";
import Link from "next/link";
import logo from "@/public/images/tarteel.png";
import { cn } from "@/lib/utils";
import { MenuNavbar } from "./MenuNavbar";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import prayer from "@/public/images/1.jpg";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "For Kids",
    href: "/programmes",
    description:
      "Teaching kids specifically how to read, write, and memorize the Quran",
  },
  {
    title: "For Aduls",
    href: "/programmes",
    description: "Teaching Aduls how to read, write, and memorize the Quran",
  },
  {
    title: "For Women",
    href: "/programmes",
    description: "Female teachers dedicated to teaching women",
  },
  {
    title: " Ijazah course ",
    href: "/programmes",
    description: " The type of Ijazah that we giving to our Students ",
  },
  {
    title: "Tabs",
    href: "/programmes",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: " Quranic Arabic ",
    href: "/programmes",
    description: " Quranic Arabic ",
  },
];

export function NavigationMenuBar() {
  return (
    <div className=" bg-lightMain">
      <div className="container max-w-4xl flex flex-row  sm:flex-col lg:flex-row items-center justify-between px-4 py-2 md:px-8">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={120} height={120} />
        </Link>
        <div className="flex sm:hidden">
          <MenuNavbar />
        </div>
        <NavigationMenu className="hidden sm:flex flex-row items-center justify-between">
          <NavigationMenuList className="flex sm:flex-row flex-col">
            <NavigationMenuItem className="hover:bg-transparent  ">
              <NavigationMenuTrigger className="bg-transparent  ">
                Getting started
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-40">
                <ul className=" grid gap-3 z-40 p-2 lg:p-4 md:w-[300px] lg:w-[400px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3 prayer-image  bg-[#faeec9] relative">
                    <div className="absolute w-[285px]  h-[135px] lg:w-[152px] lg:h-[246px] bg-[#02081763] top-0 right-0 z-0"></div>
                    <NavigationMenuLink asChild>
                      <a
                        className="prayer-image   flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4  font-bold  text-lg text-lightMain z-10 ">
                          Our Programmes In Class
                        </div>
                        <p className="text-sm leading-tight text-wihte text-muted-foreground">
                          Explore Islam: Beliefs, Practices, and History
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Nour Al Bayan">
                    Teaching Nour AL Bayan
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                Our Programmes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[350px] gap-3 p-4 md:w-[400px]  lg:grid-cols-2 lg:w-[500px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`bg-transparent + ${navigationMenuTriggerStyle()}`}
                >
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`bg-transparent + ${navigationMenuTriggerStyle()}`}
                >
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
