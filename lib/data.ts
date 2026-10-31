/** All personal content lives here. Sourced from Javed's CV, experience letter and GitHub profile. Edit values here, not in components. */

/** Production URL. Set NEXT_PUBLIC_SITE_URL once a custom domain is live; on Vercel the project URL is used automatically. */
const domain =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Javed Yasin",
  role: "Full Stack Developer",
  location: "Pakistan",
  domain: domain.replace(/\/$/, ""),
  email: "javedyasin396@gmail.com",
  /** International digits only. Empty string hides WhatsApp everywhere. */
  whatsapp: "923079341188",
  whatsappMessage: "Hi Javed, I found your portfolio and would like to talk.",
  github: "https://github.com/javedyasin396-ai",
  linkedin: "https://www.linkedin.com/in/javed-yasin-9170621a8",
  upwork: "https://www.upwork.com/freelancers/~01ba557eb80abf554b",
  x: "https://x.com/JavedDeveloper",
  /** Where the contact form posts. FormSubmit emails messages to the address after a one-time activation. */
  formEndpoint:
    process.env.NEXT_PUBLIC_FORM_ENDPOINT ||
    "https://formsubmit.co/ajax/javedyasin396@gmail.com",
  title: "Javed Yasin | Full Stack Developer (Python, Django, React)",
  description:
    "Javed Yasin is a full stack developer from Pakistan with 3+ years of experience building websites and web applications with React and Django. See his projects, research and get in touch.",
  intro:
    "I'm a full stack developer from Pakistan. I build websites and web applications with React and Django, from the pages you see to the database behind them.",
  about: [
    "I've spent the last three years building web applications. At Itians Company I worked as a full stack developer on Django back ends, REST APIs and React front ends, and alongside that I built projects of my own.",
    "I have a master's degree in computer science from the University of Okara, where my thesis used an ant colony optimization algorithm to identify fake news. I've also published research on detecting monkeypox with deep learning.",
    "I enjoy turning a rough idea into a site or app that is simple to use and easy to maintain. I'm open to freelance projects and full-time roles. If you have something in mind, I'd be happy to hear about it.",
  ],
  facts: [
    { label: "Based in", value: "Pakistan" },
    { label: "Main stack", value: "React, Django, Python, JavaScript" },
    { label: "Education", value: "MSCS, University of Okara" },
    { label: "Languages", value: "Urdu and Punjabi (native), English (B2)" },
    { label: "Availability", value: "Freelance and full-time" },
  ],
  /** Short facts shown under the hero. Each one is backed by the CV or experience letter. */
  highlights: [
    { value: "3+ years", label: "building web apps" },
    { value: "MSCS", label: "Computer Science" },
    { value: "6", label: "projects below" },
    { value: "1", label: "published paper" },
  ],
};

export function whatsappUrl(): string | null {
  const digits = site.whatsapp.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}?text=${encodeURIComponent(site.whatsappMessage)}` : null;
}

export type Project = {
  title: string;
  description: string;
  category: "Full Stack" | "Frontend" | "Backend" | "Automation";
  stack: string[];
  live?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A task manager with a Django REST Framework API and a React front end. Users sign up, add tasks with a priority and due date, search and filter them, and see a summary.",
    category: "Full Stack",
    stack: ["Django", "REST Framework", "React", "Vite", "SQLite"],
  },
  {
    title: "ClientDesk",
    description:
      "A Django app for freelancers to manage clients and invoices. It supports line items, a dashboard of paid and overdue amounts, status filters and CSV export.",
    category: "Full Stack",
    stack: ["Python", "Django", "Bootstrap", "SQLite"],
  },
  {
    title: "Nexora",
    description:
      "A landing page for a customer support SaaS product, built with React and Vite. It has features, pricing and FAQ sections and works on phones.",
    category: "Frontend",
    stack: ["React", "Vite", "CSS"],
    live: "https://nexora-ai-support.netlify.app/",
    repo: "https://github.com/javedyasin396-ai/nexora-ai-saas-landing",
    image: "/projects/nexora.jpg",
  },
  {
    title: "Django Lead Management System",
    description:
      "A Django app for collecting and managing leads. It sends email notifications, uses the Django admin and can export leads to CSV.",
    category: "Backend",
    stack: ["Python", "Django"],
    repo: "https://github.com/javedyasin396-ai/Django-lead-management-system",
    image: "/projects/django-leads.png",
  },
  {
    title: "AI Lead Automation",
    description:
      "A Zapier workflow that captures leads from a Google Form, analyses each message with AI, sorts the lead into a category and sends an automatic reply by email.",
    category: "Automation",
    stack: ["Zapier", "Google Forms", "Google Sheets", "AI"],
    repo: "https://github.com/javedyasin396-ai/ai-lead-automation-zapier",
  },
  {
    title: "To-do App",
    description:
      "A to-do list with a built-in calculator and calendar, written in plain JavaScript.",
    category: "Frontend",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/javedyasin396-ai/todo-app",
  },
];

export const skillGroups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "Vite", "Responsive design"] },
  { title: "Backend", skills: ["Python", "Django", "REST APIs", "SQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "GitLab", "Docker", "Linux / Bash"] },
  { title: "Data and automation", skills: ["Data analysis", "Machine learning", "Deep learning", "Zapier"] },
];

export type Role = { period: string; title: string; place: string; points: string[] };

export const experience: Role[] = [
  {
    period: "Mar 2023 – Mar 2026",
    title: "Full Stack Developer (Django & React.js)",
    place: "Itians Company, Pakistan",
    points: [
      "Built and maintained web applications with Python, Django, React.js and JavaScript.",
      "Developed REST APIs and connected them to the front end.",
      "Worked with application databases and followed clean-code practices.",
    ],
  },
  {
    period: "Feb 2023 – Apr 2023",
    title: "Data Science Intern",
    place: "Programmer Force, Lahore",
    points: [
      "Supported data analysis and modelling tasks using Python and SQL.",
      "Gained practical exposure to machine-learning workflows.",
    ],
  },
  {
    period: "Jun 2021 – Dec 2021",
    title: "Database Trainee Officer",
    place: "Digital World Pakistan (DWP Group)",
    points: ["Assisted with data validation, database structuring and routine database operations."],
  },
];

export const education = [
  {
    period: "Oct 2020 – Sep 2023",
    title: "MSCS, Computer Science",
    place: "University of Okara",
    note: "Thesis: A Novel Technique to Identify Fake News by Ant Colony Optimization Algorithm",
  },
  {
    period: "2015 – 2019",
    title: "BSCS, Computer Science",
    place: "Government College University Faisalabad, Sahiwal Campus",
  },
];

export const research = [
  {
    kind: "Peer-reviewed publication",
    title: "Monkeypox Virus Detection with Deep Learning",
    detail: "Computational Visual Media, 2024",
  },
  {
    kind: "Master's thesis",
    title: "A Novel Technique to Identify Fake News by Ant Colony Optimization Algorithm",
    detail: "University of Okara",
  },
  {
    kind: "International programme",
    title: "DigiCamp, AGH University of Science and Technology, Kraków, Poland",
    detail: "Mar 2022 – Aug 2022 · Selected participant and research analyst",
  },
];

export const training = [
  { title: "E-Rozgar Freelancing Technical Course", detail: "Apr 2020 – Jul 2020" },
  { title: "Computer Application & Office Professional Course", detail: "Punjab Vocational Training Council · Aug 2016" },
  { title: "Winner Scholarship", detail: "University of Okara" },
  { title: "Registered Student Member", detail: "Computer Society of Pakistan, NUST SEECS Chapter" },
];

export const services = [
  { title: "Websites", text: "Responsive business and portfolio websites that load quickly and look right on phones.", color: "indigo" },
  { title: "Web applications", text: "Django back ends with a React or template-based front end, including login, forms and admin pages.", color: "pink" },
  { title: "APIs", text: "REST APIs for your own apps, and connecting your site to other services.", color: "amber" },
  { title: "Fixes and new features", text: "Bugs, slow pages and layout problems on an existing project, or a new feature added to it.", color: "emerald" },
] as const;
