// ── METTCO — Single source of truth for company content ──────────────

export const company = {
  name: "METTCO",
  legalName: "Micro Engineering, Tech and Trading Co",
  tagline: "Industrial sourcing, trading & engineering supply — engineered for reliability.",
  descriptionShort:
    "A B2B industrial trading, sourcing and engineering company connecting businesses with reliable products through trusted local and international supply networks.",
  country: "Pakistan",
  email: "info@mettco.com.pk",
  phone: "+92 313 9485808",
  address: "42-P Izmir Town, Lahore, Pakistan",
  domain: "mettco.com.pk",
};

export type NavChild = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About METTCO", href: "/about", desc: "Who we are and what drives us" },
      { label: "Why METTCO", href: "/why-mettco", desc: "The advantage of a reliable partner" },
      { label: "Our Process", href: "/process", desc: "How we source and deliver" },
      { label: "Vision", href: "/vision", desc: "Building a global supply company" },
    ],
  },
  {
    label: "What We Do",
    href: "/solutions",
    children: [
      { label: "Solutions", href: "/solutions", desc: "End-to-end procurement solutions" },
      { label: "Capabilities", href: "/capabilities", desc: "Sourcing, logistics & QA strength" },
      { label: "Global Sourcing", href: "/global-sourcing", desc: "Local & international networks" },
      { label: "Import & Export", href: "/import-export", desc: "Cross-border trade, handled" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const industries = [
  { name: "Manufacturing", slug: "manufacturing", icon: "Factory", image: "/images/industries/manufacturing.jpg", blurb: "Reliable MRO and production supply for plants running around the clock.", supplies: ["Bearings & power transmission", "Motors, drives & pumps", "MRO consumables & lubricants", "Machine spares & tooling"] },
  { name: "Textile Mills", slug: "textile", icon: "Shirt", image: "/images/industries/textile.jpg", blurb: "Spare parts, consumables and machinery components for spinning & weaving.", supplies: ["Ring frame & loom spares", "Rollers, aprons & cots", "Compressed air components", "Humidification & filtration"] },
  { name: "Food Processing", slug: "food-processing", icon: "UtensilsCrossed", image: "/images/industries/food-processing.jpg", blurb: "Hygienic, compliant equipment and packaging for food-grade operations.", supplies: ["Food-grade conveyor components", "Stainless fittings & valves", "Hygienic lubricants", "Primary & secondary packaging"] },
  { name: "Warehousing", slug: "warehousing", icon: "Warehouse", image: "/images/industries/warehousing.jpg", blurb: "Handling, storage and safety systems for high-throughput facilities.", supplies: ["Racking & storage systems", "Material handling equipment", "Dock & door hardware", "Safety barriers & signage"] },
  { name: "Logistics", slug: "logistics", icon: "Truck", image: "/images/industries/logistics.jpg", blurb: "Equipment and consumables that keep supply chains moving.", supplies: ["Strapping & load securing", "Pallets & containers", "Fleet consumables", "Warehouse packaging lines"] },
  { name: "Construction", slug: "construction", icon: "HardHat", image: "/images/industries/construction.jpg", blurb: "Engineering supplies, fasteners and site safety at project scale.", supplies: ["Fasteners & anchors", "Site safety & PPE", "Formwork accessories", "Power tools & consumables"] },
  { name: "Engineering Firms", slug: "engineering", icon: "DraftingCompass", image: "/images/industries/engineering.png", blurb: "Precision components and specialized technical sourcing.", supplies: ["Precision components to spec", "Instrumentation & measurement", "Custom machined parts", "Obsolete part re-sourcing"] },
  { name: "Packaging", slug: "packaging", icon: "Package", image: "/images/industries/packaging.png", blurb: "Industrial packaging materials at consistent quality and scale.", supplies: ["Stretch film & shrink wrap", "Strapping systems", "Corrugated & cartons", "Protective packaging"] },
  { name: "Agriculture", slug: "agriculture", icon: "Wheat", image: "/images/industries/agriculture.png", blurb: "Durable equipment and inputs for modern agribusiness.", supplies: ["Irrigation components", "Processing machinery spares", "Storage & handling", "Crop packaging materials"] },
];

export const productCategories = [
  { name: "Industrial Products", desc: "Bearings, motors, drives, pumps, valves and rotating equipment.", icon: "Cog" },
  { name: "Engineering Supplies", desc: "Fasteners, seals, tools and precision-engineered components.", icon: "Wrench" },
  { name: "Packaging Materials", desc: "Stretch film, strapping, cartons and protective packaging.", icon: "Package" },
  { name: "Safety Equipment", desc: "PPE, signage, fall protection and industrial safety systems.", icon: "HardHat" },
  { name: "Maintenance Products", desc: "Lubricants, adhesives, cleaning and MRO consumables.", icon: "Droplets" },
  { name: "Specialized Solutions", desc: "Custom sourcing for hard-to-find and technical requirements.", icon: "Target" },
];

export const capabilities = [
  { title: "Strategic Sourcing", desc: "Access to vetted local and international manufacturers, negotiated for price, quality and lead time." },
  { title: "Import & Export", desc: "End-to-end trade management — documentation, compliance, freight and customs coordination." },
  { title: "Quality Assurance", desc: "Inspection, certification and specification matching before anything reaches your floor." },
  { title: "Logistics & Delivery", desc: "Consolidated shipping and reliable delivery across regional and international lanes." },
  { title: "Technical Advisory", desc: "Engineering-led guidance to specify the right product for the right application." },
  { title: "Supplier Partnerships", desc: "Long-term strategic partnerships that de-risk your supply chain." },
];

export const processSteps = [
  { n: "01", title: "Understand", desc: "We map your specifications, volumes, standards and timelines in detail." },
  { n: "02", title: "Source", desc: "We identify and vet suppliers across trusted local and global networks." },
  { n: "03", title: "Verify", desc: "Quality checks, certification and specification matching before purchase." },
  { n: "04", title: "Deliver", desc: "Consolidated logistics, customs handling and on-time delivery to your site." },
  { n: "05", title: "Support", desc: "Ongoing partnership, reordering and continuous supply optimization." },
];

// Bento grid — 6 categories, mixed tile sizes, mapped to /public/images
export const bentoCategories = [
  {
    name: "Industrial Products",
    desc: "Bearings, motors, drives, pumps, valves and rotating equipment.",
    image: "/images/industrial-products.jpg",
    href: "/products",
    size: "large" as const,
  },
  {
    name: "Engineering Supplies",
    desc: "Fasteners, seals, tools and precision-engineered components.",
    image: "/images/engineering-supplies.png",
    href: "/products",
    size: "small" as const,
  },
  {
    name: "Packaging Materials",
    desc: "Stretch film, strapping, cartons and protective packaging.",
    image: "/images/packaging-materials.jpg",
    href: "/products",
    size: "small" as const,
  },
  {
    name: "Safety Equipment",
    desc: "PPE, signage, fall protection and industrial safety systems.",
    image: "/images/safety-equipment.png",
    href: "/products",
    size: "small" as const,
  },
  {
    name: "Maintenance Products",
    desc: "Lubricants, adhesives, cleaning and MRO consumables.",
    image: "/images/maintenance-products.jpg",
    href: "/products",
    size: "small" as const,
  },
  {
    name: "Specialized Solutions",
    desc: "Custom sourcing for hard-to-find and technical requirements.",
    image: "/images/specialized-solutions.png",
    href: "/products",
    size: "large" as const,
  },
];

// Why choose us — differentiators
export const differentiators = [
  {
    icon: "BadgeCheck",
    label: "VERIFIED NETWORK",
    title: "Verified supplier network",
    desc: "Every supplier is vetted for capability, certification and track record before a single unit ships.",
  },
  {
    icon: "Globe2",
    label: "DUAL SOURCING",
    title: "Local + international sourcing",
    desc: "Pakistan-based stock and relationships, backed by lanes into China, the Gulf and Europe — whichever wins on price and lead time.",
  },
  {
    icon: "Timer",
    label: "HARD-TO-FIND",
    title: "Speed on obsolete & rare parts",
    desc: "Discontinued bearing? Legacy drive? Our network specializes in parts other suppliers give up on.",
  },
  {
    icon: "UserCheck",
    label: "ONE CONTACT",
    title: "Single accountable contact",
    desc: "One person owns your order from RFQ to delivery — no call centers, no hand-offs, no excuses.",
  },
];

// Case studies — Problem → Solution → Result (anonymized placeholders)
export const caseStudies = [
  {
    sector: "Textile · Faisalabad",
    problem: "A spinning mill's imported ring-frame bearings were discontinued; the OEM quoted a 16-week lead time.",
    solution: "METTCO located certified equivalent stock through a verified Shanghai distributor and air-freighted the first batch.",
    result: "Line back at full capacity with zero specification compromise.",
    metric: "16 wks → 9 days",
    metricLabel: "lead time",
  },
  {
    sector: "Food Processing · Lahore",
    problem: "A processor was overpaying for food-grade conveyor components through a local middleman markup chain.",
    solution: "Direct sourcing from the original Taiwanese manufacturer with pre-shipment quality inspection.",
    result: "Same certified components, landed cost down substantially on an annual contract.",
    metric: "−23%",
    metricLabel: "landed cost",
  },
  {
    sector: "Construction · Islamabad",
    problem: "A contractor faced penalty clauses when a fastener shipment failed site QA two weeks before deadline.",
    solution: "Emergency re-source from verified local stock, third-party tested and delivered to site in batches.",
    result: "Deadline met; penalty avoided; contractor moved all MRO buying to METTCO.",
    metric: "72 hrs",
    metricLabel: "to first delivery",
  },
];

// FAQ
export const faqs = [
  {
    q: "What are your typical lead times?",
    a: "In-stock local items ship within 24–72 hours. International sourcing typically runs 2–6 weeks depending on origin and freight mode. Every quote states a committed lead time before you order — and we flag risk early if anything changes.",
  },
  {
    q: "Do you have minimum order quantities?",
    a: "No blanket MOQ. Some manufacturer-direct lines carry factory minimums, which we state clearly in the quote. For smaller requirements we consolidate orders to keep unit costs sensible.",
  },
  {
    q: "Which regions do you source from?",
    a: "Pakistan first, where quality and price compete. Beyond that: China, Taiwan, the Gulf, Turkey and Europe through vetted manufacturer and distributor relationships. We quote the origin so you always know what you're buying.",
  },
  {
    q: "How do you verify quality before shipment?",
    a: "Specification matching against your requirement, certificate verification (material certs, ISO, CE where applicable), and pre-shipment inspection — photographic or third-party depending on order value. Nothing ships that we wouldn't put our name on.",
  },
  {
    q: "What are your payment and delivery terms?",
    a: "Standard terms are advance or LC for international orders and negotiated credit terms for repeat clients. Delivery can be ex-warehouse, to-site, or full import handling with customs clearance — stated per quote.",
  },
];

// Trust strip claims (thin bar under hero)
export const trustPoints = [
  "Quotes within 24 hours",
  "Verified suppliers only",
  "Import & export licensed",
  "Pre-shipment inspection",
];

// ⚠️ PLACEHOLDER CREDIBILITY FIGURES — replace with real numbers before
// marketing pushes. Each slot: years operating / suppliers vetted /
// orders fulfilled / sectors served.
export const stats = [
  { value: "3+", label: "Years operating" }, // TODO: real founding year math
  { value: "40+", label: "Suppliers vetted" }, // TODO: real count
  { value: "150+", label: "Orders fulfilled" }, // TODO: real count
  { value: "9", label: "Sectors served" },
];

// ⚠️ PLACEHOLDER PARTNER/ACCREDITATION WORDMARKS — replace labels with real
// client names, chamber memberships or certifications as they're secured.
export const partnerSlots = [
  "Client Wordmark",
  "Client Wordmark",
  "Chamber Membership",
  "Certification",
  "Client Wordmark",
  "Supplier Partner",
];

// ⚠️ PLACEHOLDER TESTIMONIAL — swap for a real quote when available.
export const testimonial = {
  quote:
    "They found a discontinued drive coupling that three other suppliers told us was impossible. It was on our floor in twelve days, with certificates. METTCO is now our first call for anything hard to find.",
  name: "Procurement Manager",
  role: "Plant Operations",
  company: "Textile group, Punjab",
};
