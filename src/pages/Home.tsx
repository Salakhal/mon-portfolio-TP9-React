import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const fullName = "Salma Lakhal"; 
  const profileImage = "/salma.jpg";
  
  return (
    <section className="flex flex-col gap-8 md:gap-12 lg:gap-16">
      {/* Image Section - Centrée sur mobile */}
      <div className="order-1 md:order-2 lg:order-2 flex justify-center">
        <div className="relative">
          <div className="w-36 h-36 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <img 
              src={profileImage} 
              alt={`${fullName} - Développeuse Full Stack`}
              className="w-full h-full object-cover rounded-full shadow-lg ring-4 ring-white/50"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Salma+Lakhal&background=2563eb&color=fff";
              }}
            />
          </div>
          {/* Décoration discrète */}
          <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 -z-10 h-20 w-20 md:h-32 md:w-32 rounded-2xl border border-zinc-200 bg-white/50" />
        </div>
      </div>

      {/* Texte Section */}
      <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
        {/* Badge Disponibilité */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full bg-blue-600"></span>
          </span>
          Disponible pour nouveaux projets
        </div>

        {/* Titre */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-zinc-950">
          <span className="block text-blue-600 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            {fullName}
          </span>
          Développeuse Full Stack spécialisée en applications web, mobile et Big Data
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-500 max-w-lg mx-auto md:mx-0">
          Développeuse Full-Stack passionnée par la création d'applications web, mobiles et l'analyse de données massives. Je transforme vos idées en solutions digitales innovantes.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center md:justify-start">
          <Link 
            to="/projects" 
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 active:scale-95"
          >
            Voir mes projets <ArrowRight size={16} />
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-zinc-950 transition-all hover:border-blue-600 hover:text-blue-600 hover:scale-105 active:scale-95"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
