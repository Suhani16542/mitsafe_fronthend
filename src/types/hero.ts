export type ServiceCategory = "infra" | "build" | "growth";

export type IllustrationType =
  | "cloud"
  | "devtools"
  | "software"
  | "web"
  | "mobile"
  | "crm"
  | "ecommerce"
  | "marketing"
  | "uiux"
  | "service10"
  | "game"
  | "pos"
  | "school";

export interface HeroStat {
  label: string;
  value: string;
  delta?: string;
}

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroFeature {
  label: string;
}

export interface HeroService {
  id: string;
  badge: string;
  heading: string;
  highlight: string;
  description: string;
  illustration: IllustrationType;
  image?: string;
  category: ServiceCategory;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  features: HeroFeature[];
  orbitIcons: string[];
  stats: HeroStat[];
}
