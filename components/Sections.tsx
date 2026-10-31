import { education, experience, research, services, site, skillGroups, training } from "@/lib/data";
import { ApiIcon, AppIcon, AwardIcon, BookIcon, BriefcaseIcon, CapIcon, GlobeIcon, WrenchIcon } from "./Icons";

export function SectionHeading({ id, kicker, title, text }: { id: string; kicker: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="inline-block rounded-full bg-pink-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-pink-700">{kicker}</p>
      <h2 id={id} className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-base text-slate-600 sm:text-lg">{text}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="section">
      <SectionHeading id="about-h" kicker="About" title="A little about me" />
      <div className="grid items-start gap-8 md:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {site.about.map((p) => <p key={p}>{p}</p>)}
        </div>
        <dl className="card divide-y divide-slate-100 overflow-hidden border-indigo-100! bg-indigo-50/60!">
          {site.facts.map((f) => (
            <div key={f.label} className="px-6 py-4">
              <dt className="text-xs font-bold uppercase tracking-wider text-indigo-600">{f.label}</dt>
              <dd className="mt-0.5 font-medium text-slate-800">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const tone = {
  indigo: { box: "hover:border-indigo-300", icon: "bg-indigo-100 text-indigo-700", Icon: GlobeIcon },
  pink: { box: "hover:border-pink-300", icon: "bg-pink-100 text-pink-700", Icon: AppIcon },
  amber: { box: "hover:border-amber-300", icon: "bg-amber-100 text-amber-700", Icon: ApiIcon },
  emerald: { box: "hover:border-emerald-300", icon: "bg-emerald-100 text-emerald-700", Icon: WrenchIcon },
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-h" className="bg-slate-50">
      <div className="section">
        <SectionHeading id="services-h" kicker="What I do" title="How I can help" text="From a single landing page to a full web application with its own API." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const t = tone[s.color];
            return (
              <article key={s.title} className={`card p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg ${t.box}`}>
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${t.icon}`}><t.Icon /></span>
                <h3 className="mt-5 text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-slate-600">{s.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const chip = ["bg-indigo-50 text-indigo-700 ring-indigo-100", "bg-pink-50 text-pink-700 ring-pink-100", "bg-amber-50 text-amber-800 ring-amber-100", "bg-emerald-50 text-emerald-700 ring-emerald-100"];
const bar = ["bg-indigo-500", "bg-pink-500", "bg-amber-400", "bg-emerald-500"];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-h" className="section">
      <SectionHeading id="skills-h" kicker="Skills" title="Tools I work with" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <div key={g.title} className="card relative overflow-hidden p-6">
            <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${bar[i % bar.length]}`} />
            <h3 className="text-lg font-bold text-ink">{g.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li key={s} className={`rounded-full px-3 py-1.5 text-sm font-semibold ring-1 ${chip[i % chip.length]}`}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline({ heading, Icon, color, items }: {
  heading: string;
  Icon: typeof BriefcaseIcon;
  color: "pink" | "amber";
  items: { period: string; title: string; place: string; points?: string[]; note?: string }[];
}) {
  const dot = color === "pink" ? "bg-pink-500" : "bg-amber-400";
  const date = color === "pink" ? "text-pink-700" : "text-amber-700";
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-ink">
        <span className={`grid h-10 w-10 place-items-center rounded-xl text-white ${dot}`}><Icon /></span>
        {heading}
      </h3>
      <ol className="space-y-5 border-l-2 border-indigo-100 pl-6">
        {items.map((e) => (
          <li key={e.title + e.period} className="card relative p-5 sm:p-6">
            <span aria-hidden="true" className={`absolute -left-[1.95rem] top-7 h-3.5 w-3.5 rounded-full ring-4 ring-white ${dot}`} />
            <p className={`text-sm font-bold ${date}`}>{e.period}</p>
            <h4 className="mt-1 text-lg font-bold text-ink">{e.title}</h4>
            <p className="text-slate-500">{e.place}</p>
            {e.note && <p className="mt-2 text-sm text-slate-600">{e.note}</p>}
            {e.points && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600 marker:text-indigo-300">
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="bg-gradient-to-b from-white to-indigo-50/70">
      <div className="section">
        <SectionHeading id="exp-h" kicker="Experience" title="Work and education" />
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <Timeline heading="Work" Icon={BriefcaseIcon} color="pink" items={experience} />
          <Timeline heading="Education" Icon={CapIcon} color="amber" items={education} />
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" aria-labelledby="research-h" className="section">
      <SectionHeading id="research-h" kicker="Research" title="Research and credentials" />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-4">
          {research.map((r) => (
            <li key={r.title} className="card flex gap-4 p-5 sm:p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-indigo-100 text-indigo-700"><BookIcon className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-pink-700">{r.kind}</p>
                <h3 className="mt-1 font-bold text-ink sm:text-lg">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{r.detail}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="card border-amber-200! bg-amber-50/60! p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-ink">
            <AwardIcon className="h-5 w-5 text-amber-600" /> Training and awards
          </h3>
          <ul className="mt-4 divide-y divide-amber-200/70">
            {training.map((t) => (
              <li key={t.title} className="py-3 first:pt-0 last:pb-0">
                <p className="font-semibold text-slate-800">{t.title}</p>
                <p className="text-sm text-slate-600">{t.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
