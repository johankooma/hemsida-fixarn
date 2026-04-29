const logos = ["SCANIA", "VOLVO", "SAAB", "ABB", "SANDVIK", "ALFA LAVAL"];

export const TrustBar = () => {
  return (
    <section aria-label="Kunder vi arbetar med" className="py-12 border-y border-border bg-surface/60">
      <div className="container">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-ink-soft text-center mb-8">
          Förtroende från ledande svensk industri
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <span
              key={name}
              className="text-sm md:text-base font-semibold tracking-[0.18em] text-ink-soft/70 hover:text-ink transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
