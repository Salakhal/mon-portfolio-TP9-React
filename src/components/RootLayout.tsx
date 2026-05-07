import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Expérience", path: "/experience" },
    { name: "Projets", path: "/projects" },
    { name: "Éducation", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-600">
              SL<span className="text-zinc-900">.</span>
            </span>
          </div>
          
          <nav className="hidden md:flex md:gap-x-6 lg:gap-x-8">
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <NavLink
            to="/contact"
            className="hidden md:block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
          >
            Me contacter
          </NavLink>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-zinc-200 shadow-lg z-50">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 text-base font-semibold transition-colors ${
                      isActive ? "text-blue-600 bg-blue-50" : "text-zinc-600 hover:bg-zinc-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="px-6 pt-4 mt-2 border-t border-zinc-100">
                <NavLink
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
                >
                  Me contacter
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12 lg:py-20">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200 bg-white py-8 md:py-10 text-center px-4">
        <p className="text-xs md:text-sm text-zinc-500">
          © {new Date().getFullYear()} Salma Lakhal. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
