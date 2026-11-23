interface TechBadgeProps {
  label: string;
  variant?: "cyan" | "indigo" | "emerald" | "amber" | "pink" | "slate";
  className?: string;
}

const variantStyles: Record<string, string> = {
  cyan: "bg-slate-800/90 text-cyan-300 border-slate-700",
  indigo: "bg-slate-800/90 text-indigo-300 border-slate-700",
  emerald: "bg-slate-800/90 text-emerald-300 border-slate-700",
  amber: "bg-slate-800/90 text-amber-300 border-slate-700",
  pink: "bg-slate-800/90 text-pink-300 border-slate-700",
  slate: "bg-slate-800 text-slate-300 border-slate-700/60",
};

export default function TechBadge({
  label,
  variant = "cyan",
  className = "",
}: TechBadgeProps) {
  const chosenStyle = variantStyles[variant] || variantStyles.cyan;

  return (
    <span
      className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${chosenStyle} ${className}`}
    >
      {label}
    </span>
  );
}
