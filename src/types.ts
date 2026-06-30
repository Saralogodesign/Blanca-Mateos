export interface Experience {
  year: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  bullets?: string[];
  category: "docente" | "liderazgo" | "ambas";
}

export interface Education {
  years: string;
  degree: string;
  institution: string;
  location?: string;
}

export interface InternationalTraining {
  date: string;
  program: string;
  institution: string;
  location: string;
}

export interface VolunteerWork {
  date: string;
  program: string;
  location: string;
  description: string;
}

export interface Language {
  name: string;
  level: string;
  flag: string;
}

export interface ToolCategory {
  category: string;
  items: string[];
}
