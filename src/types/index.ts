export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  short_summary: string;
  summary: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  endDate: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  url?: string;
  technologies: string[];
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}