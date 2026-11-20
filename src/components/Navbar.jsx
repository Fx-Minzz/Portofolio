
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang", href: "#about" },
    { name: "Kemampuan", href: "#skills" },
    { name: "Proyek", href: "#projects" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#08090d]/80 backdrop-blur-xl">
      <div className="container-main flex h-20 items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="font-display text-xl font-bold tracking-tight"
        >
          Fx<span className="text-accent">.</span>Minzz
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-accent hover:bg-accent/10 md:block"
        >
          Hubungi Saya ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-accent md:hidden"
        >
          <span className="text-2xl leading-none">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          absolute left-0 top-20 w-full overflow-hidden
          border-b border-white/10 bg-[#08090d]/95
          backdrop-blur-xl transition-all duration-300
          md:hidden
          ${
            isOpen
              ? "visible max-h-80 opacity-100"
              : "invisible max-h-0 opacity-0"
          }
        `}
      >
        <div className="container-main flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent-light"
          >
            Hubungi Saya ↗
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
