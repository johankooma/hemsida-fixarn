import { useI18n } from "@/lib/i18n";

export const Pitch = () => {
  const { t } = useI18n();
  return (
    <section
      id="manifest"
      className="min-h-screen flex items-center py-32 border-t border-border"
    >
      <div className="container max-w-5xl">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-ink-soft mb-12">
          {t("pitch.section")}
        </p>

        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-light leading-[1.02] text-ink text-balance tracking-tight">
          {t("pitch.title.a")} <span className="italic text-ink-soft">{t("pitch.title.b")}</span> {t("pitch.title.c")}
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 max-w-4xl">
          <div className="md:col-span-1 hidden md:block">
            <div className="h-px w-full bg-ink mt-4" />
          </div>
          <p className="md:col-span-11 text-lg sm:text-xl leading-relaxed text-ink-soft max-w-2xl">
            {t("pitch.body")}
          </p>
        </div>
      </div>
    </section>
  );
};
