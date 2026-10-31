import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, Services, Skills, Experience, Research } from "@/components/Sections";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { socials } from "@/components/socials";
import { site } from "@/lib/data";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <a href="#top" className="text-lg font-extrabold tracking-tight">
              Javed<span className="gradient-text">Yasin</span>
            </a>
            <p className="mt-1 text-sm text-slate-600">{site.role} · {site.location}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-1 gap-y-1 text-sm font-medium">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-10 items-center rounded-full px-3 text-slate-600 hover:bg-slate-100 hover:text-indigo-700">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex gap-2" aria-label="Social links">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="grid h-10 w-10 place-items-center rounded-full text-slate-600 ring-1 ring-slate-200 transition hover:bg-indigo-600 hover:text-white hover:ring-indigo-600">
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="border-t border-slate-100 py-5 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript and Tailwind CSS.
        </p>
      </footer>
    </>
  );
}
