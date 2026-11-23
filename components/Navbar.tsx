"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";

const navItems = [
  { href: "#about", label: "ABOUT" },
  { href: "#highlights", label: "HIGHLIGHTS" },
  { href: "#architecture", label: "ARCHITECTURE" },
  { href: "#skills", label: "SKILLS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-3 sm:top-5 z-50 transition-all duration-300">
      <nav className="spotlight-card rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3.5 flex items-center justify-between shadow-2xl backdrop-blur-xl border-slate-800">
        {/* Brand / Logo */}
        <a href="#about" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-extrabold text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300 flex-shrink-0 text-sm">
            KT
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-tight text-xs sm:text-sm truncate">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
            </div>
            <span className="block text-[10px] sm:text-[11px] text-cyan-400 font-mono truncate">
              GCP Certified • Software Eng
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wide text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button & Status Pill */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for Hire
          </div>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 transition-all shadow-md shadow-cyan-500/25 transform hover:-translate-y-0.5 flex-shrink-0"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 backdrop-blur-2xl flex flex-col gap-3 text-xs font-semibold text-slate-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-slate-800 rounded-lg hover:text-cyan-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
