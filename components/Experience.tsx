import SectionHeader from "./ui/SectionHeader";
import SpotlightCard from "./ui/SpotlightCard";
import TechBadge from "./ui/TechBadge";
import { EXPERIENCE_DATA, EDUCATION_DATA, ExperienceItem } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="space-y-8">
      <SectionHeader
        step="04"
        tag="TRACK RECORD"
        title="Professional Journey & Education"
        subtitle="Continuous Growth & Delivery"
      />

      <SpotlightCard className="rounded-3xl p-4 sm:p-10 space-y-8 sm:space-y-10">
        {/* Career Items */}
        {EXPERIENCE_DATA.map((item: ExperienceItem, idx: number) => {
          const isCurrent = item.isCurrent;
          const borderClass = isCurrent
            ? "border-cyan-500/40"
            : "border-slate-800";
          const dotClass = isCurrent
            ? "bg-cyan-400 ring-4 ring-cyan-500/20 group-hover:scale-125"
            : "bg-slate-600 group-hover:bg-cyan-400";
          const badgeClass = isCurrent
            ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
            : "bg-slate-800 text-slate-300 border-slate-700";

          return (
            <div
              key={item.role + idx}
              className={`relative pl-6 sm:pl-9 border-l-2 ${borderClass} space-y-3 group`}
            >
              <span
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full transition-all ${dotClass}`}
              />

              {/* Responsive Header: Prevents squishing and awkward text wraps */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-xs text-cyan-400 font-mono flex flex-wrap items-center gap-1.5">
                    <span className="font-semibold">{item.company}</span>
                    {item.location && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{item.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border w-fit flex-shrink-0 ${badgeClass}`}
                >
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {item.description}
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} variant="slate" />
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Education Item */}
        <div className="relative pl-6 sm:pl-9 border-l-2 border-slate-800 space-y-2 group">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-0.5">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {EDUCATION_DATA.degree}
              </h3>
              <p className="text-xs text-emerald-400 font-mono font-semibold">
                {EDUCATION_DATA.institution}
              </p>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 w-fit flex-shrink-0">
              {EDUCATION_DATA.period}
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {EDUCATION_DATA.description}
          </p>
        </div>
      </SpotlightCard>
    </section>
  );
}
