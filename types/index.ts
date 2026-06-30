export interface StatItem {
  value: string;
  label: string;
}

export interface LogoConfig {
  highlight: string;
  primary: string;
  tagline: string;
  icon: string;
}

export interface HeroConfig {
  badge: string;
  titleStart: string;
  titleMiddle: string;
  titleHighlight: string;
  description: string;
  image: string;
  stats: StatItem[];
}

export interface CompanyConfig {
  name: string;
  slogan: string;
  phone: string;
  whatsapp: string;
  email: string;
  metadata: {
    title: string;
    description: string;
  };
  logo: LogoConfig;
  hero: HeroConfig;
  services: string[];
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  emergency?: boolean;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
  initials: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
