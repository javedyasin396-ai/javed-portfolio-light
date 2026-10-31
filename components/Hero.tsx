import Image from "next/image";
import { site, whatsappUrl } from "@/lib/data";
import { WhatsAppIcon } from "./Icons";
import { socials } from "./socials";

const techBadges = ["React", "Django", "Python", "JavaScript"];

export default function Hero() {
  const wa = whatsappUrl();
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <div aria-hidden="true" className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-indigo-200/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.25fr_1fr] md:pb-24 md:pt-20 lg:gap-16">
        <div className="text-center md:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to freelance and full-time work
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Javed Yasin</span>
            <span className="mt-3 block text-2xl font-bold text-slate-700 sm:text-3xl">Full Stack Developer</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg md:mx-0">{site.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a href="#projects" className="btn-primary">View my projects</a>
            <a href="#contact" className="btn-outline">Get in touch</a>
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <WhatsAppIcon /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </div>
          <ul className="mt-8 flex justify-center gap-3 md:justify-start" aria-label="Social links">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100 transition hover:-translate-y-0.5 hover:bg-indigo-600 hover:text-white">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-indigo-500 via-pink-500 to-amber-400 opacity-90" />
          <Image
            src="/javed.jpg"
            alt="Portrait of Javed Yasin"
            width={413}
            height={531}
            priority
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 288px"
            className="relative aspect-[413/531] w-full rounded-[1.75rem] border-4 border-white bg-white object-cover shadow-2xl"
          />
          <ul aria-label="Main technologies" className="absolute -bottom-5 left-1/2 flex w-max -translate-x-1/2 gap-1.5 rounded-full bg-white p-1.5 shadow-lg ring-1 ring-slate-200">
            {techBadges.map((t) => (
              <li key={t} className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-14 sm:px-6">
        <dl className="grid grid-cols-2 gap-3 rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200 backdrop-blur sm:grid-cols-4 sm:p-6">
          {site.highlights.map((h) => (
            <div key={h.label} className="flex flex-col-reverse items-center text-center">
              <dt className="text-sm text-slate-600">{h.label}</dt>
              <dd className="text-2xl font-extrabold text-indigo-700 sm:text-3xl">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
