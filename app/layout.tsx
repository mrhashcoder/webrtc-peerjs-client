import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/components/styled-elements/theme-provider";
import { settings } from "@/config/settings";
import { siteConfig } from "@/config/site";
import DebugWindow from "@/components/layout/debug-window";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL(siteConfig.url.base),
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.url.author,
        },
    ],
    creator: siteConfig.author,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url.base,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@_rdev7",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex max-h-screen flex-col bg-background text-primary`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
                    <div className="flex flex-row">
                        <div className="basis-4/5">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                        <div className="basis-1/5 m-2 p-4 border-4 border-primary ">
                            <DebugWindow />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
