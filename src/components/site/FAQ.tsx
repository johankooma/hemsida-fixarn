import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vad gör Kooma Engineering?",
    a: "Vi är en ingenjörspartner specialiserad på EMC-mätningar, elkvalitetsanalys och elektroniktester. Vi hjälper svensk industri att hitta störningar och säkerställa att produkter och anläggningar fungerar som de ska.",
  },
  {
    q: "Vilka EMC-mätningar utför ni?",
    a: "Pre-compliance och felsökning enligt EN/IEC-standarder. Vi täcker frekvensområdet 9 kHz – 6 GHz för både emission och immunitet.",
  },
  {
    q: "Vad menas med elkvalitet?",
    a: "Analys av spänning, övertoner, transienter och flicker enligt EN 50160. Vi identifierar källor till störningar i ditt elnät och föreslår åtgärder.",
  },
  {
    q: "Hur lång erfarenhet har ni?",
    a: "11 år i branschen och över 450 genomförda uppdrag inom industri, fordon, energi och medicinteknik.",
  },
  {
    q: "Var är ni baserade?",
    a: "Stockholm, men vi arbetar med kunder i hela Sverige och utför mätningar på plats hos er.",
  },
  {
    q: "Hur kommer vi igång?",
    a: "Maila info@kooma.se eller ring oss. Vi återkommer inom 24 timmar med ett första samtal — utan förpliktelser.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-ink-soft mb-8">
          FAQ
        </p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-ink mb-12">
          Vanliga frågor.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium text-ink py-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-soft leading-relaxed pb-6">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
