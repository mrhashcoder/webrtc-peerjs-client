import { SiteConfig, ContactConfig } from "@/types";

/* ====================
[> WEBSITE CONFIG <]
-- Fill the details about your website
 ==================== */

const baseUrl = "https://localhost:3000";

export const siteConfig: SiteConfig = {
  name: "ProjectsHub",
  author: "mrhashcoder",
  description:
    "Easy to setup, customizable, quick, and responsive landing page starter built with Next.js and shadcn/ui.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
    "Landing Page",
    "Template",
    "Starter",
  ],
  url: {
    base: baseUrl,
    author: "https://mrhashcoder.in",
  },
  ogImage: `${baseUrl}/og.jpg`,
};

export const contactConfig: ContactConfig = {
  email: "mrhashcoder@gmail.com",
};
