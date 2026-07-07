"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
} from "lucide-react";
import { company } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ── Data ─────────────────────────────────────────────────────────── */

const CATEGORIES: { name: string; subs: string[] }[] = [
  { name: "Industrial Products", subs: ["Bearings", "Motors & drives", "Pumps", "Valves & fittings", "Rotating equipment spares"] },
  { name: "Engineering Supplies", subs: ["Fasteners", "Seals & gaskets", "Hand & power tools", "Precision components"] },
  { name: "Packaging Materials", subs: ["Stretch film", "Strapping", "Cartons & corrugated", "Protective packaging"] },
  { name: "Safety Equipment", subs: ["PPE", "Fall protection", "Signage", "Site safety systems"] },
  { name: "Maintenance Products", subs: ["Lubricants", "Adhesives & sealants", "Cleaning & chemicals", "MRO consumables"] },
  { name: "Specialized Solutions", subs: ["Hard-to-find parts", "Obsolete part re-sourcing", "Custom machining", "Technical sourcing"] },
];

const LEAD_TIMES = ["Urgent — under 1 week", "2–4 weeks", "1–3 months", "Flexible"];

const STEPS = ["Category", "Specification", "Contact"] as const;

type Errors = Partial<Record<string, string>>;

const inputCls =
  "w-full rounded-xl border border-line bg-ink px-4 py-3.5 text-sm text-paper placeholder:text-steel-muted transition-colors duration-200 focus:border-azure focus:outline-none focus:ring-2 focus:ring-azure/20";
const labelCls = "mb-2 block text-sm font-medium text-paper";
const errCls = "mt-2 text-xs font-medium text-azure";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
        active
          ? "border-azure bg-azure/10 text-azure"
          : "border-line bg-ink text-steel-lighter hover:border-steel-muted hover:text-paper"
      )}
    >
      {children}
    </button>
  );
}

/* ── The guided RFQ flow ──────────────────────────────────────────── */

export function RFQBuilder() {
  const params = useSearchParams();
  const reduce = useReducedMotion();

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const [category, setCategory] = useState("");
  const [sub, setSub] = useState("");
  const [specs, setSpecs] = useState(params.get("need") ?? "");
  const [quantity, setQuantity] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [standards, setStandards] = useState("");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const subs = useMemo(
    () => CATEGORIES.find((c) => c.name === category)?.subs ?? [],
    [category]
  );

  const validate = (s: number): Errors => {
    const e: Errors = {};
    if (s === 0 && !category) e.category = "Pick a category so we route this to the right sourcing team.";
    if (s === 1 && specs.trim().length < 10)
      e.specs = "A line or two of detail gets you a sharper quote — part number, size, material, anything.";
    if (s === 2) {
      if (!name.trim()) e.name = "We need a name to address the quote to.";
      if (!companyName.trim()) e.companyName = "Company name goes on the quotation document.";
      if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "The quote is delivered by email — this one doesn't look complete.";
    }
    return e;
  };

  const next = () => {
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setDir(1);
      setStep((s) => Math.min(s + 1, 2));
    }
  };

  const back = () => {
    setErrors({});
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const summaryLines = [
    `Category: ${category}${sub ? ` — ${sub}` : ""}`,
    `Requirement: ${specs.trim()}`,
    `Quantity: ${quantity || "—"}`,
    `Lead time: ${leadTime || "—"}`,
    `Standards / certs: ${standards || "—"}`,
    "",
    `Name: ${name}`,
    `Company: ${companyName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
  ];

  const submit = () => {
    const e = validate(2);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `RFQ — ${category} — ${companyName}`
    )}&body=${encodeURIComponent(summaryLines.join("\n"))}`;
    setDone(true);
  };

  const waLink = `https://wa.me/${company.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `RFQ — ${category}${sub ? ` (${sub})` : ""}\n${specs.trim()}\nQty: ${quantity || "—"} · Lead time: ${leadTime || "—"}\n— ${name}, ${companyName}`
  )}`;

  /* Success state */
  if (done) {
    return (
      <div className="glass rounded-2xl p-10 text-center md:p-14">
        <CheckCircle2 className="mx-auto h-12 w-12 text-azure" aria-hidden />
        <h3 className="mt-5 text-2xl font-semibold text-paper">
          Your RFQ is on its way.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-steel-lighter">
          Your email client has the full request pre-filled — press send and
          it&rsquo;s with our sourcing team. You&rsquo;ll have a committed quote
          within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:border-azure hover:text-azure"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Send via WhatsApp instead
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:border-azure hover:text-azure"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {company.email}
          </a>
        </div>
      </div>
    );
  }

  const slide = {
    initial: reduce ? {} : { opacity: 0, x: 28 * dir },
    animate: { opacity: 1, x: 0 },
    exit: reduce ? {} : { opacity: 0, x: -28 * dir },
    transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="glass rounded-2xl p-8 md:p-12">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <p className="font-mono text-2xs font-medium uppercase tracking-[0.2em] text-blueprint">
            Step {String(step + 1).padStart(2, "0")} / 03
          </p>
          <p className="font-mono text-2xs font-medium uppercase tracking-[0.2em] text-steel-muted">
            {STEPS[step]}
          </p>
        </div>
        <div className="mt-4 flex gap-2" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={3} aria-label={`Step ${step + 1} of 3`}>
          {STEPS.map((s, i) => (
            <span key={s} className="h-1 flex-1 overflow-hidden rounded-full bg-line">
              <motion.span
                className="block h-full bg-azure"
                initial={false}
                animate={{ width: i <= step ? "100%" : "0%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {/* STEP 1 — category → subcategory */}
        {step === 0 && (
          <motion.div key="s0" {...slide}>
            <h3 className="text-xl font-semibold text-paper">
              What do you need sourced?
            </h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {CATEGORIES.map((c) => (
                <Chip
                  key={c.name}
                  active={category === c.name}
                  onClick={() => {
                    setCategory(c.name);
                    setSub("");
                    setErrors({});
                  }}
                >
                  {c.name}
                </Chip>
              ))}
            </div>
            {errors.category && <p className={errCls}>{errors.category}</p>}

            <AnimatePresence>
              {subs.length > 0 && (
                <motion.div
                  initial={reduce ? false : { opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={reduce ? undefined : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="mt-8 font-mono text-2xs font-medium uppercase tracking-[0.18em] text-steel-muted">
                    Narrow it down (optional)
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {subs.map((s) => (
                      <Chip key={s} active={sub === s} onClick={() => setSub(sub === s ? "" : s)}>
                        {s}
                      </Chip>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* STEP 2 — specification */}
        {step === 1 && (
          <motion.div key="s1" {...slide}>
            <h3 className="text-xl font-semibold text-paper">
              Describe the requirement.
            </h3>
            <div className="mt-6 space-y-6">
              <div>
                <label htmlFor="rfq-specs" className={labelCls}>
                  Specification <span className="text-azure">*</span>
                </label>
                <textarea
                  id="rfq-specs"
                  rows={4}
                  value={specs}
                  onChange={(e) => setSpecs(e.target.value)}
                  placeholder="Part numbers, dimensions, materials, drawings reference — as much as you have."
                  className={cn(inputCls, "resize-y")}
                  aria-invalid={!!errors.specs}
                />
                {errors.specs && <p className={errCls}>{errors.specs}</p>}
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="rfq-qty" className={labelCls}>Quantity / volume</label>
                  <input
                    id="rfq-qty"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 500 pcs, monthly"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="rfq-standards" className={labelCls}>Standards / certifications</label>
                  <input
                    id="rfq-standards"
                    value={standards}
                    onChange={(e) => setStandards(e.target.value)}
                    placeholder="e.g. ISO 9001, CE, material certs"
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <p className={labelCls}>Required lead time</p>
                <div className="flex flex-wrap gap-2.5">
                  {LEAD_TIMES.map((lt) => (
                    <Chip key={lt} active={leadTime === lt} onClick={() => setLeadTime(leadTime === lt ? "" : lt)}>
                      {lt}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 3 — contact + submit */}
        {step === 2 && (
          <motion.div key="s2" {...slide}>
            <h3 className="text-xl font-semibold text-paper">
              Where do we send the quote?
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="rfq-name" className={labelCls}>
                  Full name <span className="text-azure">*</span>
                </label>
                <input id="rfq-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" className={inputCls} aria-invalid={!!errors.name} />
                {errors.name && <p className={errCls}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="rfq-company" className={labelCls}>
                  Company <span className="text-azure">*</span>
                </label>
                <input id="rfq-company" value={companyName} onChange={(e) => setCompanyName(e.target.value)} autoComplete="organization" placeholder="Company name" className={inputCls} aria-invalid={!!errors.companyName} />
                {errors.companyName && <p className={errCls}>{errors.companyName}</p>}
              </div>
              <div>
                <label htmlFor="rfq-email" className={labelCls}>
                  Work email <span className="text-azure">*</span>
                </label>
                <input id="rfq-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@company.com" className={inputCls} aria-invalid={!!errors.email} />
                {errors.email && <p className={errCls}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="rfq-phone" className={labelCls}>Phone / WhatsApp</label>
                <input id="rfq-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" placeholder="+92 300 0000000" className={inputCls} />
              </div>
            </div>

            {/* Review summary */}
            <div className="mt-8 rounded-xl border border-line bg-ink p-5">
              <p className="font-mono text-2xs font-medium uppercase tracking-[0.18em] text-blueprint">
                Your request
              </p>
              <p className="mt-2 text-sm leading-relaxed text-steel-lighter">
                <span className="text-paper">{category}</span>
                {sub && <> · {sub}</>}
                {quantity && <> · {quantity}</>}
                {leadTime && <> · {leadTime}</>}
              </p>
              <p className="mt-1 line-clamp-2 text-sm text-steel-light">{specs}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nav */}
      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-steel-lighter transition-colors duration-200 hover:border-steel-muted hover:text-paper"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back
          </button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <button
            type="button"
            onClick={next}
            className="btn-shine group inline-flex cursor-pointer items-center gap-2 rounded-full bg-azure px-8 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-azure-dark hover:shadow-elevated"
          >
            Continue
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            className="btn-shine group inline-flex cursor-pointer items-center gap-2 rounded-full bg-azure px-8 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-azure-dark hover:shadow-elevated"
          >
            Submit RFQ
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
          </button>
        )}
      </div>
    </div>
  );
}
