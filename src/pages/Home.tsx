import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const fullName = "Salma Lakhal"; 
  const profileImage = "/salma.jpg";
  
  return (
    <section className="flex flex-col gap-8 md:gap-12 lg:gap-16">
      {/* Image - Centrée sur mobile */}
      <div className="order-1 md:order-2 lg:order-2 flex justify-center">
        <div className="relative">
          {/* Taille responsive : plus grande sur mobile */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <img 
              src={profileImage} 
              alt={`${fullName} - Développeuse Full Stack`}
              className="w-full h-full object-cover rounded-full shadow-lg hover:shadow-xl transition-shadow"
            />
          </div>
          {/* Décoration - plus discrète sur mobile */}
          <div className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 -z-10 h-24 w-24 md:h-48 md:w-48 rounded-2xl border border-zinc-200 bg-white/50" />
        </div>
      </div>

      {/* Texte */}
      <div className="order-2 md:order-1 flex flex-col items-start space-y-5 md:space-y-6 lg:space-y-8">
        {/* Badge disponibilité */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 md:px-3 text-xs md:text-sm font-medium text-blue-700">
          <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-full w-full rounded-full bg-blue-600"></span>
          </span>
          Disponible
        </div>

        {/* Titre - plus petit sur mobile */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-zinc-950">
          <span className="block text-blue-600 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            {fullName}
          </span>
          Développeuse Full Stack spécialisée en applications web, mobile et Big Data
        </h1>

        {/* Description - texte plus court sur mobile optionnel */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-zinc-500">
          Développeuse Full-Stack spécialisée dans la création d'interfaces haute performance et de systèmes évolutifs. Passionnée par le design épuré et le code robuste.
        </p>

        {/* Boutons - pleine largeur sur mobile */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link 
            to="/projects" 
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 md:px-6 py-2.5 md:py-3 font-semibold text-white transition-all hover:bg-blue-700 active:scale-95"
          >
            Voir mes projets <ArrowRight size={16} className="md:w-[18px]" />
          </Link>
          <Link 
            to="/contact" 
            className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 md:px-6 py-2.5 md:py-3 font-semibold text-zinc-950 transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-95"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
