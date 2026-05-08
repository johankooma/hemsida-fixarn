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
  "cap.emc.l3": "IEC / FCC-standarder",
  "cap.pq.title": "Elkvalitet",
  "cap.pq.range": "EN 50160",
  "cap.pq.l1": "Mätning av övertoner, transienter & flicker",
  "cap.pq.l2": "Rotorsaksanalys — vi pekar ut boven",
  "cap.pq.l3": "Aktiva & passiva filter som åtgärdar problemet",
  "cap.fs.title": "Functional Safety",
  "cap.fs.range": "ISO 13849 · ISO 19014",
  "cap.fs.l1": "ISO EN 13849-1:2023 Annex L — säkerhetsrelaterade styrsystem",
  "cap.fs.l2": "Sömlöst flöde från krav till verifiering",
  "cap.fs.l3": "Höjd EMC-immunitet där safety kräver det",

  "num.section": "03 — I siffror",
  "num.years": "År i branschen",
  "num.assignments": "Genomförda uppdrag",
  "num.freq": "Branscher vi täcker",

  "faq.section": "05 — Frågor",
  "faq.title": "Det vi oftast får frågan om.",
  "faq.q1": "Vad gör Kooma Engineering?",
  "faq.a1":
    "Vi är en ingenjörspartner specialiserad på EMC-mätningar, elkvalitetsanalys och funktionssäkerhet. Vi hjälper industrin att identifiera rätt krav — och sedan verifiera att produkter och anläggningar uppfyller dem. Vi har särskild kompetens inom IEC 60204 (maskinsäkerhet) och IEC 61010 (mät- och laboratorieutrustning).",
  "faq.q2": "Vilka EMC-mätningar utför ni?",
  "faq.a2":
    "Verifiering enligt EN/ISO-standarder, 9 kHz – 6 GHz för både emission och immunitet. Vi har särskild kompetens inom EMC för funktionssäkerhet enligt IEC 61000-6-7 samt ISO EN 13766 — där kraven på immunitet är som högst. Vi levererar även lösningar, både aktiva och passiva filter beroende på applikation.",
  "faq.q3": "Vad menas med elkvalitet?",
  "faq.a3":
    "Analys av spänning, övertoner, transienter och flicker enligt EN 50160. Vi identifierar källor till störningar i ditt elnät och föreslår åtgärder.",
  "faq.q4": "Hur lång erfarenhet har ni?",
  "faq.a4":
    "Kooma Engineering har funnits i 11 år. Vårt team samlar på sig tillsammans över 10 års erfarenhet inom området, med mer än 450 genomförda uppdrag inom industri, fordon, energi och medicinteknik.",
  "faq.q5": "Var är ni baserade?",
  "faq.a5":
    "Göteborg (Västra Frölunda), men vi arbetar med kunder i hela Sverige och utför mätningar på plats hos er.",
  "faq.q6": "Hur kommer vi igång?",
  "faq.a6":
    "Maila info@kooma.se eller ring oss. Vi återkommer inom 24 timmar med ett första samtal — utan förpliktelser.",

  "contact.section": "04 — Kontakt",
  "contact.title": "Hör av dig — vi svarar inom 24 timmar.",
  "contact.email": "Email",
  "contact.phoneSwitchboardLabel": "Växel",
  "contact.phoneSwitchboard": "+46 300 692 010",
  "contact.visitingLabel": "Besöksadress",
  "contact.location": "Hulda Lindgren gata 3 2tr, 42131 Västra Frölunda",
  "contact.postalLabel": "Postadress",
  "contact.postal": "Kivra: 559006-8150, 10631 Stockholm SE",

  "footer.tagline":
    "Erfaren ingenjörspartner inom mätteknik, tester och validering för svensk industri.",
  "footer.services": "Tjänster",
  "footer.contact": "Kontakt",
  "footer.rights": "Alla rättigheter förbehållna.",

  "cookie.text": "Vi använder cookies för att förbättra din upplevelse. Du väljer själv vilka du accepterar.",
  "cookie.accept": "Acceptera alla",
  "cookie.reject": "Endast nödvändiga",
  "cookie.link": "Läs mer",
  "cookie.aria": "Cookie-samtycke",
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
  "cap.emc.l3": "IEC / FCC standards",
  "cap.pq.title": "Power quality",
  "cap.pq.range": "EN 50160",
  "cap.pq.l1": "Measurement of harmonics, transients & flicker",
  "cap.pq.l2": "Root-cause analysis — we name the culprit",
  "cap.pq.l3": "Active & passive filters that fix the problem",
  "cap.fs.title": "Functional Safety",
  "cap.fs.range": "ISO 13849 · ISO 19014",
  "cap.fs.l1": "ISO EN 13849-1:2023 Annex L — safety-related control systems",
  "cap.fs.l2": "Seamless flow from requirements to verification",
  "cap.fs.l3": "Elevated EMC immunity where safety demands it",

  "num.section": "03 — In numbers",
  "num.years": "Years in the field",
  "num.assignments": "Completed assignments",
  "num.freq": "Industries we serve",

  "faq.section": "05 — Questions",
  "faq.title": "The things we are asked the most.",
  "faq.q1": "What does Kooma Engineering do?",
  "faq.a1":
    "We are an engineering partner specialised in EMC measurements, power quality analysis and functional safety. We help industry identify the right requirements — and then verify that products and installations meet them. We have particular expertise in IEC 60204 (machinery safety) and IEC 61010 (measurement and laboratory equipment).",
  "faq.q2": "What EMC measurements do you perform?",
  "faq.a2":
    "Verification according to EN/ISO standards, 9 kHz – 6 GHz for both emission and immunity. We have particular expertise in EMC for functional safety per IEC 61000-6-7 and ISO EN 13766 — where immunity requirements are at their highest. We also deliver solutions, both active and passive filters depending on the application.",
  "faq.q3": "What is power quality?",
  "faq.a3":
    "Analysis of voltage, harmonics, transients and flicker according to EN 50160. We identify the sources of disturbances in your grid and propose remediation.",
  "faq.q4": "How experienced are you?",
  "faq.a4":
    "Kooma Engineering has been in business for 11 years. Our team brings over 10 years of combined experience, with more than 450 completed assignments across industry, automotive, energy and medical technology.",
  "faq.q5": "Where are you based?",
  "faq.a5":
    "Gothenburg (Västra Frölunda), but we work with clients across Sweden and perform measurements on-site.",
  "faq.q6": "How do we get started?",
  "faq.a6":
    "Email info@kooma.se or give us a call. We come back within 24 hours for an initial conversation — no strings attached.",

  "contact.section": "04 — Contact",
  "contact.title": "Get in touch — we reply within 24 hours.",
  "contact.email": "Email",
  "contact.phoneSwitchboardLabel": "Switchboard",
  "contact.phoneSwitchboard": "+46 300 692 010",
  "contact.visitingLabel": "Visiting address",
  "contact.location": "Hulda Lindgren gata 3 2tr, 42131 Västra Frölunda",
  "contact.postalLabel": "Postal address",
  "contact.postal": "Kivra: 559006-8150, 10631 Stockholm SE",

  "footer.tagline":
    "Experienced engineering partner in measurement, testing and validation for industry.",
  "footer.services": "Services",
  "footer.contact": "Contact",
  "footer.rights": "All rights reserved.",

  "cookie.text": "We use cookies to improve your experience. You choose which ones to accept.",
  "cookie.accept": "Accept all",
  "cookie.reject": "Necessary only",
  "cookie.link": "Read more",
  "cookie.aria": "Cookie consent",
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
