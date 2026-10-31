"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/data";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { SectionHeading } from "./Sections";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
const covers = ["from-indigo-500 to-purple-500", "from-pink-500 to-rose-500", "from-amber-400 to-orange-500", "from-emerald-500 to-teal-500"];
const count = (f: string) => (f === "All" ? projects.length : projects.filter((p) => p.category === f).length);

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const shown = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" aria-labelledby="projects-h" className="bg-slate-50">
      <div className="section">
        <SectionHeading id="projects-h" kicker="Projects" title="Things I've built" text="Full stack apps, front ends and automations. Source code is linked where the repository is public." />
        <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition ${filter === f ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-indigo-50 hover:text-indigo-700"}`}
            >
              {f}
              <span className={`rounded-full px-1.5 text-xs ${filter === f ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>{count(f)}</span>
            </button>
          ))}
        </div>
        <p className="sr-only" aria-live="polite">{`Showing ${shown.length} project${shown.length === 1 ? "" : "s"}`}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => {
            const i = projects.indexOf(p);
            return (
              <article key={p.title} className="card group flex flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`Screenshot of ${p.title}`}
                      fill
                      sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div aria-hidden="true" className={`flex h-full items-center justify-center bg-gradient-to-br ${covers[i % covers.length]}`}>
                      <span className="px-6 text-center text-2xl font-extrabold text-white drop-shadow sm:text-3xl">{p.title}</span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-pink-700 shadow-sm">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-slate-600">{p.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {p.stack.map((s) => (
                      <li key={s} className="rounded-md bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700">{s}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5 text-sm font-semibold">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-indigo-600 px-4 text-white transition hover:bg-indigo-700">
                        Live demo <ArrowUpRightIcon /><span className="sr-only"> of {p.title} (opens in a new tab)</span>
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50 hover:text-indigo-700">
                        <GitHubIcon className="h-4 w-4" /> Source code<span className="sr-only"> of {p.title} (opens in a new tab)</span>
                      </a>
                    )}
                    {!p.live && !p.repo && <p className="min-h-10 py-2 font-medium text-slate-500">Repository not public yet</p>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
