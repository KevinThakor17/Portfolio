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

      <SpotlightCard className="rounded-3xl p-6 sm:p-8 space-y-7">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 text-xs font-mono font-semibold">
          {categoryFilters.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                  : "bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
            >
              {cat.label} ({cat.count})
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 text-xs">
          {filteredSkills.map((skill: Skill) => (
            <div
              key={skill.name}
              className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-3">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${skill.color} shadow-sm mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform`}
                />
                <div>
                  <p className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                    {skill.detail}
                  </p>
                </div>
              </div>

              {/* Source Tag or Credly Link */}
              {skill.name === "Google Cloud Platform (GCP)" ? (
                <a
                  href="https://www.credly.com/badges/d32a8a1c-3e1b-4a4c-ba13-af9456c416e5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors whitespace-nowrap self-start flex items-center gap-1"
                >
                  <span>Credly</span>
                  <span>↗</span>
                </a>
              ) : (
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/90 text-slate-400 border border-slate-700/60 whitespace-nowrap self-start">
                  {skill.source}
                </span>
              )}
            </div>
          ))}
        </div>
      </SpotlightCard>
    </section>
  );
}
