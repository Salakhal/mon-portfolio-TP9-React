import { Briefcase, School, Building2, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react'
import { teachingExperiences, companyExperiences, type TeachingExperience, type CompanyExperience } from '../data/experience'

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
          <Briefcase className="w-5 h-5" />
          <span className="text-sm font-medium">Parcours Professionnel</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-4">
          Expérience <span className="text-blue-600">Professionnelle</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Découvrez mon parcours dans l'enseignement et mes expériences en entreprise
        </p>
      </div>

      {/* Teaching Experience Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-50 rounded-lg">
            <School className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-950">Expériences en enseignement</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachingExperiences.map((exp: TeachingExperience) => (
            <div key={exp.id} className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Award className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-950 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm text-zinc-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-zinc-600 text-sm mb-4">{exp.description}</p>

              <div>
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Missions principales
                </h4>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Experience Section */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-950">Expériences en entreprise</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {companyExperiences.map((exp: CompanyExperience) => (
            <div key={exp.id} className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-zinc-950 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3 text-sm text-zinc-500">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-zinc-600 text-sm mb-4">{exp.description}</p>

              <div>
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Missions réalisées
                </h4>
                <ul className="space-y-1">
                  {exp.missions.map((mission, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-zinc-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-16 bg-white rounded-2xl border border-zinc-200 p-8">
        <h3 className="text-xl font-bold text-zinc-950 mb-6 text-center">Synthèse de l'expérience</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{teachingExperiences.length}</div>
            <div className="text-zinc-600 text-sm">Stages en enseignement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{companyExperiences.length}</div>
            <div className="text-zinc-600 text-sm">Stages en entreprise</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-zinc-600 text-sm">Mois d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
            <div className="text-zinc-600 text-sm">Établissements différents</div>
          </div>
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mt-8 bg-blue-50 rounded-2xl p-8">
        <h3 className="text-lg font-bold text-zinc-950 mb-4 text-center">Compétences développées</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Pédagogie", "Gestion de classe", "Animation de groupe", "Évaluation",
            "Outils numériques", "Travail en équipe", "Communication", "Organisation",
            "Systèmes informatiques", "Analyse des besoins", "Assistance technique"
          ].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-white text-zinc-700 rounded-full text-sm font-medium shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}