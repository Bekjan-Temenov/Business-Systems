export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stats?: string;
  link?: string;
  img?: string
  video?: string
}

export interface PainPoint {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}