"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { HomeIcon, Code2Icon, AlbumIcon, BadgeInfoIcon, PhoneIcon } from "lucide-react";

export function Navbar() {
   const navItems = [
      {
         name: "Home",
         link: "/",
         icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
         name: "Skills",
         link: "/Skills",
         icon: <Code2Icon className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
         name: "Experience",
         link: "/contact",
         icon: <AlbumIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      },
      {
         name: "About",
         link: "/contact",
         icon: <BadgeInfoIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      },
      {
         name: "Contact",
         link: "/contact",
         icon: <PhoneIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      },
   ];
   return (
      <FloatingNav navItems={navItems} />
   );
}