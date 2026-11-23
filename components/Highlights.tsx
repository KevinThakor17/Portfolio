"use client";

import SectionHeader from "./ui/SectionHeader";
import SpotlightCard from "./ui/SpotlightCard";
import TechBadge from "./ui/TechBadge";
import { CAPABILITIES, PERSONAL_INFO } from "@/data/portfolio";

export default function Highlights() {
  const renderIcon = (type: string) => {
    switch (type) {
      case "cloud":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case "backend":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "pipeline":
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  const getAccentStyles = (color: string) => {
    switch (color) {
      case "indigo":
        return {
          iconBox: "bg-indigo-500/10 border-indigo-500/25 text-indigo-400 shadow-indigo-500/10",
          tagText: "text-indigo-400",
        };
      case "emerald":
        return {
          iconBox: "bg-emerald-500/10 border-emerald-500/25 text-emerald-400 shadow-emerald-500/10",
          tagText: "text-emerald-400",
        };
      case "cyan":
      default:
        return {
          iconBox: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400 shadow-cyan-500/10",
          tagText: "text-cyan-400",
        };
    }
  };

  return (
    <section id="highlights" className="space-y-8">
      <SectionHeader
        step="01"
        tag="CAPABILITIES"
        title="Core Competencies & Superpowers"
        subtitle="Modern Architectures Built for Scale"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap) => {
          const styles = getAccentStyles(cap.accentColor);

          return (
            <SpotlightCard key={cap.title} className="rounded-2xl p-7 space-y-4">
              <div
                className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${styles.iconBox}`}
              >
                {renderIcon(cap.iconType)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                <span className={`text-xs font-mono ${styles.tagText}`}>
                  {cap.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {cap.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cap.tags.map((tag) => (
                  <TechBadge
                    key={tag}
                    label={tag}
                    variant={cap.accentColor}
                  />
                ))}
              </div>

              {cap.iconType === "cloud" && (
                <div className="pt-2 border-t border-slate-800/80">
                  <a
                    href={PERSONAL_INFO.credlyBadgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors group"
                  >
                    <span>Verify Credly Credential</span>
                    <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                  </a>
                </div>
              )}
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
