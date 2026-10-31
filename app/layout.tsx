import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#ffffff", colorScheme: "light" };

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.domain }],
  creator: site.name,
  keywords: ["Javed Yasin", "Full Stack Developer", "Django developer", "React developer", "Python", "Pakistan", "Freelance web developer"],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_US",
    type: "profile",
    firstName: "Javed",
    lastName: "Yasin",
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, creator: "@JavedDeveloper" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.domain,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  knowsAbout: ["Python", "Django", "React", "JavaScript", "REST APIs"],
  image: `${site.domain}/javed.jpg`,
  sameAs: [site.github, site.linkedin, site.upwork, site.x],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Okara" },
    { "@type": "CollegeOrUniversity", name: "Government College University Faisalabad, Sahiwal Campus" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
