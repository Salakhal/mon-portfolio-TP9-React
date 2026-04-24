import { GraduationCap, Calendar, MapPin, BookOpen, Code, Award, Laptop } from 'lucide-react'
import { education, complementaryTrainings, type Education, type ComplementaryTraining } from '../data/education'

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4">
          <GraduationCap className="w-5 h-5" />
          <span className="text-sm font-medium">Parcours Académique</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-950 mb-4">
          Éducation & <span className="text-blue-600">Formations</span>
        </h1>
        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
          Découvrez mon parcours académique et mes formations complémentaires en informatique
        </p>
      </div>

      {/* Timeline Education */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-50 rounded-lg">
            <GraduationCap className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-950">Parcours académique</h2>
        </div>

        <div className="relative border-l-2 border-zinc-200 ml-4">
          {education.map((edu: Education) => (
            <div key={edu.id} className="mb-12 ml-6 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[33px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
              
              {/* Card */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-xl">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950">{edu.title}</h3>
                      <p className="text-blue-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full text-sm font-medium">
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>{edu.type}</span>
                  </div>
                </div>

                <p className="text-zinc-600 mb-4">{edu.description}</p>

                {edu.courses && edu.courses.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course: string) => (
                      <span key={course} className="text-xs px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md">
                        {course}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complementary Trainings */}
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Code className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-950">Formations complémentaires</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {complementaryTrainings.map((training: ComplementaryTraining) => (
            <div key={training.id} className="bg-white rounded-2xl border border-zinc-200 p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
                  <Laptop className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-950 mb-1">{training.title}</h3>
                  <p className="text-blue-600 font-medium">{training.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-zinc-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{training.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{training.location}</span>
                </div>
              </div>

              <p className="text-zinc-600 mb-4">{training.description}</p>

              <div>
                <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                  Technologies maîtrisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {training.technologies.map((tech: string) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Overview */}
      <div className="mt-16 bg-white rounded-2xl border border-zinc-200 p-8">
        <h3 className="text-xl font-bold text-zinc-950 mb-6 text-center">Compétences développées</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-zinc-600 text-sm">Années d'études supérieures</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
            <div className="text-zinc-600 text-sm">Diplômes & Formations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-zinc-600 text-sm">Modules complétés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">6</div>
            <div className="text-zinc-600 text-sm">Technologies full-stack</div>
          </div>
        </div>
      </div>
    </div>
  )
}