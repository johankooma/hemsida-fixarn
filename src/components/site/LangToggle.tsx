import { useI18n, type Lang } from "@/lib/i18n";

export const LangToggle = ({
  className = "",
}: {
  className?: string;
}) => {
  const { lang, setLang } = useI18n();

  const Btn = ({ value, label }: { value: Lang; label: string }) => (
    <button
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      className={`px-2 py-1 transition-colors ${
        lang === value ? "text-ink" : "text-ink-soft hover:text-ink"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className={`fixed top-5 right-5 z-50 flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.25em] bg-background/70 backdrop-blur-md border border-border rounded-full px-2 py-1 ${className}`}
    >
      <Btn value="sv" label="SV" />
      <span className="text-ink-soft/40">/</span>
      <Btn value="en" label="EN" />
    </div>
  );
};
