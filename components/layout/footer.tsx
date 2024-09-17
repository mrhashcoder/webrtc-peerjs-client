"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navLinks } from "@/lib/links";
import { useTheme } from "next-themes";

export default function Footer() {
    let { theme } = useTheme();
    if (theme == null) {
        theme = "light";
    }

    const darkLogo = <img src="/logo-light.svg" width={100} className="xl:w-[70px] w-[45px]" />;

    const lightLogo = <img src="/logo-dark.svg" width={100} className="xl:w-[70px] w-[45px]" />;

    return (
        <footer className="mt-auto">
            <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center duration-200 lg:hover:scale-[1.10]">
                        <h1 className="text-2xl font-bold xl:text-4xl">Ballie Web</h1>
                    </Link>
                </div>
                <hr className="my-6 text-muted-foreground sm:mx-auto lg:my-8" />
                <span className="block text-sm text-muted-foreground sm:text-center">
                    © {new Date().getFullYear()}{" "}
                    <a target="_blank" href="https://redpangilinan.live/" className="hover:underline">
                        mrhashcoder : samsung
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
