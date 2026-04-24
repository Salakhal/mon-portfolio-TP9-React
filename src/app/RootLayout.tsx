import { Outlet, NavLink } from "react-router-dom";
import { profileData } from "../data/profile";

export default function RootLayout() {
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Expérience", path: "/experience" },
    { name: "Projets", path: "/projects" },
    { name: "Éducation", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-200">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-blue-600">
              SL<span className="text-zinc-900">.</span>
            </span>
          </div>
          
          <nav className="hidden md:flex md:gap-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors ${
                    isActive ? "text-blue-600" : "text-zinc-600 hover:text-zinc-900"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Bouton Contact Rapide */}
            <NavLink
              to="/contact"
              className="hidden rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 md:block"
            >
              Me contacter
            </NavLink>
          </div>
        </div>
      </header>

      {/* CONTENU DE LA PAGE (Change selon le lien cliqué) */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-10 text-center">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {profileData.name}. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}