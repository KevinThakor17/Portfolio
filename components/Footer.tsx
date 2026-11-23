import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-slate-500 font-mono pb-12 space-y-2">
      <p>
        © 2026 {PERSONAL_INFO.name}. Built with Next.js, TypeScript, Tailwind CSS &amp; Modern Web Standards.
      </p>
      <p className="text-slate-600">
        Google Cloud Certified Associate Cloud Engineer • Full-Stack &amp; Python Architect
      </p>
    </footer>
  );
}
