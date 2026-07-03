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
  { name: "Manufacturing", slug: "manufacturing", blurb: "Reliable MRO and production supply for plants running around the clock." },
  { name: "Textile Mills", slug: "textile", blurb: "Spare parts, consumables and machinery components for spinning & weaving." },
  { name: "Food Processing", slug: "food-processing", blurb: "Hygienic, compliant equipment and packaging for food-grade operations." },
  { name: "Warehousing", slug: "warehousing", blurb: "Handling, storage and safety systems for high-throughput facilities." },
  { name: "Logistics", slug: "logistics", blurb: "Equipment and consumables that keep supply chains moving." },
  { name: "Construction", slug: "construction", blurb: "Engineering supplies, fasteners and site safety at project scale." },
  { name: "Engineering Firms", slug: "engineering", blurb: "Precision components and specialized technical sourcing." },
  { name: "Pharmaceutical", slug: "pharmaceutical", blurb: "Cleanroom-ready equipment and validated material supply." },
  { name: "Packaging", slug: "packaging", blurb: "Industrial packaging materials at consistent quality and scale." },
  { name: "Agriculture", slug: "agriculture", blurb: "Durable equipment and inputs for modern agribusiness." },
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

export const stats = [
  { value: "10+", label: "Industrial sectors served" },
  { value: "6", label: "Core product categories" },
  { value: "2-Way", label: "Import & export capability" },
  { value: "24/7", label: "Sourcing coordination" },
];
