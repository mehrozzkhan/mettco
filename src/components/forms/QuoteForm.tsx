"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { company, industries, productCategories } from "@/lib/site";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full rounded-xl border border-line bg-ink-800 px-4 py-3.5 text-sm text-navy placeholder:text-steel-lighter transition-colors duration-200 focus:border-azure focus:outline-none focus:ring-2 focus:ring-azure/20";

const labelCls = "mb-2 block text-sm font-medium text-navy";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const subject = compact
      ? `Website inquiry from ${data.get("name")}`
      : `Quote request — ${data.get("category")} — ${data.get("companyName")}`;

    const lines = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("companyName") ?? "-"}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") ?? "-"}`,
      compact ? null : `Industry: ${data.get("industry")}`,
      compact ? null : `Product category: ${data.get("category")}`,
      compact ? null : `Quantity / volume: ${data.get("quantity") ?? "-"}`,
      "",
      "Requirement:",
      String(data.get("message") ?? ""),
    ].filter((l) => l !== null);

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-ink-800 p-10 text-center md:p-14">
        <CheckCircle2 className="mx-auto h-12 w-12 text-azure" aria-hidden />
        <h3 className="mt-5 text-2xl font-semibold">Almost there</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-steel-light">
          Your email app should have opened with your request pre-filled — just
          press send. If it didn&rsquo;t, email us directly at{" "}
          <a href={`mailto:${company.email}`} className="font-medium text-azure">
            {company.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 cursor-pointer text-sm font-medium text-azure hover:underline"
        >
          Fill the form again
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-ink-800 p-8 md:p-12"
      noValidate={false}
    >
      <div className={cn("grid gap-6", !compact && "md:grid-cols-2")}>
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name <span className="text-azure">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="companyName" className={labelCls}>
            Company {!compact && <span className="text-azure">*</span>}
          </label>
          <input id="companyName" name="companyName" required={!compact} autoComplete="organization" placeholder="Company name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Work email <span className="text-azure">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+92 300 0000000" className={inputCls} />
        </div>

        {!compact && (
          <>
            <div>
              <label htmlFor="industry" className={labelCls}>Industry</label>
              <select id="industry" name="industry" className={inputCls} defaultValue="">
                <option value="" disabled>Select your industry</option>
                {industries.map((i) => (
                  <option key={i.slug} value={i.name}>{i.name}</option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className={labelCls}>
                Product category <span className="text-azure">*</span>
              </label>
              <select id="category" name="category" required className={inputCls} defaultValue="">
                <option value="" disabled>Select a category</option>
                {productCategories.map((c) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
                <option value="Not sure">Not sure — advise me</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="quantity" className={labelCls}>Quantity / volume</label>
              <input id="quantity" name="quantity" placeholder="e.g. 500 units monthly, one-time order of 2 tons…" className={inputCls} />
            </div>
          </>
        )}

        <div className={cn(!compact && "md:col-span-2")}>
          <label htmlFor="message" className={labelCls}>
            {compact ? "Message" : "Requirement details"} <span className="text-azure">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={compact ? "How can we help?" : "Describe the product, specification, standards, timeline — as much detail as you have."}
            className={cn(inputCls, "resize-y")}
          />
          <p className="mt-2 text-xs text-steel-light">
            Attachments? Email specs and drawings directly to {company.email}.
          </p>
        </div>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-azure px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:bg-azure-dark hover:shadow-elevated md:w-auto"
      >
        {compact ? "Send message" : "Submit quote request"}
        <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      </button>
    </form>
  );
}
