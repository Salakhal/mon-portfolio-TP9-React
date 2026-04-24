import { ArrowRight, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  // Remplacez ce chemin par le chemin de votre image
  // Pour une image dans le dossier public : "/mon-image.jpg"
  // Pour une image dans src/assets : import monImage from "../assets/mon-image.jpg"
  const profileImage = "/profile.jpg"; // Changez selon votre image
  
  const fullName = "SALMA LAKHAL"; 
  
  return (
    <section className="grid min-h-[70vh] grid-cols-1 items-center gap-16 lg:grid-cols-2">
      {/* Côté Gauche : Texte */}
      <div className="flex flex-col items-start space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
          </span>
          Disponible pour de nouveaux projets
        </div>

        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-zinc-950 md:text-7xl">
          <span className="block text-blue-600">{fullName}</span>
          Développeuse Full Stack spécialisée en applications web, mobile et Big Data
        </h1>

        <p className="max-w-lg text-lg leading-relaxed text-zinc-500">
          Développeuse Full-Stack spécialisée dans la création d'interfaces haute performance et de systèmes évolutifs. Passionnée par le design épuré et le code robuste.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link to="/projects" className="flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-95">
            Voir mes travaux <ArrowRight size={18} />
          </Link>
          <Link to="/contact" className="rounded-2xl border border-zinc-200 bg-white px-8 py-4 font-semibold text-zinc-950 transition-all hover:border-zinc-300 hover:bg-zinc-50 active:scale-95">
            Me contacter
          </Link>
        </div>
      </div>

      {/* Côté Droit : Image Asymétrique avec photo de profil */}
      <div className="relative">
        <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-zinc-200 shadow-2xl transition-transform hover:rotate-1">
          {profileImage ? (
            <img 
              src={profileImage} 
              alt={`${fullName} - Développeuse Full Stack`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-zinc-100 to-zinc-300">
              <Terminal size={80} className="text-zinc-400 opacity-50" />
            </div>
          )}
        </div>
        {/* Décoration asymétrique */}
        <div className="absolute -bottom-6 -left-6 -z-10 h-64 w-64 rounded-3xl border border-zinc-200 bg-white/50" />
        <div className="absolute -right-6 -top-6 -z-10 h-48 w-48 rounded-3xl bg-blue-100/50 blur-2xl" />
      </div>
    </section>
  );
}