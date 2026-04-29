const stats = [
  { value: "16+", label: "års erfarenhet" },
  { value: "500+", label: "genomförda uppdrag" },
  { value: "40+", label: "industrikunder" },
  { value: "100%", label: "leverans i tid" },
];

export const Stats = () => {
  return (
    <section id="om" className="py-24 md:py-32 bg-ink text-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary/90 mb-5">
              Om Kooma
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-balance">
              Erfaren ingenjörspartner —{" "}
              <span className="text-background/60">
                med ett rykte byggt på precision.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-background/70 leading-relaxed">
              Sedan 2008 har vi hjälpt svensk industri att verifiera,
              validera och utveckla. Vi är ingen jätte — och det är
              poängen. Du får erfarna ingenjörer som tar ansvar från
              första mötet till levererad rapport.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 border-t border-background/15 pt-12">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="font-display text-5xl md:text-6xl font-light text-background mb-2 tabular-nums">
                {s.value}
              </dt>
              <dd className="text-sm text-background/60 uppercase tracking-wider">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
