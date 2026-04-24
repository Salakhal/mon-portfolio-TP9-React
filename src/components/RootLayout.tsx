import { Outlet, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GraduationCap, Home, FolderGit2, Mail } from "lucide-react";

export default function RootLayout() {
  const navItems = [
    { to: "/", label: "Accueil", icon: Home },
    { to: "/projects", label: "Projets", icon: FolderGit2 },
    { to: "/education", label: "Formations", icon: GraduationCap },
    { to: "/contact", label: "Contact", icon: Mail },
  ];

  const navStyles = ({ isActive }: { isActive: boolean }) => 
    `inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-zinc-500'}`;

  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
          <NavLink to="/" className="text-xl font-bold tracking-tighter">STUDIO.JS</NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navStyles}>
                <item.icon size={16} />
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-950 transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-8 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-200 py-12 px-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} — Design Premium Minimalist
      </footer>
    </div>
  );
}