import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "sv" | "en";

type Dict = Record<string, string>;

const sv: Dict = {
  "hero.kicker": "Kooma Engineering — Göteborg",
  "hero.tag1": "EMC",
  "hero.tag2": "Elkvalitet",
  "hero.tag3": "Sedan 2014",
  "hero.scroll": "Scrolla ner",

  "pitch.section": "01 — Manifest",
  "pitch.title.a": "Vi mäter det andra",
  "pitch.title.b": "gissar",
  "pitch.title.c": "sig till.",
  "pitch.body":
    "EMC och elkvalitet är ingen teori. Det är instrument, kablage och timmar i fält. Vi tar med oss labbet ut till er anläggning och levererar svar — inte spekulationer.",

  "cap.section": "02 — Vad vi gör",
  "cap.emc.title": "EMC",
  "cap.emc.range": "9 kHz – 6 GHz",
  "cap.emc.l1": "Pre-compliance, emission & immunitet",
  "cap.emc.l2": "Felsökning på plats och i lab",
  "cap.emc.l3": "EN / IEC / FCC-standarder",
  "cap.pq.title": "Elkvalitet",
  "cap.pq.range": "EN 50160",
  "cap.pq.l1": "Övertoner, transienter, flicker",
  "cap.pq.l2": "Långtidsmätning i ställverk",
  "cap.pq.l3": "Rotorsaksanalys & åtgärdsförslag",

  "num.section": "03 — I siffror",
  "num.years": "År i branschen",
  "num.assignments": "Genomförda uppdrag",
  "num.freq": "Övre mätfrekvens",

  "faq.section": "05 — Frågor",
  "faq.title": "Det vi oftast får frågan om.",
  "faq.q1": "Vad gör Kooma Engineering?",
  "faq.a1":
    "Vi är en ingenjörspartner specialiserad på EMC-mätningar, elkvalitetsanalys och elektroniktester. Vi hjälper svensk industri att hitta störningar och säkerställa att produkter och anläggningar fungerar som de ska.",
  "faq.q2": "Vilka EMC-mätningar utför ni?",
  "faq.a2":
    "Pre-compliance och felsökning enligt EN/IEC-standarder. Vi täcker frekvensområdet 9 kHz – 6 GHz för både emission och immunitet.",
  "faq.q3": "Vad menas med elkvalitet?",
  "faq.a3":
    "Analys av spänning, övertoner, transienter och flicker enligt EN 50160. Vi identifierar källor till störningar i ditt elnät och föreslår åtgärder.",
  "faq.q4": "Hur lång erfarenhet har ni?",
  "faq.a4":
    "11 år i branschen och över 450 genomförda uppdrag inom industri, fordon, energi och medicinteknik.",
  "faq.q5": "Var är ni baserade?",
  "faq.a5":
    "Göteborg (Västra Frölunda), men vi arbetar med kunder i hela Sverige och utför mätningar på plats hos er.",
  "faq.q6": "Hur kommer vi igång?",
  "faq.a6":
    "Maila info@kooma.se eller ring oss. Vi återkommer inom 24 timmar med ett första samtal — utan förpliktelser.",

  "contact.section": "04 — Kontakt",
  "contact.title": "Hör av dig — vi svarar inom 24 timmar.",
  "contact.email": "Email",
  "contact.phoneDirectLabel": "Direkt",
  "contact.phoneDirect": "+46 (0)70 542 55 58",
  "contact.phoneSwitchboardLabel": "Växel",
  "contact.phoneSwitchboard": "+46 300 692 010",
  "contact.location": "Hulda Lindgren gata 3 2tr, 42131 Västra Frölunda",
  "contact.postalLabel": "Postadress",
  "contact.postal": "Kivra: 559006-8150, 10631 Stockholm SE",

  "footer.tagline":
    "Erfaren ingenjörspartner inom mätteknik, tester och validering för svensk industri.",
  "footer.services": "Tjänster",
  "footer.contact": "Kontakt",
  "footer.rights": "Alla rättigheter förbehållna.",
};

const en: Dict = {
  "hero.kicker": "Kooma Engineering — Gothenburg",
  "hero.tag1": "EMC",
  "hero.tag2": "Power quality",
  "hero.tag3": "Since 2014",
  "hero.scroll": "Scroll down",

  "pitch.section": "01 — Manifesto",
  "pitch.title.a": "We measure what others",
  "pitch.title.b": "guess",
  "pitch.title.c": "at.",
  "pitch.body":
    "EMC and power quality is not theory. It is instruments, cabling and hours in the field. We bring the lab out to your site and deliver answers — not speculation.",

  "cap.section": "02 — What we do",
  "cap.emc.title": "EMC",
  "cap.emc.range": "9 kHz – 6 GHz",
  "cap.emc.l1": "Pre-compliance, emission & immunity",
  "cap.emc.l2": "On-site and in-lab troubleshooting",
  "cap.emc.l3": "EN / IEC / FCC standards",
  "cap.pq.title": "Power quality",
  "cap.pq.range": "EN 50160",
  "cap.pq.l1": "Harmonics, transients, flicker",
  "cap.pq.l2": "Long-term measurement in switchgear",
  "cap.pq.l3": "Root-cause analysis & remediation",

  "num.section": "03 — In numbers",
  "num.years": "Years in the field",
  "num.assignments": "Completed assignments",
  "num.freq": "Upper measurement frequency",

  "faq.section": "05 — Questions",
  "faq.title": "The things we are asked the most.",
  "faq.q1": "What does Kooma Engineering do?",
  "faq.a1":
    "We are an engineering partner specialised in EMC measurements, power quality analysis and electronics testing. We help industry find disturbances and ensure that products and installations work as intended.",
  "faq.q2": "What EMC measurements do you perform?",
  "faq.a2":
    "Pre-compliance and troubleshooting according to EN/IEC standards. We cover 9 kHz – 6 GHz for both emission and immunity.",
  "faq.q3": "What is power quality?",
  "faq.a3":
    "Analysis of voltage, harmonics, transients and flicker according to EN 50160. We identify the sources of disturbances in your grid and propose remediation.",
  "faq.q4": "How experienced are you?",
  "faq.a4":
    "11 years in the field and more than 450 completed assignments across industry, automotive, energy and medical technology.",
  "faq.q5": "Where are you based?",
  "faq.a5":
    "Gothenburg (Västra Frölunda), but we work with clients across Sweden and perform measurements on-site.",
  "faq.q6": "How do we get started?",
  "faq.a6":
    "Email info@kooma.se or give us a call. We come back within 24 hours for an initial conversation — no strings attached.",

  "contact.section": "04 — Contact",
  "contact.title": "Get in touch — we reply within 24 hours.",
  "contact.email": "Email",
  "contact.phoneDirectLabel": "Direct",
  "contact.phoneDirect": "+46 (0)70 542 55 58",
  "contact.phoneSwitchboardLabel": "Switchboard",
  "contact.phoneSwitchboard": "+46 300 692 010",
  "contact.location": "Hulda Lindgren gata 3 2tr, 42131 Västra Frölunda",
  "contact.postalLabel": "Postal address",
  "contact.postal": "Kivra: 559006-8150, 10631 Stockholm SE",

  "footer.tagline":
    "Experienced engineering partner in measurement, testing and validation for industry.",
  "footer.services": "Services",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",
};

const dicts: Record<Lang, Dict> = { sv, en };

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
}>({
  lang: "sv",
  setLang: () => {},
  t: (k) => k,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "sv";
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "sv" || stored === "en") return stored;
    return navigator.language?.toLowerCase().startsWith("sv") ? "sv" : "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (k: string) => dicts[lang][k] ?? k;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
