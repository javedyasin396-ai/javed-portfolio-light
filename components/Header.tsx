"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Highlight the link of the section currently in view.
  useEffect(() => {
    const sections = ["#top", ...links.map((l) => l.href)].map((h) => document.querySelector(h)).filter((s): s is Element => !!s);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id === "top" ? "" : `#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${scrolled ? "border-slate-200 shadow-sm" : "border-transparent"}`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-lg font-extrabold tracking-tight" onClick={() => setOpen(false)}>
          <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-sm text-white">
            JY
          </span>
          <span>
            Javed<span className="gradient-text">Yasin</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${active === l.href ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary hidden min-h-10! px-5! py-2! text-sm! lg:inline-flex">
          Hire me
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl text-indigo-900 hover:bg-indigo-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      <div id="mobile-menu" hidden={!open} className="border-t border-slate-100 bg-white shadow-lg lg:hidden">
        <ul className="mx-auto grid max-w-6xl gap-1 px-4 py-3 sm:grid-cols-2 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.href ? "true" : undefined}
                className={`block rounded-xl px-4 py-3 font-medium ${active === l.href ? "bg-indigo-50 text-indigo-700" : "text-slate-800 hover:bg-slate-50"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2 sm:col-span-2">
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
              Hire me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
