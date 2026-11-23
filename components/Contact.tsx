import SpotlightCard from "./ui/SpotlightCard";
import CopyEmailButton from "./ui/CopyEmailButton";
import { PERSONAL_INFO } from "@/data/portfolio";

export default function Contact() {
  return (
    <SpotlightCard
      id="contact"
      className="rounded-3xl p-6 sm:p-14 text-center space-y-7 relative overflow-hidden border-cyan-500/30"
    >
      <div className="absolute -top-28 -right-28 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          Get In Touch
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Let’s build something extraordinary together.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Open to full-stack software engineering, GCP cloud engineering, and
          Python data roles. Have a project, team opportunity, or idea in mind?
          Reach out!
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-3">
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center gap-2.5 max-w-full truncate"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="truncate">{PERSONAL_INFO.email}</span>
        </a>

        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all flex items-center gap-2.5 transform hover:-translate-y-1"
        >
          <svg
            className="w-4 h-4 text-[#0a66c2] flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3Z" />
          </svg>
          <span>Connect on LinkedIn</span>
        </a>

        <CopyEmailButton
          size="lg"
          label="Copy Direct Email"
          copiedLabel="Copied Direct Email! ✓"
        />
      </div>

      <div className="pt-6 border-t border-slate-800/80 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-center gap-6">
        <span className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4 text-emerald-400 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {PERSONAL_INFO.location}
        </span>
        <span className="flex items-center gap-1.5 text-cyan-400">
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          Open to Remote &amp; Relocation
        </span>
      </div>
    </SpotlightCard>
  );
}
