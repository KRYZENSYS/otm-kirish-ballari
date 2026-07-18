export type University = {
  id: string;
  name: string;
  shortName: string;
  city: string;
  region: string;
  type: "university" | "institute" | "academy";
  ownership: "state" | "private";
  website?: string;
  logo?: string;
};

export type Direction = {
  id: string;
  universityId: string;
  code: string; // e.g. "5230100"
  name: string; // e.g. "Informatika va axborot texnologiyalari"
  faculty: string;
  degree: "bachelor" | "master";
  language: "uz" | "ru" | "en" | "uz/ru" | "uz/en";
  duration: number; // years
  studyForm: "full-time" | "part-time" | "evening" | "distance";
  grantQuota2025: number;
  contractQuota2025: number;
  passingScore2025: number;
  contractPrice2025: number; // UZS
  passingScore2024?: number;
  contractPrice2024?: number;
  minScore: number; // minimum passing score
  subjects: string[]; // e.g. ["math", "physics", "english"]
};
