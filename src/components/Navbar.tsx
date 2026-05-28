"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Tjänster & Priser", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1A1410]/96 backdrop-blur-md border-b border-[#B87333]/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col leading-none group"
        >
          <span className="text-[#B87333] font-serif font-bold text-2xl tracking-[0.18em] group-hover:text-[#D4905A] transition-colors">
            DARIO
          </span>
          <span className="text-white/50 text-[9px] tracking-[0.45em] uppercase mt-0.5">
            Frisör Salong
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 hover:text-[#B87333] text-sm tracking-wider transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#B87333] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#boka-tid"
            className="bg-[#B87333] hover:bg-[#9A6025] text-white text-sm font-bold px-6 py-2.5 tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Boka tid
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#1A1410]/98 border-t border-[#B87333]/10`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[#B87333] text-base tracking-wider transition-colors"
              onClick={closeMobile}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#boka-tid"
            className="bg-[#B87333] hover:bg-[#9A6025] text-white text-sm font-bold px-6 py-3.5 tracking-wider text-center transition-colors mt-1"
            onClick={closeMobile}
          >
            Boka tid
          </a>
        </div>
      </div>
    </nav>
  );
}
