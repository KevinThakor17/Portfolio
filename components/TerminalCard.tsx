"use client";

import SpotlightCard from "./ui/SpotlightCard";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function TerminalCard() {
  return (
    <SpotlightCard
      tilt={true}
      className="rounded-3xl p-7 w-full max-w-sm relative overflow-hidden border-slate-700/60 shadow-2xl transition-transform duration-200"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm shadow-red-500/40" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm shadow-yellow-500/40" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/40" />
        </div>
        <span className="text-cyan-400/90 font-semibold">~/kevin-thakor</span>
      </div>

      {/* Terminal Content */}
      <div className="py-5 font-mono text-xs space-y-2 text-slate-300 leading-relaxed">
        <div className="text-slate-500">// Core Professional Record</div>
        <div>
          <span className="text-indigo-400 font-semibold">const</span>{" "}
          <span className="text-cyan-300">engineer</span> = &#123;
        </div>
        <div className="pl-4">
          name: <span className="text-emerald-300">&quot;{PERSONAL_INFO.name}&quot;</span>,
        </div>
        <div className="pl-4">
          role: <span className="text-emerald-300">&quot;{PERSONAL_INFO.role}&quot;</span>,
        </div>
        <div className="pl-4">
          company: <span className="text-emerald-300">&quot;{PERSONAL_INFO.company}&quot;</span>,
        </div>
        <div className="pl-4">
          certified: <span className="text-cyan-400 font-semibold">&quot;GCP Cloud Engineer&quot;</span>,
        </div>
        <div className="pl-4">
          education: <span className="text-slate-300">&quot;GTU (B.E. 2024)&quot;</span>,
        </div>
        <div className="pl-4">interests: [</div>
        <div className="pl-8 text-amber-300">
          &quot;FastAPI&quot;, &quot;Python&quot;, &quot;BigQuery&quot;, &quot;Decoupled Web&quot;
        </div>
        <div className="pl-4">],</div>
        <div className="pl-4">
          location: <span className="text-slate-300">&quot;{PERSONAL_INFO.location}&quot;</span>
        </div>
        <div>&#125;;</div>
      </div>

      {/* Card Live Status */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          System Live
        </span>
        <span className="text-slate-500">v3.0.26</span>
      </div>
    </SpotlightCard>
  );
}
