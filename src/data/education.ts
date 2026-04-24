// Types
export interface Education {
  id: number;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  type: string;
  courses: string[];
}

export interface ComplementaryTraining {
  id: number;
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
}

// Données des formations académiques
export const education: Education[] = [
  {
    id: 1,
    title: "Cycle de Licence d'Enseignement – Informatique",
    institution: "ENS École Normale Supérieure de Marrakech",
    location: "Marrakech",
    period: "2025 – 2026",
    description: "Formation spécialisée en enseignement de l'informatique et approfondissement des compétences pédagogiques et techniques.",
    type: "Licence",
    courses: ["Pédagogie", "Didactique", "Approfondissement technique", "Préparation à l'enseignement"]
  },
  {
    id: 2,
    title: "DEUG en Informatique",
    institution: "ENS École Normale Supérieure de Marrakech",
    location: "Marrakech",
    period: "2023 – 2025",
    description: "Acquisition des bases solides en programmation, structures de données et systèmes informatiques.",
    type: "DEUG",
    courses: ["Programmation", "Structures de données", "Systèmes informatiques", "Algorithmique", "Mathématiques"]
  },
  {
    id: 3,
    title: "Formation en Informatique (1ère année)",
    institution: " Ecole Supérieure de Technologie Safi",
    location: "Safi",
    period: "2022 – 2023",
    description: "Introduction aux fondamentaux de l'informatique et du développement.",
    type: "Formation",
    courses: ["Introduction à l'informatique", "Bases de programmation", "Algorithmique", "Systèmes d'exploitation"]
  }
];

// Données des formations complémentaires
export const complementaryTrainings: ComplementaryTraining[] = [
  {
    id: 1,
    title: "Formation Full Stack Developer",
    institution: "Wykee Solution",
    location: "Safi",
    period: "2022 – 2023 (6 mois)",
    description: "Développement d'applications web complètes (Front-end & Back-end), bases de données et projets pratiques.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "HTML/CSS", "JavaScript"]
  }
];