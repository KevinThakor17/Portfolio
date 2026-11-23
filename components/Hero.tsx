"use client";

import { useEffect, useState } from "react";
import TerminalCard from "./TerminalCard";
import CopyEmailButton from "./ui/CopyEmailButton";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated Counter for Years of Exp
  const [yearsCount, setYearsCount] = useState(0);

  const words = PERSONAL_INFO.typewriterRoles;

  // Typewriter Loop
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 75);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  // Animated Numbers on Mount
  useEffect(() => {
    let yearTimer: NodeJS.Timeout;

    let y = 0;
    yearTimer = setInterval(() => {
      y += 1;
      if (y <= 3) {
        setYearsCount(y);
      } else {
        clearInterval(yearTimer);
      }
    }, 150);

    return () => {
      clearInterval(yearTimer);
    };
  }, []);

  return (
    <section id="about" className="pt-6 sm:pt-14 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-7 text-center md:text-left">
          {/* Cloud Credential Ribbon with Direct Credly Verification Link */}
          <a
            href={PERSONAL_INFO.credlyBadgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full badge-glowing text-xs text-cyan-200 font-semibold tracking-wide hover:border-cyan-400/60 hover:shadow-cyan-500/25 transition-all group"
          >
            <svg
              className="w-4 h-4 text-cyan-400 animate-pulse flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
            </svg>
            <span>{PERSONAL_INFO.certification}</span>
            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
              Verify Credly ↗
            </span>
          </a>

          {/* Heading with Typewriter */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
              Hi, I&apos;m <span className="gradient-heading">{PERSONAL_INFO.name}</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300 min-h-[44px] flex items-center justify-center md:justify-start">
              <span className="text-cyan-400 font-mono font-semibold">
                {displayText}
              </span>
              <span className="typing-cursor" />
            </div>
          </div>

          {/* Bio */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Software Engineer with{" "}
            <strong className="text-white font-semibold">~3 years</strong>{" "}
            architecting decoupled multisite platforms, interactive state
            engines, and production APIs. Gradually evolving towards{" "}
            <span className="text-cyan-300 font-medium">
              Python, FastAPI, BigQuery, and Cloud Data Engineering
            </span>{" "}
            to build scalable, high-impact systems.
          </p>

          {/* Cleaned Stat Cards (Vague 100% removed, Credly badge highlighted) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-lg mx-auto md:mx-0">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {yearsCount}+
              </div>
              <div className="text-[11px] font-medium text-slate-400 tracking-wider uppercase mt-1">
                Years Production Exp
              </div>
            </div>

            <a
              href={PERSONAL_INFO.credlyBadgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/70 border border-cyan-500/30 hover:border-cyan-400/60 text-center md:text-left transition-all group block shadow-sm hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                  GCP ACE
                </span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors">
                  Credly ↗
                </span>
              </div>
              <div className="text-[11px] font-medium text-slate-300 tracking-wider uppercase mt-1 flex items-center justify-center md:justify-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Verified Digital Badge
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3">
            <a
              href="#architecture"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>Explore Architectures</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl spotlight-card text-slate-200 text-sm font-semibold transition-all hover:text-white flex items-center gap-2.5"
            >
              <svg
                className="w-4 h-4 text-[#0a66c2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z" />
              </svg>
              <span>LinkedIn Profile</span>
            </a>

            <CopyEmailButton />
          </div>
        </div>

        {/* Right Column: Holographic Terminal Card */}
        <div className="lg:col-span-4 flex justify-center">
          <TerminalCard />
        </div>
      </div>
    </section>
  );
}
