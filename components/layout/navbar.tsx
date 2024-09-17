"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/styled-elements/mode-toggle";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/links";
import { settings } from "@/config/settings";
import { useTheme } from "next-themes";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getuid } from "process";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    let { theme } = useTheme();
    if (theme == null) {
        theme = "light";
    }
    console.log(theme);

    const handleClick = async () => {
        setNavbar(false);
    };

    useEffect(() => {
        if (navbar) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [navbar]);

    const darkLogo = <img src="/logo-light.svg" width={100} className="xl:w-[70px] w-[45px]" />;

    const lightLogo = <img src="/logo-dark.svg" width={100} className="xl:w-[70px] w-[45px]" />;

    return (
        <header className="select-none lg:max-w-full shadow-xl">
            <nav className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:px-16 lg:max-w-full">
                <div>
                    <div className="flex items-center justify-between py-3 md:block md:py-5">
                        <Link
                            href="/"
                            onClick={handleClick}
                            className="flex items-center duration-200 lg:hover:scale-[1.10]"
                        >
                            <h1 className="text-2xl font-bold xl:text-4xl">Ballie Web</h1>
                        </Link>
                        <div className="flex gap-1 md:hidden">
                            <button
                                className="rounded-md p-2 text-primary outline-none focus:border focus:border-primary"
                                aria-label="Hamburger Menu"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 "
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`absolute left-0 right-0 z-10 m-auto justify-self-center rounded-md border bg-background p-4 md:static md:mt-0 md:block md:border-none md:p-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                        style={{ width: "100%", maxWidth: "40rem" }}
                    >
                        <ul className="flex flex-col items-center space-y-4 text-primary md:flex-row md:space-x-6 md:space-y-0">
                            <li className="hidden md:block">
                                <ModeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
