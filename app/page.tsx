import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import HeroHeader from "@/components/elements/hero";
import FeatureSection from "@/components/elements/features";
import FAQSection from "@/components/elements/faq";
import LiveStream from "@/components/elements/livestream";

export default function Home() {
    return (
        <main className="flex flex-col max-h-screen items-center justify-between">
            <h1> Main Page</h1>
            <LiveStream />
        </main>
    );
}
