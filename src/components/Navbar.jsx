import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "Home", to: "#home" },
  { label: "Projects", to: "#projects" },
  { label: "About", to: "#about" },
  { label: "Skills", to: "#skills" },
  { label: "Contact", to: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goToSection = (section) => {
    setOpen(false);
    document.querySelector(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080b16]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link
          to="/"
          onClick={() => goToSection("#home")}
          className="flex items-center gap-2 text-xl font-extrabold"
        >
          <FaCode className="text-violet-400" />
          <span>RS<span className="text-violet-400">.</span></span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => goToSection(link.to)}
              className="text-sm text-slate-300 transition hover:text-violet-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="space-y-1 border-t border-white/10 bg-[#0b1020] p-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => goToSection(link.to)}
              className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-violet-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}