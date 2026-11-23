import { PERSONAL_INFO } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="text-center text-xs text-slate-500 font-mono pb-12 space-y-1.5">
      <p>© 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
    </footer>
  );
}
