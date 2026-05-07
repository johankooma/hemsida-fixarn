import { useI18n } from "@/lib/i18n";

export const Capabilities = () => {
  const { t } = useI18n();
  const items = [
    {
      no: "A",
      title: t("cap.emc.title"),
      range: t("cap.emc.range"),
      lines: [t("cap.emc.l1"), t("cap.emc.l2"), t("cap.emc.l3")],
    },
    {
      no: "B",
      title: t("cap.pq.title"),
      range: t("cap.pq.range"),
      lines: [t("cap.pq.l1"), t("cap.pq.l2"), t("cap.pq.l3")],
    },
  ];

  return (
    <section id="vad" className="py-32 border-t border-border bg-surface">
      <div className="container max-w-5xl">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-ink-soft mb-16">
          {t("cap.section")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {items.map((it) => (
            <div
              key={it.no}
              className="bg-surface p-10 md:p-14 flex flex-col min-h-[340px]"
            >
              <div className="flex items-baseline justify-between mb-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-ink-soft">
                  {it.no}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-ink-soft">
                  {it.range}
                </span>
              </div>

              <h3 className="font-display text-5xl sm:text-6xl font-light text-ink leading-none mb-10">
                {it.title}
              </h3>

              <ul className="mt-auto space-y-3 text-base text-ink-soft">
                {it.lines.map((l) => (
                  <li key={l} className="border-t border-border pt-3">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
