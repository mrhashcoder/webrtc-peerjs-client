import { LEVEL } from "@/config/enums";

export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  ogImage: string;
};

export type ContactConfig = {
  email: string;
};

export type Settings = {
  themeToggleEnabled: boolean;
};

export type Layout = {
  heroHeader: string;
  featureCards: string;
  headers: {
    featureCards: string;
    features: string;
  };
};

export type Product = {
  id: number;
  title: string;
  titleImage: string;
  descriptionSmall: string;
  level: LEVEL;
  isReportAvailable: boolean;
  tags: string[];
  imageList: string[];
  description : string[];
  price: number;
  currency: string;
  techStack: string[];
};

export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
};
