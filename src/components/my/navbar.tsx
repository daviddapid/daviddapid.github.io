"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { Home, CodeXml, History, BadgeInfo, Phone } from "lucide-react";
export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <CodeXml className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Experience",
            link: "/contact",
            icon: (
                <History className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "About Me",
            link: "/contact",
            icon: (
                <BadgeInfo className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <Phone className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];

    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems} />
        </div>
    );
}
