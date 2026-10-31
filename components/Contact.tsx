"use client";

import { FormEvent, useState } from "react";
import { site, whatsappUrl } from "@/lib/data";
import { socials } from "./socials";
import { MailIcon, WhatsAppIcon } from "./Icons";
import { SectionHeading } from "./Sections";

type Status = "idle" | "sending" | "success" | "error";
type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldClass = (bad: boolean) =>
  `mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:outline-none focus:ring-4 ${bad ? "border-red-400 focus:border-red-500 focus:ring-red-100" : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-100"}`;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address, like you@example.com.";
  if (message.length < 10) errors.message = "Please write a message of at least 10 characters.";
  return errors;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const wa = whatsappUrl();

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // bot trap
    const found = validate(data);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== "false" && json.success !== false) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const describe = (f: Field) => (errors[f] ? `${f}-error` : undefined);
  const clear = (f: Field) => errors[f] && setErrors((prev) => ({ ...prev, [f]: undefined }));

  return (
    <section id="contact" aria-labelledby="contact-h" className="bg-slate-50">
      <div className="section">
        <SectionHeading id="contact-h" kicker="Contact" title="Let's work together" text="Have a project, a bug to fix or a role to discuss? Send a message and I'll reply by email." />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-600 to-pink-600 p-6 text-white shadow-xl shadow-indigo-600/20 sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <h3 className="text-2xl font-bold">Say hello</h3>
            <p className="mt-2 text-indigo-50">The fastest way to reach me is email or WhatsApp.</p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/20 transition hover:bg-white/20">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-indigo-700"><MailIcon /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-indigo-100">Email</span>
                    <span className="block break-words text-sm font-semibold sm:text-base">{site.email}</span>
                  </span>
                </a>
              </li>
              {wa && (
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/20 transition hover:bg-white/20">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-emerald-600"><WhatsAppIcon /></span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-indigo-100">WhatsApp</span>
                      <span className="block font-semibold">Chat with me<span className="sr-only"> (opens in a new tab)</span></span>
                    </span>
                  </a>
                </li>
              )}
            </ul>
            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-indigo-100">Find me online</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 transition hover:bg-white hover:text-indigo-700">
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
            <input type="hidden" name="_subject" value="New message from your portfolio website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-800">Name</label>
                <input id="name" name="name" required autoComplete="name" aria-invalid={!!errors.name} aria-describedby={describe("name")} onInput={() => clear("name")} className={fieldClass(!!errors.name)} placeholder="Your name" />
                {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-700">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-800">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" aria-invalid={!!errors.email} aria-describedby={describe("email")} onInput={() => clear("email")} className={fieldClass(!!errors.email)} placeholder="you@example.com" />
                {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-700">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-slate-800">Message</label>
              <textarea id="message" name="message" required minLength={10} rows={6} aria-invalid={!!errors.message} aria-describedby={describe("message")} onInput={() => clear("message")} className={fieldClass(!!errors.message)} placeholder="Tell me about your project" />
              {errors.message && <p id="message-error" className="mt-1.5 text-sm text-red-700">{errors.message}</p>}
            </div>
            <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:translate-y-0 disabled:opacity-60 sm:w-auto">
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <div role="status" aria-live="polite" className="text-sm font-medium empty:hidden">
              {status === "success" && <p className="rounded-xl bg-emerald-50 p-3 text-emerald-800 ring-1 ring-emerald-200">Thanks, your message was sent. I&apos;ll reply by email.</p>}
              {status === "error" && (
                <p className="rounded-xl bg-red-50 p-3 text-red-800 ring-1 ring-red-200">
                  Your message could not be sent. Please email me directly at{" "}
                  <a className="font-semibold underline" href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
