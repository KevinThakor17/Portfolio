"use client";

import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import SpotlightCard from "./ui/SpotlightCard";
import { SKILLS_DATA, Skill } from "@/data/portfolio";

type SkillCategory = "all" | "cloud" | "backend" | "frontend" | "tools";

const categoryFilters: { id: SkillCategory; label: string; count: number }[] = [
  { id: "all", label: "All Skills", count: 23 },
  { id: "cloud", label: "Cloud, Data & DevOps", count: 7 },
  { id: "backend", label: "Backend & APIs", count: 7 },
  { id: "frontend", label: "Frontend & UI", count: 9 },
  { id: "tools", label: "Tools, CMS & Automation", count: 6 },
];

const dotColorClasses: Record<string, string> = {
  cyan: "bg-cyan-400 shadow-cyan-400/50",
  emerald: "bg-emerald-400 shadow-emerald-400/50",
  indigo: "bg-indigo-400 shadow-indigo-400/50",
  blue: "bg-blue-400 shadow-blue-400/50",
  amber: "bg-amber-400 shadow-amber-400/50",
  purple: "bg-purple-400 shadow-purple-400/50",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all");

  const filteredSkills = SKILLS_DATA.filter((skill: Skill) =>
    activeCategory === "all" ? true : skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="space-y-8">
      <SectionHeader
        step="03"
        tag="TECHNICAL MASTERY"
        title="Skills & Technology Arsenal"
        subtitle="Verified across production experience & academic foundation"
      />

      <SpotlightCard className="rounded-3xl p-4 sm:p-8 space-y-6 sm:space-y-7">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono font-semibold">
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Previous Rich Layout without company names */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
          {filteredSkills.map((skill: Skill) => {
            const dotClass =
              dotColorClasses[skill.dotColor] || "bg-cyan-400 shadow-cyan-400/50";

            return (
              <div
                key={skill.name}
                className="p-3.5 sm:p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex items-start justify-between gap-3 group"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span
                    className={`w-2 h-2 rounded-full ${dotClass} shadow-sm mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform`}
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5 leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                </div>

                {/* Only Credly Link for GCP */}
                {skill.name === "Google Cloud Platform (GCP)" && (
                  <a
                    href="https://www.credly.com/badges/d32a8a1c-3e1b-4a4c-ba13-af9456c416e5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors flex items-center gap-1 flex-shrink-0 self-start mt-0.5"
                  >
                    <span>Credly</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </SpotlightCard>
    </section>
  );
}
