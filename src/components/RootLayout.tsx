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
    <div className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
        <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
          <NavLink to="/" className="text-xl font-bold text-blue-600">
            SL.
          </NavLink>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden md:flex gap-6">
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
        </div>

        {isMenuOpen && (
          <nav className="md:hidden border-t border-zinc-100 bg-white">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-semibold border-b border-zinc-100 ${
                    isActive ? "text-blue-600 bg-blue-50" : "text-zinc-600 hover:bg-zinc-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="px-4 py-8 max-w-7xl mx-auto">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200 py-6 text-center">
        <p className="text-sm text-zinc-500">© 2024 Salma Lakhal - Développeuse Full Stack</p>
      </footer>
    </div>
  );
}