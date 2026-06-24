export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  metrics?: { label: string; value: string }[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  achievements?: string[];
  gallery?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  size: 'small' | 'medium' | 'large';
}

export interface SectionHeader {
  title: string;
  subtitle: string;
  description?: string;
}

export interface SiteConfig {
  hero: {
    badge: string;
    headingText1: string;
    headingText2: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
    profile: {
      name: string;
      title: string;
      currentRoleLabel: string;
      currentRole: string;
      techStackLabel: string;
      techStack: string[];
      location: string;
    };
  };
  projects: SectionHeader;
  experience: SectionHeader;
  beyondCoding: SectionHeader;
  contact: SectionHeader;
  about: SectionHeader;
  skills: SectionHeader;
}
