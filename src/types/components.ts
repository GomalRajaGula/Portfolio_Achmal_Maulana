import { ReactNode } from "react";

export interface DefaultProps {
  className?: string;
  children?: ReactNode;
}

export interface SectionProps extends DefaultProps {
  id?: string;
  title?: string;
  subtitle?: string;
}

export interface RevealProps extends DefaultProps {
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  width?: "fit-content" | "100%";
}
