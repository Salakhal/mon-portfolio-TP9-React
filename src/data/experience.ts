export interface TeachingExperience {
  id: number;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  type: "teaching";
  highlights: string[];
}

export interface CompanyExperience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: "company";
  missions: string[];
}

// Expériences d'enseignement
export const teachingExperiences: TeachingExperience[] = [
  {
    id: 1,
    title: "Stage en enseignement d'informatique",
    institution: "Lycée Ibn Toumert",
    location: "Marrakech",
    period: "2023 – 2024 (10 mois)",
    description: "Encadrement des élèves, préparation des cours, participation aux activités pédagogiques et évaluation des acquis.",
    type: "teaching",
    highlights: [
      "Encadrement et suivi des élèves",
      "Préparation des cours et supports pédagogiques",
      "Participation aux activités pédagogiques",
      "Évaluation des acquis des élèves"
    ]
  },
  {
    id: 2,
    title: "Stage en enseignement d'informatique",
    institution: "Lycée/Collège Takadoum",
    location: "Marrakech",
    period: "2024 – 2025 (10 mois)",
    description: "Animation de séances pratiques, suivi des élèves et utilisation des outils numériques en classe.",
    type: "teaching",
    highlights: [
      "Animation de séances pratiques",
      "Suivi personnalisé des élèves",
      "Utilisation des outils numériques pédagogiques",
      "Évaluation continue"
    ]
  },
  {
    id: 3,
    title: "Stage en enseignement d'informatique",
    institution: "Collège Tarik Bne Ziaden",
    location: "Marrakech",
    period: "2025 – 2026 (10 mois)",
    description: "Mise en œuvre de méthodes pédagogiques modernes et gestion de classe.",
    type: "teaching",
    highlights: [
      "Mise en œuvre de méthodes pédagogiques modernes",
      "Gestion de classe et discipline",
      "Création d'exercices pratiques",
      "Suivi des progrès des élèves"
    ]
  }
];

// Expériences en entreprise
export const companyExperiences: CompanyExperience[] = [
  {
    id: 1,
    title: "Stage au sein de Groupe Al Omrane",
    company: "Groupe Al Omrane",
    location: "Safi",
    period: "2023 – 2024 (1 mois)",
    description: "Découverte du milieu professionnel et participation à des tâches administratives et techniques.",
    type: "company",
    missions: [
      "Découverte du milieu professionnel",
      "Participation aux tâches administratives",
      "Assistance technique",
      "Travail en équipe"
    ]
  },
  {
    id: 2,
    title: "Stage au sein de OCP Group",
    company: "OCP Group",
    location: "Safi",
    period: "2024 – 2025 (1 mois)",
    description: "Observation des systèmes informatiques en entreprise et initiation aux environnements professionnels.",
    type: "company",
    missions: [
      "Observation des systèmes informatiques",
      "Initiation aux environnements professionnels",
      "Découverte des process industriels",
      "Analyse des besoins informatiques"
    ]
  }
];