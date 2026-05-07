import { Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, FolderGit2, GraduationCap, Award, Mail } from "lucide-react";
import { profileData } from "../data/profile";

export default function RootLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Accueil", path: "/", icon: Home },
    { name: "Expérience", path: "/experience", icon: Briefcase },
    { name: "Projets", path: "/projects", icon: FolderGit2 },
    { name: "Éducation", path: "/education", icon: GraduationCap },
    { name: "Certifications", path: "/certifications", icon: Award },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-blue-200">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-600">
              SL<span className="text-zinc-900">.</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-x-6 lg:gap-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    isActive ? "text-blue-600" : "text-zinc-600 hover:text-zinc-900"
                  }`
                }
              >
                <link.icon size={16} />
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <NavLink
            to="/contact"
            className="hidden md:block rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95"
          >
            Me contacter
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-zinc-100 transition-colors"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} className="text-zinc-900" /> : <Menu size={24} className="text-zinc-900" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={closeMenu}
        />

        {/* Mobile Menu Dropdown */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-200">
            <span className="text-xl font-black text-blue-600">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-zinc-100 transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex flex-col p-4 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-blue-600"
                  }`
                }
              >
                <link.icon size={20} />
                {link.name}
              </NavLink>
            ))}
            
            {/* Mobile Contact Button */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 mt-4 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              <Mail size={20} />
              Me contacter
            </NavLink>
          </nav>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-200">
            <p className="text-xs text-center text-zinc-500">
              © {new Date().getFullYear()} {profileData?.name || "Salma Lakhal"}
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 md:py-12 lg:py-20">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-200 bg-white py-6 md:py-8 text-center px-4">
        <p className="text-xs md:text-sm text-zinc-500">
          © {new Date().getFullYear()} {profileData?.name || "Salma Lakhal"} - Développeuse Full Stack
        </p>
        <p className="text-xs text-zinc-400 mt-2">
          Conçu avec ❤️ et Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
