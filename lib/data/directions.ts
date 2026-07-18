import { Direction } from "../types";

// Yo'nalishlar (namuna) — 2025-2026 uchun.
// Ballar 2024-2025 yilgi DTM ma'lumotlari asosida taxminiy ko'rsatilgan.
// Production uchun har yili DTM.uz dan real ma'lumot yuklanadi.
export const directions: Direction[] = [
  // TATU
  { id: "tatu-01", universityId: "tatu", code: "5230100", name: "Informatika va axborot texnologiyalari", faculty: "Kompyuter injiniringi", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 50, passingScore2025: 152.3, contractPrice2025: 14900000, passingScore2024: 148.7, contractPrice2024: 12900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "tatu-02", universityId: "tatu", code: "5230200", name: "Kompyuter injiniringi", faculty: "Kompyuter injiniringi", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 40, passingScore2025: 138.9, contractPrice2025: 14900000, passingScore2024: 132.4, contractPrice2024: 12900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "tatu-03", universityId: "tatu", code: "5230500", name: "Dasturlash injiniringi", faculty: "Dasturlash", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 15, contractQuota2025: 35, passingScore2025: 156.8, contractPrice2025: 16900000, passingScore2024: 151.2, contractPrice2024: 14900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "tatu-04", universityId: "tatu", code: "5230300", name: "Telekommunikatsiya texnologiyalari", faculty: "Telekom", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 30, passingScore2025: 124.5, contractPrice2025: 12900000, passingScore2024: 119.8, contractPrice2024: 11500000, minScore: 56.7, subjects: ["math", "physics", "english"] },

  // O'zMU
  { id: "nau-01", universityId: "nau", code: "5140100", name: "Matematika", faculty: "Mexanika-matematika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 30, contractQuota2025: 40, passingScore2025: 119.2, contractPrice2025: 9900000, passingScore2024: 115.6, contractPrice2024: 8900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "nau-02", universityId: "nau", code: "5140200", name: "Fizika", faculty: "Fizika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 35, passingScore2025: 108.7, contractPrice2025: 8900000, passingScore2024: 102.3, contractPrice2024: 7900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "nau-03", universityId: "nau", code: "5110100", name: "Tarix", faculty: "Tarix", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 30, contractQuota2025: 50, passingScore2025: 96.4, contractPrice2025: 6900000, passingScore2024: 92.1, contractPrice2024: 5900000, minScore: 56.7, subjects: ["history", "literature", "english"] },
  { id: "nau-04", universityId: "nau", code: "5120100", name: "Filologiya", faculty: "Filologiya", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 35, contractQuota2025: 60, passingScore2025: 105.8, contractPrice2025: 7900000, passingScore2024: 99.5, contractPrice2024: 6900000, minScore: 56.7, subjects: ["language", "literature", "english"] },
  { id: "nau-05", universityId: "nau", code: "5230900", name: "Axborot xavfsizligi", faculty: "IT", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 15, contractQuota2025: 25, passingScore2025: 145.7, contractPrice2025: 14900000, passingScore2024: 139.2, contractPrice2024: 12900000, minScore: 56.7, subjects: ["math", "physics", "english"] },

  // TDIU
  { id: "tdsa-01", universityId: "tdsa", code: "5230901", name: "Iqtisodiyot (tarmoqlar va sohalar bo'yicha)", faculty: "Iqtisodiyot", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 50, contractQuota2025: 200, passingScore2025: 132.4, contractPrice2025: 12900000, passingScore2024: 128.9, contractPrice2024: 11500000, minScore: 56.7, subjects: ["math", "history", "english"] },
  { id: "tdsa-02", universityId: "tdsa", code: "5230902", name: "Buxgalteriya hisobi va audit", faculty: "Buxgalteriya", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 75, passingScore2025: 128.6, contractPrice2025: 11900000, passingScore2024: 124.3, contractPrice2024: 10900000, minScore: 56.7, subjects: ["math", "history", "english"] },
  { id: "tdsa-03", universityId: "tdsa", code: "5230903", name: "Menejment", faculty: "Menejment", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 60, passingScore2025: 122.1, contractPrice2025: 11900000, passingScore2024: 117.5, contractPrice2024: 10900000, minScore: 56.7, subjects: ["math", "history", "english"] },

  // TTА
  { id: "tma-01", universityId: "tma", code: "5510100", name: "Davolash ishi", faculty: "Davolash", degree: "bachelor", language: "uz", duration: 6, studyForm: "full-time", grantQuota2025: 80, contractQuota2025: 200, passingScore2025: 168.4, contractPrice2025: 18900000, passingScore2024: 162.7, contractPrice2024: 16900000, minScore: 56.7, subjects: ["biology", "chemistry", "english"] },
  { id: "tma-02", universityId: "tma", code: "5510200", name: "Stomatologiya", faculty: "Stomatologiya", degree: "bachelor", language: "uz", duration: 5, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 80, passingScore2025: 162.8, contractPrice2025: 22900000, passingScore2024: 156.3, contractPrice2024: 20900000, minScore: 56.7, subjects: ["biology", "chemistry", "english"] },
  { id: "tma-03", universityId: "tma", code: "5510300", name: "Pediatriya", faculty: "Pediatriya", degree: "bachelor", language: "uz", duration: 6, studyForm: "full-time", grantQuota2025: 40, contractQuota2025: 120, passingScore2025: 158.2, contractPrice2025: 17900000, passingScore2024: 152.1, contractPrice2024: 15900000, minScore: 56.7, subjects: ["biology", "chemistry", "english"] },

  // TATU English programs
  { id: "tatu-en-01", universityId: "tatu", code: "5230100", name: "Information Technology (English)", faculty: "IT", degree: "bachelor", language: "en", duration: 4, studyForm: "full-time", grantQuota2025: 5, contractQuota2025: 30, passingScore2025: 165.2, contractPrice2025: 24900000, passingScore2024: 159.4, contractPrice2024: 22900000, minScore: 56.7, subjects: ["math", "physics", "english"] },

  // SamDU
  { id: "samdu-01", universityId: "samdu", code: "5140100", name: "Matematika", faculty: "Matematika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 35, passingScore2025: 112.4, contractPrice2025: 8900000, passingScore2024: 108.9, contractPrice2024: 7900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "samdu-02", universityId: "samdu", code: "5120100", name: "Filologiya (ingliz tili)", faculty: "Filologiya", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 40, passingScore2025: 124.7, contractPrice2025: 9900000, passingScore2024: 119.2, contractPrice2024: 8900000, minScore: 56.7, subjects: ["language", "literature", "english"] },

  // BuxDU
  { id: "bukdu-01", universityId: "bukdu", code: "5140100", name: "Matematika", faculty: "Matematika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 30, passingScore2025: 105.3, contractPrice2025: 7900000, passingScore2024: 100.1, contractPrice2024: 6900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "bukdu-02", universityId: "bukdu", code: "5110100", name: "Tarix", faculty: "Tarix", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 40, passingScore2025: 89.2, contractPrice2025: 6900000, passingScore2024: 85.4, contractPrice2024: 5900000, minScore: 56.7, subjects: ["history", "literature", "english"] },

  // AndDU
  { id: "andju-01", universityId: "andju", code: "5140100", name: "Matematika", faculty: "Matematika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 30, passingScore2025: 102.8, contractPrice2025: 7900000, passingScore2024: 98.4, contractPrice2024: 6900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "andju-02", universityId: "andju", code: "5510100", name: "Davolash ishi", faculty: "Davolash", degree: "bachelor", language: "uz", duration: 6, studyForm: "full-time", grantQuota2025: 30, contractQuota2025: 80, passingScore2025: 155.4, contractPrice2025: 16900000, passingScore2024: 149.2, contractPrice2024: 14900000, minScore: 56.7, subjects: ["biology", "chemistry", "english"] },

  // FarDU
  { id: "fardu-01", universityId: "fardu", code: "5140100", name: "Matematika", faculty: "Matematika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 20, contractQuota2025: 30, passingScore2025: 104.7, contractPrice2025: 7900000, passingScore2024: 99.8, contractPrice2024: 6900000, minScore: 56.7, subjects: ["math", "physics", "english"] },
  { id: "fardu-02", universityId: "fardu", code: "5230100", name: "Informatika", faculty: "IT", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 15, contractQuota2025: 25, passingScore2025: 132.5, contractPrice2025: 11900000, passingScore2024: 127.1, contractPrice2024: 10900000, minScore: 56.7, subjects: ["math", "physics", "english"] },

  // Private universities
  { id: "wint-01", universityId: "wint", code: "5230900", name: "Business Informatics (English)", faculty: "Biznes", degree: "bachelor", language: "en", duration: 4, studyForm: "full-time", grantQuota2025: 0, contractQuota2025: 60, passingScore2025: 142.8, contractPrice2025: 49000000, passingScore2024: 138.4, contractPrice2024: 45000000, minScore: 56.7, subjects: ["math", "english"] },
  { id: "inha-01", universityId: "wint1", code: "5230500", name: "Computer Science (English, Korean diploma)", faculty: "IT", degree: "bachelor", language: "en", duration: 4, studyForm: "full-time", grantQuota2025: 0, contractQuota2025: 50, passingScore2025: 158.7, contractPrice2025: 39000000, passingScore2024: 152.3, contractPrice2024: 35000000, minScore: 56.7, subjects: ["math", "english"] },
  { id: "akfa-01", universityId: "akfa", code: "5230100", name: "Informatika", faculty: "IT", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 0, contractQuota2025: 80, passingScore2025: 119.4, contractPrice2025: 24900000, passingScore2024: 114.2, contractPrice2024: 22900000, minScore: 56.7, subjects: ["math", "physics"] },

  // TDPU
  { id: "nspu-01", universityId: "nspu", code: "5110100", name: "Tarix", faculty: "Tarix", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 30, contractQuota2025: 50, passingScore2025: 94.5, contractPrice2025: 6900000, passingScore2024: 90.2, contractPrice2024: 5900000, minScore: 56.7, subjects: ["history", "literature", "english"] },
  { id: "nspu-02", universityId: "nspu", code: "5120100", name: "Filologiya (rus tili)", faculty: "Filologiya", degree: "bachelor", language: "ru", duration: 4, studyForm: "full-time", grantQuota2025: 25, contractQuota2025: 45, passingScore2025: 109.7, contractPrice2025: 7900000, passingScore2024: 104.3, contractPrice2024: 6900000, minScore: 56.7, subjects: ["language", "literature", "english"] },

  // TSTU
  { id: "tstu-01", universityId: "tstu", code: "5310100", name: "Energetika", faculty: "Energetika", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 30, contractQuota2025: 50, passingScore2025: 102.4, contractPrice2025: 9900000, passingScore2024: 97.8, contractPrice2024: 8900000, minScore: 56.7, subjects: ["math", "physics", "english"] },

  // Sport
  { id: "sport-01", universityId: "turizm", code: "5610100", name: "Jismoniy tarbiya", faculty: "Sport", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 50, contractQuota2025: 100, passingScore2025: 78.3, contractPrice2025: 6900000, passingScore2024: 74.1, contractPrice2024: 5900000, minScore: 56.7, subjects: ["physical", "history", "english"] },

  // San'at
  { id: "art-01", universityId: "sanat", code: "5150100", name: "San'at tarixi", faculty: "San'at", degree: "bachelor", language: "uz", duration: 4, studyForm: "full-time", grantQuota2025: 15, contractQuota2025: 30, passingScore2025: 82.4, contractPrice2025: 6900000, passingScore2024: 78.6, contractPrice2024: 5900000, minScore: 56.7, subjects: ["literature", "history", "english"] },
];

export const getDirectionsByUniversity = (universityId: string) =>
  directions.filter((d) => d.universityId === universityId);
export const getDirection = (id: string) => directions.find((d) => d.id === id);
