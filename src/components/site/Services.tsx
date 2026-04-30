import { ArrowUpRight } from "lucide-react";
import emc from "@/assets/service-emc.jpg";
import powerQuality from "@/assets/service-power-quality.jpg";
import engineering from "@/assets/service-engineering.jpg";

const services = [
  {
    image: emc,
    eyebrow: "01 — EMC-mätningar",
    title: "Hitta störningarna innan kunden gör det",
    description:
      "Pre-compliance och felsökning enligt EN/IEC-standarder. Emission, immunitet och near-field-analys — vi tar dig hela vägen till godkänd produkt.",
  },
  {
    image: powerQuality,
    eyebrow: "02 — Elkvalitet",
    title: "Stabil el — bevisad med data",
    description:
      "Mätning och analys av övertoner, transienter, flicker och obalans enligt EN 50160. Vi pekar ut roten till problemet, inte bara symptomen.",
  },
  {
    image: engineering,
    eyebrow: "03 — Ingenjörskonsulter",
    title: "Erfarna elektroingenjörer i ditt projekt",
    description:
      "Vi förstärker ditt team med seniora konstruktörer och mätingenjörer inom elektronik, EMC och kraftelektronik när du behöver det som mest.",
  },
];

export const Services = () => {
  return (
    <section id="tjanster" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary mb-5">
            Vad vi gör
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[1.05] text-balance">
            Tre kärnområden.{" "}
            <span className="text-ink-soft">
              En kompromisslös syn på kvalitet.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface-strong">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-ink-soft mb-4">
                  {s.eyebrow}
                </p>
                <h3 className="font-display text-2xl text-ink mb-3 leading-tight">
                  {s.title}
                </h3>
                <p className="text-ink-soft leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group/link"
                >
                  Diskutera ett uppdrag
                  <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
