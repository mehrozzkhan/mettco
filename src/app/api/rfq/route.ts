import { NextResponse } from "next/server";
import { site } from "@/config/site";

/**
 * RFQ submissions.
 *
 * Delivery: if RESEND_API_KEY is set (Vercel env var), the submission is
 * emailed to RFQ_TO_EMAIL (falls back to site.email). Without a key, the
 * submission is logged — visible in Vercel > Project > Logs — so nothing
 * is ever silently lost while email is being set up. Setup steps in README.
 */

const DIVISIONS = new Set(["supply", "services", "technology"]);
const MAX = 2000;

type Body = Record<string, unknown>;

const str = (v: unknown, max = MAX) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  // Honeypot: real users never fill "website". Return 200 so bots move on.
  if (str(body.website)) return NextResponse.json({ ok: true });

  const division = str(body.division, 20);
  const name = str(body.name, 120);
  const phone = str(body.phone, 40);
  const detail = str(body.detail);

  if (!DIVISIONS.has(division) || !name || phone.length < 7 || !detail) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const submission = {
    division,
    category: str(body.category, 120),
    detail,
    location: str(body.location, 200),
    timeline: str(body.timeline, 200),
    name,
    company: str(body.company, 200),
    phone,
    email: str(body.email, 200),
    receivedAt: new Date().toISOString(),
  };

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const to = process.env.RFQ_TO_EMAIL || site.email;
    const text = Object.entries(submission)
      .map(([k, v]) => `${k}: ${v || "—"}`)
      .join("\n");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.RFQ_FROM_EMAIL || "METTCO RFQ <onboarding@resend.dev>",
        to: [to],
        subject: `RFQ — ${division} — ${name}`,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[rfq] email send failed", res.status, await res.text());
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } else {
    // No email configured yet: log it so it appears in Vercel logs.
    console.log("[rfq] submission", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true });
}
