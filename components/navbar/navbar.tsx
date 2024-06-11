"use client";

import { ModeToggle } from "@/components/dark-mode";
import Image from "next/image";
import logo from "@/assets/logo.png";
import navbarContent from "./navbarContent.json";
import Link from "next/link";

export function Navbar() {
    const websiteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "Set a title";
    const navContent = process.env.NEXT_PUBLIC_NAV_CONTENT || [];

    return (
        <nav className="hidden md:flex justify-between row w-full p-5">
            <div className="flex items-center gap-4">
                <Image src={logo} alt="logo" width={50} height={50} />
                <p>{websiteTitle?.toUpperCase()}</p>
            </div>
            <ul className="flex items-center gap-4">
                {navbarContent.map((item) => (
                    <li key={item.id}>
                        <Link href={item.url}>
                            {item.title.charAt(0).toUpperCase() +
                                item.title.slice(1)}
                        </Link>
                    </li>
                ))}
                <li>
                    <ModeToggle />
                </li>
            </ul>
        </nav>
    );
}
