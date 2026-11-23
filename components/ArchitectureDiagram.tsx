"use client";

import SectionHeader from "./ui/SectionHeader";
import SpotlightCard from "./ui/SpotlightCard";
import TechBadge from "./ui/TechBadge";

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="space-y-8">
      <SectionHeader
        step="02"
        tag="PRODUCTION ARCHITECTURE"
        title="Enterprise Architectures Built in Production"
        subtitle="Real-world Engineered Solutions"
      />

      {/* Case Study 1: Decoupled Headless Platform with Animated SVG Diagram */}
      <SpotlightCard className="rounded-3xl p-6 sm:p-9 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
              <span>🚀</span> Production Enterprise Case Study
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Decoupled Headless CMS &amp; High-Speed Search Architecture
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Engineered the content delivery architecture for a high-traffic
              decoupled application where a{" "}
              <strong className="text-white font-medium">Next.js frontend</strong>{" "}
              consumes structured entities from a custom Drupal backend. Exposed
              content through Drupal JSON:API, created custom REST export endpoints
              with Search API indexing, and built live autocomplete search
              functionality.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <span>
                  <strong className="text-white">Structured Modeling:</strong>{" "}
                  Paragraphs-based dynamic page layouts, article like/dislike
                  analytics, and feedback logic.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <span>
                  <strong className="text-white">API Performance:</strong>{" "}
                  JSON:API Extras, JSON:API Menu Items, and optimized Views REST
                  endpoints.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <span>
                  <strong className="text-white">Security &amp; Integrity:</strong>{" "}
                  ReCAPTCHA, Turnstile, and editorial authentication rules.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <TechBadge label="Next.js Client" variant="cyan" />
              <TechBadge label="Drupal Headless" variant="indigo" />
              <TechBadge label="JSON:API Resources" variant="emerald" />
              <TechBadge label="Search API Autocomplete" variant="amber" />
            </div>
          </div>

          {/* Animated SVG Diagram Visual */}
          <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-3">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                Data Flow Diagram
              </span>
              <span>REST / JSON:API</span>
            </div>

            <svg
              className="w-full h-44"
              viewBox="0 0 360 170"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Frontend Box */}
              <rect
                x="10"
                y="20"
                width="95"
                height="50"
                rx="8"
                fill="#0f172a"
                stroke="#38bdf8"
                strokeWidth="1.5"
              />
              <text
                x="57"
                y="45"
                fill="#ffffff"
                fontSize="11"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                Next.js Client
              </text>
              <text
                x="57"
                y="58"
                fill="#94a3b8"
                fontSize="8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                Decoupled UI
              </text>

              {/* Arrow 1 */}
              <path
                d="M105 45 L150 45"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-flow"
              />
              <polygon points="150,42 156,45 150,48" fill="#38bdf8" />

              {/* Gateway / API Layer */}
              <rect
                x="155"
                y="20"
                width="95"
                height="50"
                rx="8"
                fill="#0f172a"
                stroke="#818cf8"
                strokeWidth="1.5"
              />
              <text
                x="202"
                y="45"
                fill="#ffffff"
                fontSize="11"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                JSON:API Layer
              </text>
              <text
                x="202"
                y="58"
                fill="#818cf8"
                fontSize="8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                Custom Endpoints
              </text>

              {/* Arrow 2 */}
              <path
                d="M250 45 L290 45"
                stroke="#818cf8"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-flow"
              />
              <polygon points="290,42 296,45 290,48" fill="#818cf8" />

              {/* CMS Core */}
              <rect
                x="295"
                y="20"
                width="60"
                height="50"
                rx="8"
                fill="#0f172a"
                stroke="#10b981"
                strokeWidth="1.5"
              />
              <text
                x="325"
                y="45"
                fill="#ffffff"
                fontSize="10"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                Drupal
              </text>
              <text
                x="325"
                y="58"
                fill="#10b981"
                fontSize="8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                Core CMS
              </text>

              {/* Search API Downward Flow */}
              <path
                d="M202 70 L202 110"
                stroke="#38bdf8"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <rect
                x="135"
                y="110"
                width="135"
                height="45"
                rx="8"
                fill="#0f172a"
                stroke="#f59e0b"
                strokeWidth="1.5"
              />
              <text
                x="202"
                y="132"
                fill="#ffffff"
                fontSize="10"
                fontFamily="'Plus Jakarta Sans', sans-serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                Search API &amp; Indexing
              </text>
              <text
                x="202"
                y="145"
                fill="#f59e0b"
                fontSize="8"
                fontFamily="monospace"
                textAnchor="middle"
              >
                Autocomplete REST Views
              </text>
            </svg>

            <div className="text-[11px] font-mono text-slate-400 bg-slate-900/90 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between">
              <span>
                Response Time: <span className="text-emerald-400">&lt;65ms</span>
              </span>
              <span>
                Delivery: <span className="text-cyan-400">Stateless JSON</span>
              </span>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* Case Study 2: Interactive Dynamic Calculator & Learning Platform */}
      <SpotlightCard className="rounded-3xl p-6 sm:p-9 space-y-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
            <span>⚡</span> Interactive Application Architecture
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Dynamic Wizard, Interactive Calculator &amp; Self-Guided Learning Engine
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-normal max-w-4xl">
            Architected and shipped an interactive calculator engine alongside
            dynamic, self-guided learning modules. Built multi-step wizard flows with
            Twig-based rendering and integrated React modules directly into Drupal.
            Engineered custom Drupal API layer for draft submission handling,
            progress persistence across sessions, category lookups, and
            administrator-side CSV/data reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-xs font-mono text-emerald-400">
              Step Wizard Engine
            </span>
            <h4 className="text-sm font-semibold text-white">Dynamic Step Inputs</h4>
            <p className="text-xs text-slate-400">
              Nested inputs, media, editable result screens, and linked content
              references.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-xs font-mono text-cyan-400">
              State Persistence
            </span>
            <h4 className="text-sm font-semibold text-white">
              Custom API Progress Layer
            </h4>
            <p className="text-xs text-slate-400">
              Resume capability, draft handling, completion metrics, and
              transactional saves.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
            <span className="text-xs font-mono text-indigo-400">
              Modern Frontend Embed
            </span>
            <h4 className="text-sm font-semibold text-white">
              React Embedded Module
            </h4>
            <p className="text-xs text-slate-400">
              Custom Drupal-side React integration module to serve interactive apps
              seamlessly.
            </p>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
