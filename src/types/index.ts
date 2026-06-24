export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
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
