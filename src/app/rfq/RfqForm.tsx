"use client";

import { useState } from "react";
import { site, waLink } from "@/config/site";

export type Division = "supply" | "services" | "technology";

/**
 * 3-step guided RFQ. Step 1: division. Step 2: division-specific fields.
 * Step 3: contact + submit. WhatsApp fallback persists on every step.
 * Client component isolated to this route — it ships no JS to any other page.
 */

const divisions: { id: Division; code: string; label: string; hint: string }[] = [
  { id: "supply", code: "A", label: "Supply", hint: "Products: office, industrial, safety, MRO" },
  { id: "services", code: "B", label: "Services", hint: "Construction, facility, trade work" },
  { id: "technology", code: "C", label: "Technology", hint: "IT, hardware, software" },
];

const step2Config: Record<
  Division,
  { categoryLabel: string; categories: string[]; detailLabel: string; detailPlaceholder: string }
> = {
  supply: {
    categoryLabel: "Category",
    categories: [
      "A-01 Office & general order supplies",
      "A-02 Industrial products",
      "A-03 Engineering supplies",
      "A-04 Safety equipment",
      "A-05 Maintenance products",
      "Mixed / not sure",
    ],
    detailLabel: "Items and quantities",
    detailPlaceholder: "e.g. A4 paper 50 reams, toner HP 26A x4, ballpoints 10 boxes",
  },
  services: {
    categoryLabel: "Type of work",
    categories: [
      "B-01 Construction & renovation",
      "B-02 Facility services",
      "B-03 Trade services (plumbing, electrical, carpentry, AC)",
      "Mixed / not sure",
    ],
    detailLabel: "Describe the job",
    detailPlaceholder: "e.g. Repaint two-storey branch exterior; repair boundary wall",
  },
  technology: {
    categoryLabel: "Type of project",
    categories: [
      "C-01 IT services & support",
      "C-02 Hardware supply & installation",
      "C-03 Software development",
      "Mixed / not sure",
    ],
    detailLabel: "Describe the requirement",
    detailPlaceholder: "e.g. Company website with product catalogue; 5 workstations networked",
  },
};

const inputCls =
  "w-full border border-line bg-graphite-800 px-4 py-3 text-base text-paper placeholder:text-paper-dim/60 focus:border-signal focus:outline-none";
const labelCls = "mb-2 block font-mono text-2xs uppercase tracking-widest text-paper-dim";

export default function RfqForm({ initialDivision }: { initialDivision?: Division }) {
  const [step, setStep] = useState(initialDivision ? 2 : 1);
  const [division, setDivision] = useState<Division | undefined>(initialDivision);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [fields, setFields] = useState({
    category: "",
    detail: "",
    location: "",
    timeline: "",
    name: "",
    company: "",
    phone: "",
    email: "",
    website: "", // honeypot — humans never see or fill this
  });

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const canLeaveStep2 = fields.detail.trim().length > 0;
  const canSubmit = fields.name.trim().length > 0 && fields.phone.trim().length >= 7;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!division || !canSubmit || status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ division, ...fields }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-line bg-graphite-800 p-8" role="status">
        <p className="font-mono text-sm text-signal">Received</p>
        <h2 className="mt-3 font-display text-2xl uppercase tracking-wide">
          Your requirement is in.
        </h2>
        <p className="mt-3 max-w-[50ch] text-sm leading-relaxed text-paper-dim">
          We reply with a quote within 24 hours, on the phone number you gave. If anything is
          unclear we call first.
        </p>
      </div>
    );
  }

  const cfg = division ? step2Config[division] : null;

  return (
    <form onSubmit={submit} noValidate>
      {/* Step indicator */}
      <ol className="flex gap-2 font-mono text-2xs uppercase tracking-widest" aria-label="Steps">
        {["Division", "Requirement", "Contact"].map((s, i) => (
          <li
            key={s}
            aria-current={step === i + 1 ? "step" : undefined}
            className={`border px-3 py-1.5 ${
              step === i + 1
                ? "border-signal text-signal"
                : step > i + 1
                  ? "border-line text-paper"
                  : "border-line text-paper-dim"
            }`}
          >
            0{i + 1} {s}
          </li>
        ))}
      </ol>

      {/* Step 1: division selector */}
      {step === 1 && (
        <fieldset className="mt-8">
          <legend className={labelCls}>What is the requirement for?</legend>
          <div className="grid gap-3">
            {divisions.map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => {
                  setDivision(d.id);
                  setFields((f) => ({ ...f, category: "" }));
                  setStep(2);
                }}
                className="group flex items-baseline gap-4 border border-line bg-graphite-800 px-5 py-4 text-left transition-colors hover:border-signal"
              >
                <span className="font-mono text-sm text-signal">{d.code}</span>
                <span>
                  <span className="block font-display text-xl uppercase tracking-wide group-hover:text-signal">
                    {d.label}
                  </span>
                  <span className="mt-1 block text-sm text-paper-dim">{d.hint}</span>
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {/* Step 2: division-adapted requirement */}
      {step === 2 && cfg && (
        <div className="mt-8 space-y-5">
          <div>
            <label htmlFor="rfq-category" className={labelCls}>
              {cfg.categoryLabel}
            </label>
            <select id="rfq-category" value={fields.category} onChange={set("category")} className={inputCls}>
              <option value="">Select…</option>
              {cfg.categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="rfq-detail" className={labelCls}>
              {cfg.detailLabel} <span className="text-signal">*</span>
            </label>
            <textarea
              id="rfq-detail"
              required
              rows={4}
              value={fields.detail}
              onChange={set("detail")}
              placeholder={cfg.detailPlaceholder}
              className={inputCls}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rfq-location" className={labelCls}>
                Delivery / site location
              </label>
              <input
                id="rfq-location"
                type="text"
                value={fields.location}
                onChange={set("location")}
                placeholder="e.g. Gulberg, Lahore"
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="rfq-timeline" className={labelCls}>
                Needed by
              </label>
              <input
                id="rfq-timeline"
                type="text"
                value={fields.timeline}
                onChange={set("timeline")}
                placeholder="e.g. within two weeks"
                className={inputCls}
              />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(1)} className="btn-ghost">
              Back
            </button>
            <button
              type="button"
              disabled={!canLeaveStep2}
              onClick={() => canLeaveStep2 && setStep(3)}
              className="btn-signal disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 3: contact + submit */}
      {step === 3 && (
        <div className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="rfq-name" className={labelCls}>
                Your name <span className="text-signal">*</span>
              </label>
              <input id="rfq-name" type="text" required autoComplete="name" value={fields.name} onChange={set("name")} className={inputCls} />
            </div>
            <div>
              <label htmlFor="rfq-company" className={labelCls}>
                Company
              </label>
              <input id="rfq-company" type="text" autoComplete="organization" value={fields.company} onChange={set("company")} className={inputCls} />
            </div>
            <div>
              <label htmlFor="rfq-phone" className={labelCls}>
                Phone <span className="text-signal">*</span>
              </label>
              <input id="rfq-phone" type="tel" required autoComplete="tel" value={fields.phone} onChange={set("phone")} className={inputCls} />
            </div>
            <div>
              <label htmlFor="rfq-email" className={labelCls}>
                Email
              </label>
              <input id="rfq-email" type="email" autoComplete="email" value={fields.email} onChange={set("email")} className={inputCls} />
            </div>
          </div>

          {/* Honeypot: hidden from humans, bots fill it, API drops it. */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="rfq-website">Website</label>
            <input id="rfq-website" type="text" tabIndex={-1} autoComplete="off" value={fields.website} onChange={set("website")} />
          </div>

          {status === "error" && (
            <p role="alert" className="border border-signal/50 bg-graphite-800 p-4 text-sm text-paper">
              That didn&apos;t go through. Try again, or send the requirement on WhatsApp below.
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(2)} className="btn-ghost">
              Back
            </button>
            <button
              type="submit"
              disabled={!canSubmit || status === "sending"}
              className="btn-signal disabled:cursor-not-allowed disabled:opacity-40"
            >
              {status === "sending" ? "Sending…" : "Send requirement"}
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp fallback — persistent on every step. */}
      <p className="mt-10 border-t border-line pt-6 text-sm text-paper-dim">
        Prefer WhatsApp?{" "}
        <a href={waLink()} className="text-paper underline decoration-line underline-offset-4 hover:text-signal">
          Send your requirement directly
        </a>{" "}
        or call {site.phoneDisplay}.
      </p>
    </form>
  );
}
