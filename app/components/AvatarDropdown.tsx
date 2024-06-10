"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const AvatarDropdown = ({
  avatarSrc,
  name,
  links,
}: {
  avatarSrc: string;
  name: string;
  links: { href: string; label: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Menu as="div" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <Menu.Button as="button" className="focus:outline-none">
        <div className="flex  items-center space-x-2 rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <Image
            src={avatarSrc}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </Menu.Button>

      <Menu.Items
        as="ul"
        className="absolute mt-2 shadow-lg bg-white rounded-md w-48 z-50"
      >
        <Menu.Item>
          <span className="text-sm relative block font-medium text-center p-2 bg-darkMain text-white w-100">
            {name}
          </span>
        </Menu.Item>

        {links.map((link) => (
          <Menu.Item key={link.href}>
            <Link
              href={link.href}
              className="text-sm px-4 py-2 block hover:bg-gray-100"
            >
              {link.label}
            </Link>
          </Menu.Item>
        ))}
        <Menu.Item>
          <Link
            href={"/"}
            className="text-sm w-100 px-4 py-2 block hover:bg-gray-100 "
            onClick={() => signOut()}
          >
            Sign Out
          </Link>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default AvatarDropdown;
