import { ExternalLink, Calendar, Building, Store, Users, BarChart, Film, Wrench, GraduationCap, Globe, Code2 } from 'lucide-react'

// Vos projets
const projects = [
  {
    id: 1,
    title: "Site web de gestion de restaurant",
    description: "Application web complète permettant la gestion des commandes, des tables, et des clients, avec une interface intuitive et une base de données pour le suivi des opérations.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Restaurant+Management",
    tags: ["Web", "Base de données", "UI/UX", "Gestion"],
    category: "Web Application",
    date: "2024",
    demo: "#",
    repo: "#",
    icon: Store
  },
  {
    id: 2,
    title: "Application de pointage des agents",
    description: "Système de pointage en ligne permettant l'enregistrement des présences et des absences des employés avec génération de rapports automatisés.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Pointage+Agents",
    tags: ["Web", "Reporting", "Gestion RH", "Temps réel"],
    category: "Enterprise",
    date: "2024",
    demo: "#",
    repo: "#",
    icon: Users
  },
  {
    id: 3,
    title: "Site web d'actualités",
    description: "Développement complet d'un site dynamique pour la publication et la gestion des articles, incluant un espace administrateur complet.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=News+Portal",
    tags: ["CMS", "Administration", "Articles", "Publishing"],
    category: "Web Application",
    date: "2023",
    demo: "#",
    repo: "#",
    icon: Globe
  },
  {
    id: 4,
    title: "Gestion d'agence immobilière (Java)",
    description: "Application Java permettant la gestion des biens immobiliers, des clients et des transactions avec interface graphique intuitive.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Real+Estate+Java",
    tags: ["Java", "Swing/JavaFX", "Base de données", "Desktop"],
    category: "Desktop Application",
    date: "2023",
    demo: "#",
    repo: "#",
    icon: Building
  },
  {
    id: 5,
    title: "Big Data : Surveillance des tendances (Reddit)",
    description: "Analyse en temps réel des tendances via la collecte et le traitement de données massives (mots-clés, pics d'activité, analyse temporelle).",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Big+Data+Reddit",
    tags: ["Big Data", "Reddit API", "Data Processing", "Analytics"],
    category: "Big Data",
    date: "2024",
    demo: "#",
    repo: "#",
    icon: BarChart
  },
  {
    id: 6,
    title: "Système de recommandation de films (MongoDB)",
    description: "Conception d'un système intelligent basé sur les préférences des utilisateurs pour recommander des films à l'aide d'une base de données NoSQL MongoDB.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Movie+Recommender",
    tags: ["NoSQL", "MongoDB", "Recommandation", "Machine Learning"],
    category: "Big Data",
    date: "2024",
    demo: "#",
    repo: "#",
    icon: Film
  },
  {
    id: 7,
    title: "Gestion de maintenance des équipements",
    description: "Application complète (Android, React, Node.js) permettant la gestion des interventions de maintenance, le suivi des équipements et la planification.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Maintenance+App",
    tags: ["Android", "React", "Node.js", "Maintenance"],
    category: "Multi-platform",
    date: "2024",
    demo: "#",
    repo: "#",
    icon: Wrench
  },
  {
    id: 8,
    title: "Gestion des étudiants et des notes",
    description: "Système complet permettant la gestion des étudiants, des modules et des notes avec authentification sécurisée et tableau de bord analytique.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=Student+Management",
    tags: ["Web", "Authentication", "Dashboard", "Education"],
    category: "Web Application",
    date: "2023",
    demo: "#",
    repo: "#",
    icon: GraduationCap
  },
  {
    id: 9,
    title: "Plateforme e-commerce",
    description: "Site web de vente en ligne complet avec gestion des produits, panier, commandes et interface utilisateur moderne et responsive.",
    image: "https://placehold.co/600x400/e4e4e7/71717a?text=E-commerce",
    tags: ["E-commerce", "Paiement", "Panier", "UI/UX"],
    category: "Web Application",
    date: "2024",
    demo: "#",
    repo: "#",
    icon: Store
  }
]

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-4">
          Mes <span className="text-blue-600">Projets</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Découvrez une sélection complète de mes réalisations professionnelles et académiques
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const IconComponent = project.icon
          return (
            <article
              key={project.id}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Project Header with Icon and Category */}
              <div className="relative bg-gradient-to-br from-zinc-50 to-zinc-100 p-6">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-zinc-600 border border-zinc-200">
                    {project.category}
                  </span>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-zinc-950 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-zinc-600 mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-400 rounded-md">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-zinc-100 mt-auto">
                  <a
                    href={project.repo}
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-600 transition-colors group/link"
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Code source</span>
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-600 transition-colors group/link"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Démo</span>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{projects.length}</div>
          <div className="text-zinc-600 mt-1">Projets réalisés</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {new Set(projects.map(p => p.category)).size}
          </div>
          <div className="text-zinc-600 mt-1">Domaines différents</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {projects.filter(p => p.category === "Big Data").length}
          </div>
          <div className="text-zinc-600 mt-1">Projets Big Data</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {projects.filter(p => p.category === "Web Application").length}
          </div>
          <div className="text-zinc-600 mt-1">Applications Web</div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="mt-16 bg-white rounded-2xl border border-zinc-200 p-8">
        <h3 className="text-xl font-bold text-zinc-950 mb-6 text-center">
          Technologies & Compétences utilisées
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {["React", "Node.js", "Java", "Android", "MongoDB", "Big Data", "Python", "JavaScript", "TypeScript", "SQL", "NoSQL", "REST API", "UI/UX", "Git"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-zinc-100 text-zinc-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}