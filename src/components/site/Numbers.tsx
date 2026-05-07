const numbers = [
  { v: "11", label: "År i branschen" },
  { v: "450+", label: "Genomförda uppdrag" },
  { v: "6 GHz", label: "Övre mätfrekvens" },
];

export const Numbers = () => {
  return (
    <section className="py-32 border-t border-border">
      <div className="container max-w-5xl">
        <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-ink-soft mb-16">
          03 — I siffror
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {numbers.map((n, i) => (
            <div key={n.label} className="flex flex-col">
              <span className="text-[10px] font-mono text-ink-soft mb-4">
                0{i + 1}
              </span>
              <span className="font-display text-7xl md:text-8xl font-light text-ink leading-none tracking-tight">
                {n.v}
              </span>
              <span className="mt-6 text-sm text-ink-soft uppercase tracking-[0.15em]">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
