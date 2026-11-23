interface SectionHeaderProps {
  step: string;
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({
  step,
  tag,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-4 ${className}`}
    >
      <div>
        <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
          {step} / {tag}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-xs text-slate-400 font-mono">{subtitle}</p>
      )}
    </div>
  );
}
