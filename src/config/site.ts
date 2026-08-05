/**
 * METTCO — single source of truth for every editable fact on the site.
 *
 * FOUNDER: edit this file only. No component contains a phone number,
 * an email, a name, an NTN, or an image URL. Change it here, redeploy, done.
 *
 * Placeholders are wrapped in <ANGLE_BRACKETS>. Replace the string between
 * the quotes. Do not touch the key names.
 */

export const site = {
  name: "METTCO",
  legalName: "Micro Engineering, Tech and Trading Co.",
  tagline: "Everything your business buys. One accountable supplier.",
  founded: "2026",
  city: "Lahore",
  country: "Pakistan",
  url: "https://www.mettco.com.pk", // apex 308s to www — canonicals must match the served host

  // ---- Contact (replace placeholders with real values) ------------------
  // WhatsApp number in international format, digits only. e.g. 923001234567
  whatsappNumber: "<WHATSAPP_NUMBER>",
  // Phone number as dialable string. e.g. +923001234567
  phoneNumber: "<PHONE_NUMBER>",
  // Display version of the phone number. e.g. 0300 1234567
  phoneDisplay: "<PHONE_NUMBER>",
  email: "<EMAIL>",
  hours: "Mon–Sat, 9am–6pm PKT",

  // ---- Identity ---------------------------------------------------------
  founderName: "<FOUNDER_NAME>",
  ntn: "<NTN_NUMBER>",

  // Pre-filled WhatsApp message for every wa.me deep link on the site.
  whatsappMessage: "Hello METTCO, I'd like a quote for ",

  // ---- Feature flags ----------------------------------------------------
  // A-06 Boilers row: content is approved but ships hidden until the
  // founder confirms a boiler source. Flip to true to show the row.
  boilersLive: false,

  // Name the software-house partner on /technology only after the founder
  // confirms it may be public. Empty string = generic wording is used.
  softwarePartnerName: "",

  // ---- Senior advisor project lines (/services, B-01) -------------------
  // <FATHER_PROJECTS>: 2–3 factual lines. Each: type, city, year, role.
  // e.g. { type: "Commercial plaza construction", city: "Lahore", year: "2018", role: "Site supervision" }
  // Leave the array empty and the section renders without it.
  advisorProjects: [] as { type: string; city: string; year: string; role: string }[],
} as const;

// Every image on the site. Unsplash CDN, free for commercial use, no
// attribution required. All receive the same graphite duotone treatment
// in CSS so mixed sources read as one shoot. Alt text describes the
// product category — never implied ownership.
const u = (id: string, w: number, q = 70) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: {
    src: u("1553413077-190dd305871c", 1600, 60),
    alt: "Warehouse racking stacked with palletised goods in low light",
    width: 1600,
    height: 1067,
  },
  supply: {
    src: u("1586864387967-d02ef85d93e8", 1200),
    alt: "Stacked cardboard cartons ready for dispatch",
    width: 1200,
    height: 800,
  },
  services: {
    src: u("1541888946425-d81bb19240f5", 1200),
    alt: "Construction site structure at dusk",
    width: 1200,
    height: 800,
  },
  technology: {
    src: u("1558494949-ef010cbdcc31", 1200),
    alt: "Server racks and network cabling in low light",
    width: 1200,
    height: 800,
  },
  agriculture: {
    src: u("1500937386664-56d1dfef3854", 900),
    alt: "Harvest field at dusk",
    width: 900,
    height: 600,
  },
  banking: {
    src: u("1450101499163-c8848c66ca85", 900),
    alt: "Pen resting on printed documents",
    width: 900,
    height: 600,
  },
  industry: {
    src: u("1504328345606-18bbc8c9d7d1", 900),
    alt: "Industrial machinery on a plant floor",
    width: 900,
    height: 600,
  },
} as const;

export const waLink = () =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const telLink = () => `tel:${site.phoneNumber}`;
