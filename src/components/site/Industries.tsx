const industries = [
  "Fordonsindustri",
  "Energi & kraft",
  "Verkstadsindustri",
  "Medicinteknik",
  "Försvar",
  "Aerospace",
  "Process & kemi",
  "Forskning",
];

export const Industries = () => {
  return (
    <section id="branscher" className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">
              Branscher
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-ink leading-tight text-balance mb-6">
              Vi talar industrins språk.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Oavsett om det handlar om en kritisk komponent i en motor
              eller validering av ett medicintekniskt instrument — vi
              vet vad som krävs.
            </p>
          </div>

          <ul className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-border">
            {industries.map((name, i) => (
              <li
                key={name}
                className={`flex items-center justify-between py-6 border-b border-border ${
                  i % 2 === 0 ? "sm:border-r sm:pr-8" : "sm:pl-8"
                }`}
              >
                <span className="font-display text-2xl md:text-3xl text-ink font-light">
                  {name}
                </span>
                <span className="font-mono text-xs text-ink-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
