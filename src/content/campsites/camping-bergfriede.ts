import type { CampsiteConfig } from "../types";

/**
 * Camping am Berg & Gasthof-Pension Bergfriede — Steinfeld im Drautal, Kärnten.
 * Alle Texte/Fakten belegt aus camping-bergfriede.com (Stand-Scrape 2026-06).
 * Bilder = eigene Fotos des Betriebs in /public/campsites/camping-bergfriede/.
 * Ausnahme: drei Region-Aktivitätsfotos (Wandern/Radfahren/Kanu) stammen aus
 * der Kärnten-Werbung und sind ausschließlich im klar als "Region/Umgebung"
 * gerahmten Aktivitäten-Block verwendet (siehe REPORT, Rechte vom Kunden zu
 * bestätigen). EHRLICH: Bergcamping auf 780 m — KEIN See am Platz, daher kein
 * `see`. Keine eindeutige Auszeichnung → awards bleibt leer. Preise real aus
 * der Preisliste 2026.
 */
const IMG = "/campsites/camping-bergfriede";

export const campingBergfriede: CampsiteConfig = {
  name: "Camping am Berg & Gasthof-Pension Bergfriede",
  shortName: "Bergfriede",
  slug: "camping-bergfriede",
  ort: "Steinfeld im Drautal",
  region: "Kärnten",
  brandKind: "Camping & Pension",
  regionLong: "Drautal · Oberkärnten · Österreich",

  claim: "Dein Familienurlaub am Berg, hoch über dem Drautal",
  claimEmphasis: "hoch über dem Drautal",
  intro:
    "Familiengeführtes Camping am Berg, gemütliche Zimmer und eine Ferienwohnung auf 780 m Seehöhe — mit weitem Blick über das Drautal, Hoftieren und echtem Kärntner Landleben.",

  logo: { src: `${IMG}/logo-bergfriede.png`, alt: "Camping am Berg & Gasthof-Pension Bergfriede Logo" },

  statement: {
    text: "Bei uns erlebt ihr das echte Landleben, die Ruhe der Kärntner Berge und herzliche Gastfreundschaft.",
    emphasis: "echte Landleben",
  },

  pillars: [
    { title: "Auf 780 m über dem Drautal", text: "Ruhige Sonnenlage auf 780 Metern Seehöhe mit atemberaubendem Blick über das Drautal und die umliegenden Berge.", image: { src: `${IMG}/lage-drautal-blick.webp`, alt: "Stellplätze mit Blick über das Drautal und die Berge bei Camping Bergfriede" } },
    { title: "Familie Steiger", text: "Persönlich geführt von Familie Steiger — herzliches Willkommen, frische Produkte vom Hof und wertvolle Tipps für eure Urlaubsabenteuer.", image: { src: `${IMG}/familie-steiger.webp`, alt: "Familie Steiger, eure Gastgeber bei Camping am Berg & Gasthof-Pension Bergfriede" } },
    { title: "Gasthof & hofeigene Küche", text: "Traditionsgasthof mit großer überdachter Terrasse: Frühstück mit hofeigenen Produkten und ganztägig Snacks im Haupthaus.", image: { src: `${IMG}/gasthof-pension.webp`, alt: "Gasthof-Pension Bergfriede mit großer überdachter Terrasse" } },
  ],

  usps: [
    "Familienbetrieb seit 1960",
    "Auf 780 m mit Drautal-Blick",
    "30 Stellplätze auf Wiesengrund",
    "Hoftiere & Spielplatz für Kinder",
    "Gratis WLAN am ganzen Platz",
    "Hunde am Camping willkommen",
  ],

  trust: {
    heading: "Worauf ihr euch bei Familie Steiger verlassen könnt",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführter Familienbetrieb in Steinfeld im Drautal, faire Preise, eine ruhige Sonnenlage auf 780 m und echtes Bauernhofleben mit hofeigenen Produkten.",
  },

  // Keine eindeutig belegbare Auszeichnung auf der Quelle → ehrlich leer.
  awards: [],

  saison: { von: "Mai", bis: "September" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: Camping Bergfriede mit Hof und Stellplätzen über dem Drautal in Kärnten" },
  },

  camping: {
    heading: "Camping am Berg",
    intro:
      "Idyllische Stellplätze auf natürlichem Wiesengrund mit schattenspendenden Bäumen — auf 780 m Seehöhe, mit Blick über das Drautal. Moderne Sanitäranlagen mit Warmwasser, 16-Ampere-Stromanschlüsse, Gratis-WLAN, Brötchenservice und ein wöchentliches Lagerfeuer inklusive.",
    features: [
      { title: "Aussicht auf 780 m", text: "Genießt die Gelassenheit der Kärntner Bergwelt: idyllische Stellplätze mit Panoramablick über die umliegenden Berge und Täler.", image: { src: `${IMG}/camping-780m.webp`, alt: "Campingplatz Bergfriede auf 780 m Seehöhe mit Bergblick" } },
      { title: "30 großzügige Stellplätze", text: "30 großzügige Plätze auf gepflegtem Wiesengrund — viel Raum für Ruhe und Erholung, mit Frischwasser und Entsorgung für Grau-, Schwarz- und Chemietoilettenwasser.", image: { src: `${IMG}/stellplaetze-wiese.webp`, alt: "Großzügige Stellplätze mit Wohnwagen auf dem Wiesengrund von Camping Bergfriede" } },
      { title: "Für Zelt, Wohnwagen & Wohnmobil", text: "Ob mit Zelt, Wohnwagen oder Wohnmobil – bei Camping Bergfriede fühlt sich jeder Camper wie zuhause.", image: { src: `${IMG}/zelten-wiese.webp`, alt: "Zelte auf der sonnigen Camping-Wiese bei Bergfriede" } },
      { title: "Schattige Naturplätze", text: "Gepflegter Wiesengrund mit schattenspendenden Bäumen sorgt für echtes Naturgefühl – Grillen ist auf Anfrage erlaubt.", image: { src: `${IMG}/schattige-wiesenplaetze.webp`, alt: "Schattige Wiesen-Stellplätze unter Bäumen bei Camping Bergfriede" } },
    ],
  },

  mobilheime: {
    heading: "Zimmer & Ferienwohnung",
    intro:
      "Lieber feste Wände als Zelt? Gemütliche Zimmer mit Blick in die Natur Oberkärntens und eine komplett ausgestattete Ferienwohnung für bis zu 6 Personen – ganzjährig geöffnet.",
    items: [
      { name: "Ferienwohnung für 6 Personen", kind: "Ferienwohnung · ganzjährig", text: "Geräumige Wohnung mit 2 Schlafzimmern, separatem Zimmer, 2 Badezimmern und voll ausgestatteter Küche mit Balkon – ideal für Familien.", image: { src: `${IMG}/ferienwohnung-kueche.webp`, alt: "Voll ausgestattete Küche und Essbereich der Ferienwohnung im Gasthof-Pension Bergfriede" }, priceFrom: 90, features: ["2–6 Personen", "2 Schlafzimmer · 2 Bäder", "Komplettküche & Balkon"] },
      { name: "Familienzimmer mit Balkon & Sitzecke", kind: "Doppelzimmer · 1–4 Personen", text: "Liebevoll eingerichtetes, sehr geräumiges Zimmer mit Balkon, gemütlicher Sitzecke und Blick zum Hausberg – beliebt als Familienzimmer, Zusatzbett möglich.", image: { src: `${IMG}/familienzimmer-sitzecke.webp`, alt: "Doppelzimmer mit Balkon und gemütlicher Sitzecke im Gasthof-Pension Bergfriede" }, priceFrom: 70, features: ["1–4 Personen", "Balkon & Sitzecke", "Zusatzbett möglich"] },
      { name: "Doppelzimmer mit Balkon", kind: "Doppelzimmer · 1–2 Personen", text: "Geräumiges, liebevoll eingerichtetes Zimmer mit Balkon und Blick zum Hausberg – mit Dusche, Fernseher und Gratis-WLAN.", image: { src: `${IMG}/doppelzimmer-balkon.webp`, alt: "Doppelzimmer mit Balkon im Gasthof-Pension Bergfriede in Steinfeld" }, priceFrom: 60, features: ["1–2 Personen", "Balkon zum Hausberg", "Frühstück zubuchbar"] },
      { name: "Doppelzimmer ohne Balkon", kind: "Doppelzimmer · 1–2 Personen", text: "Kleines, aber feines und gemütliches Zimmer mit allem nötigen Komfort – Dusche, Fernseher und Gratis-WLAN inklusive.", image: { src: `${IMG}/doppelzimmer-ohne-balkon.webp`, alt: "Gemütliches Doppelzimmer ohne Balkon im Gasthof-Pension Bergfriede" }, priceFrom: 50, features: ["1–2 Personen", "Dusche & WLAN", "Frühstück zubuchbar"] },
    ],
  },

  kinder: {
    heading: "Bauernhof für die ganze Familie",
    intro:
      "Beim Urlaub am Bauernhof entdecken Kinder spielerisch die Natur: Tiere füttern und streicheln, am Spielplatz mit Rutsche, Schaukel, Sandkasten und Pony-Wipptier toben oder auf der großen Spielwiese austoben.",
    features: [
      { title: "Lämmer & Hoftiere", text: "Bauernhoftiere zum Streicheln und Füttern – ein Highlight für die Kleinen, die hier das echte Landleben hautnah erleben.", image: { src: `${IMG}/hoftier-lamm.webp`, alt: "Junges Lamm am Bauernhof von Gasthof-Pension Bergfriede" } },
      { title: "Ponys mit viel Auslauf", text: "All unsere Tiere haben genügend Auslauf und frisches Futter – die Ponys grasen auf den Wiesen rund um den Hof.", image: { src: `${IMG}/hoftiere-ponys.webp`, alt: "Ponys auf der Weide am Bauernhof Bergfriede" } },
      { title: "Junge Hofkatzen", text: "Die jungen Kätzchen freuen sich aufs Spielen mit den kleinen Hofbesuchern – Streicheleinheiten garantiert.", image: { src: `${IMG}/hofkatzen.webp`, alt: "Junge Kätzchen am Bauernhof Bergfriede" } },
    ],
  },

  aktivitaeten: {
    heading: "Aktiv in der Urlaubsregion Drautal",
    intro:
      "Rund um den Hof bietet das Drautal unzählige Möglichkeiten für Natur- und Aktivurlauber – von Wanderungen und Radtouren bis zu Badespaß und Flugsport. Mit der Kärnten Card gibt es freien oder ermäßigten Eintritt zu vielen Ausflugszielen.",
    items: [
      { title: "Gleitschirm- & Drachenfliegen", text: "Das Drautal bietet mit seiner südlichen Thermik perfekte Bedingungen – und unsere Gäste dürfen den Start- (1270 m) und Landeplatz (590 m) kostenlos nutzen!", image: { src: `${IMG}/gleitschirmfliegen.webp`, alt: "Gleitschirmflieger über dem Drautal in Kärnten" } },
      { title: "Wandern & Naturerlebnisse", text: "Wanderrouten starten direkt beim Hof – vom Drauuferweg und Berghöfewanderweg bis zur Wanderung zum Knappensee auf der Leppner Alm.", image: { src: `${IMG}/wandern-knappensee.webp`, alt: "Wandern zum Knappensee auf der Leppner Alm im Drautal" } },
      { title: "Radfahren am Drauradweg", text: "Einer der schönsten Radwege Österreichs führt entlang der Drau direkt durchs Tal – E-Bike- und Fahrradverleih gibt es in Greifenburg.", image: { src: `${IMG}/radfahren-drauradweg.webp`, alt: "Radfahren am Drauradweg in Kärnten" } },
      { title: "Baden & Kanu auf der Drau", text: "Badesee Greifenburg, Weissensee und Millstätter See sind nicht weit – und auf der Drau lässt sich der Drau-Paddelweg im Kanu erkunden.", image: { src: `${IMG}/kanu-drau.webp`, alt: "Kanufahren auf der Drau am Drau-Paddelweg in Kärnten" } },
    ],
  },

  anreise: {
    heading: "So findet ihr uns",
    modes: [
      { title: "Mit dem Auto", text: "Die Zufahrt führt ab Steinfeld vorbei an der Kirche über eine 1,5 km lange asphaltierte Straße direkt zum Hof – Mitterberg 3, 9754 Steinfeld." },
      { title: "An- & Abreise", text: "Camping: Anreise ab 13:00 Uhr, Abreise bis 11:00 Uhr. Zimmer & Ferienwohnung: Anreise ab 13:00 Uhr, Abreise bis 10:00 Uhr." },
      { title: "Gut zu wissen", text: "Mit der Kärnten Card (im Gemeindeamt Steinfeld erhältlich) gibt es freien oder ermäßigten Eintritt zu vielen Ausflugszielen. Eine Ladestation für E-Autos befindet sich in Steinfeld." },
    ],
  },

  galerie: {
    heading: "Ein Hof zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Bergcamping, gemütliche Zimmer, hofeigene Produkte und das weite Drautal vor der Tür – ein paar Eindrücke von Camping Bergfriede in Steinfeld.",
    tag: "Mai bis September",
    moreCount: 12,
    images: [
      { src: `${IMG}/fruehstueck-hofprodukte.webp`, alt: "Frühstück und Jause mit selbstgemachten Hofprodukten" },
      { src: `${IMG}/gaststube.webp`, alt: "Gemütliche Gaststube im Gasthof-Pension Bergfriede" },
      { src: `${IMG}/ferienwohnung-schlafzimmer.webp`, alt: "Schlafzimmer mit Doppelbett in der Ferienwohnung" },
      { src: `${IMG}/steinfeld-drautal.webp`, alt: "Steinfeld im Drautal von oben" },
    ],
  },

  booking: {
    heading: "Verfügbarkeit & Anfrage",
    intro:
      "Wählt Zeitraum, Unterkunft und Personen — Familie Steiger meldet sich mit eurer persönlichen Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Camping: ab-Preise pro Nacht in der Vorsaison für 2 Erw. inkl. Stellplatz, zzgl. Strom € 3 und Ortstaxe € 2,20 (ab 16 J.). Zimmer ab-Preis ohne Frühstück, inkl. Kurtaxe. Ferienwohnung ab 2 Pers. (Mindestaufenthalt 5 Nächte, zzgl. Endreinigung € 50). Hauptsaison (Juli/August) höher.",
    highlight: {
      title: "Gäste fliegen gratis",
      text: "Unsere Gäste dürfen den Gleitschirm-Start- und Landeplatz im Drautal kostenlos nutzen — ein echtes Highlight für Flugbegeisterte.",
    },
    categories: [
      // Reale Preisliste Bergfriede 2026 (Vorsaison "ab"): Stellplatz = 2 Erw. à € 9 + Stellplatz € 4;
      // Zimmer = DZ ohne Balkon ohne Frühstück, 2 Pers.; Ferienwohnung = 2 Pers.
      { id: "stellplatz", label: "Stellplatz", perNight: 22, perExtraGuest: 9 },
      { id: "zimmer", label: "Doppelzimmer", perNight: 50, perExtraGuest: 0 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 90, perExtraGuest: 0 },
    ],
  },

  kontakt: {
    tel: "+43 4717 401",
    telHref: "tel:+434717401",
    mail: "info@camping-bergfriede.com",
    adresse: "Mitterberg 3 · 9754 Steinfeld · Kärnten",
    coords: { lat: 46.761964, lng: 13.243101 },
  },

  story: {
    kicker: "Seit 1960",
    heading: "Der Obersittlinger-Hof",
    intro:
      "Unser Hof, bekannt unter dem Vulgonamen „Obersittlinger“, wird seit Generationen von der Familie Steiger bewirtschaftet — heute begrüßen euch gleich drei Generationen.",
    chapters: [
      { no: "01", kicker: "16. Jahrhundert", title: "Ein Hof mit Wurzeln", text: "Bekannt unter dem traditionellen Vulgonamen „Obersittlinger“, reichen die Wurzeln unseres Hofes bis ins 16. Jahrhundert zurück." },
      { no: "02", kicker: "Seit 1960", title: "Gasthof & Pension", text: "Seit 1960 führen wir mit viel Liebe zur Natur und echter Kärntner Gastfreundschaft den Gasthof und die Pension." },
      { no: "03", kicker: "1986", title: "Camping am Berg", text: "1986 erweiterten wir unser Angebot um den Campingplatz — Naturcamping auf 780 m mit Blick über das Drautal." },
      { no: "04", kicker: "Seit 2014", title: "Familie Steiger", text: "2014 übernahm Hermann jun. den Betrieb vom Vater. Heute sind Oma Elisabeth, Opa Hermann sen., Michaela und Hermann jun. mit den Kindern Tobias und David eure Gastgeber." },
    ],
  },

  languages: ["DE"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
        { label: "Preise", href: "#booking" },
      ],
    },
    {
      label: "Zimmer & FeWo",
      href: "#mobilheime",
      children: [
        { label: "Ferienwohnung", href: "#mobilheime" },
        { label: "Familienzimmer", href: "#mobilheime" },
        { label: "Doppelzimmer", href: "#mobilheime" },
      ],
    },
    {
      label: "Bauernhof",
      href: "#kinder",
      children: [
        { label: "Hoftiere", href: "#kinder" },
        { label: "Spielplatz", href: "#kinder" },
        { label: "Familie Steiger", href: "#story" },
      ],
    },
    {
      label: "Region",
      href: "#aktivitaeten",
      children: [
        { label: "Gleitschirmfliegen", href: "#aktivitaeten" },
        { label: "Wandern & Radfahren", href: "#aktivitaeten" },
        { label: "Baden & Kanu", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingBergfriede;
