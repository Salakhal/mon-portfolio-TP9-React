import { Search, Database, Code, Coffee, Globe, FileCode, Server, Network, Award } from 'lucide-react'
import { useState } from 'react'

// Vos certifications avec images
const certifications = [
  {
    id: 1,
    title: "Bases de données",
    description: "Maîtrise des concepts fondamentaux des bases de données relationnelles et manipulation des données.",
    issuer: "Certification Professionnelle",
    date: "2024",
    credentialUrl: "#",
    icon: Database,
    image: "/certifications/database.png",
    imageAlt: "Certification Bases de données",
    tags: ["SQL", "Base de données", "Relationnel", "Manipulation données"],
    skills: ["Conception BD", "Requêtes SQL", "Optimisation", "Modélisation"]
  },
  {
    id: 2,
    title: "Fondamentaux de la programmation en Kotlin",
    description: "Acquisition des bases du développement avec le langage Kotlin et programmation orientée objet.",
    issuer: "Certification Kotlin",
    date: "2024",
    credentialUrl: "#",
    icon: Code,
image: "/certifications/kotlin.png",   
 imageAlt: "Certification Kotlin",
    tags: ["Kotlin", "POO", "Développement"],
    skills: ["Syntaxe Kotlin", "POO", "Fonctions", "Classes"]
  },
  {
    id: 3,
    title: "Fondamentaux et concepts avancés de la programmation Java",
    description: "Compréhension approfondie du langage Java, incluant les notions avancées de POO.",
    issuer: "Certification Java",
    date: "2023",
    credentialUrl: "#",
    icon: Coffee,
image: "/certifications/java.png",    imageAlt: "Certification Java",
    tags: ["Java", "POO", "Avancé"],
    skills: ["Java SE", "Collections", "Threads", "Design Patterns"]
  },
  {
    id: 4,
    title: "Ingénierie logicielle web avec PHP 7",
    description: "Développement d'applications web structurées avec gestion sécurisée des données (architecture multicouche et accès aux données sécurisé).",
    issuer: "Certification PHP",
    date: "2023",
    credentialUrl: "#",
    icon: Globe,
    image: "/certifications/PHP7.png",
    imageAlt: "Certification PHP 7",
    tags: ["PHP 7", "Architecture", "Sécurité"],
    skills: ["MVC", "Couches", "Sécurité", "PDO", "Préparation requêtes"]
  },
  {
    id: 5,
    title: "Programmation orientée objet en Python",
    description: "Maîtrise des concepts de la POO en Python et développement d'applications modulaires.",
    issuer: "Certification Python",
    date: "2024",
    credentialUrl: "#",
    icon: FileCode,
    image: "/certifications/pythonpoo.png",
    imageAlt: "Certification Python POO",
    tags: ["Python", "POO", "Modulaire"],
    skills: ["Classes Python", "Héritage", "Polymorphisme", "Modules"]
  },
  {
    id: 6,
    title: "Introduction to Object-Oriented Programming in Python",
    description: "Understanding core OOP principles such as classes, inheritance, and encapsulation in Python.",
    issuer: "International Certification",
    date: "2024",
    credentialUrl: "#",
    icon: FileCode,
    image: "/certifications/python-datacamp.png",
    imageAlt: "Python OOP International Certification",
    tags: ["Python", "OOP", "International"],
    skills: ["Classes", "Inheritance", "Encapsulation", "Polymorphism"]
  },
  {
    id: 7,
    title: "CCNA : Introduction to Networks",
    description: "Connaissances de base en réseaux informatiques (adressage IP, protocoles, architecture réseau).",
    issuer: "Cisco",
    date: "2023",
    credentialUrl: "#",
    icon: Network,
    image: "/certifications/CCNA.png",
    imageAlt: "CCNA Certification",
    tags: ["Réseaux", "CCNA", "Cisco"],
    skills: ["Adressage IP", "Protocoles", "Architecture réseau", "OSI", "TCP/IP"]
  },
  {
    id: 8,
    title: "Programmation orientée objet en C++",
    description: "Application des concepts de la programmation orientée objet avec le langage C++.",
    issuer: "Certification C++",
    date: "2023",
    credentialUrl: "#",
    icon: Server,
    image: "/certifications/C++.png",
    imageAlt: "Certification C++",
    tags: ["C++", "POO", "Performant"],
    skills: ["Classes C++", "Héritage", "Polymorphisme", "Pointeurs", "Mémoire"]
  }
]

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("Tous")

  // Extraire tous les tags uniques
  const allTags = ["Tous", ...new Set(certifications.flatMap(cert => cert.tags))]

  // Filtrer les certifications
  const filteredCertifications = certifications.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesTag = selectedTag === "Tous" || cert.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
          <Award className="w-5 h-5" />
          <span className="text-sm font-medium">Certifications Professionnelles</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-4">
          Mes <span className="text-blue-600">Certifications</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Découvrez mes certifications et compétences validées dans différents domaines technologiques
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 space-y-6">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
          <input
            type="text"
            placeholder="Rechercher une certification..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-zinc-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>

        {/* Tags Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCertifications.map((cert) => {
          const IconComponent = cert.icon
          return (
            <article
              key={cert.id}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-48 bg-zinc-100">
                <img
                  src={cert.image}
                  alt={cert.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Date Badge on Image */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-zinc-700 shadow-sm">
                  {cert.date}
                </div>
                
                {/* Icon overlay on image */}
                <div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                  <IconComponent className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-blue-600 font-medium mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-zinc-600 mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Compétences acquises
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-zinc-100 text-zinc-400 rounded-md">
                        +{cert.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-zinc-100 mt-auto">
                  <a
                    href={cert.credentialUrl}
                    className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-blue-600 transition-colors group/link"
                  >
                    Voir le certificat
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredCertifications.length === 0 && (
        <div className="text-center py-16">
          <div className="text-zinc-400 mb-4">
            <Search className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-700 mb-2">Aucune certification trouvée</h3>
          <p className="text-zinc-500">Essayez de modifier vos critères de recherche</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-zinc-200">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">{certifications.length}</div>
          <div className="text-zinc-600 mt-1">Certifications</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {new Set(certifications.map(c => c.issuer)).size}
          </div>
          <div className="text-zinc-600 mt-1">Organismes</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {certifications.filter(c => c.tags.includes("POO")).length}
          </div>
          <div className="text-zinc-600 mt-1">Certifications POO</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600">
            {new Set(certifications.flatMap(c => c.skills)).size}
          </div>
          <div className="text-zinc-600 mt-1">Compétences acquises</div>
        </div>
      </div>
    </div>
  )
}