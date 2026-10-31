type P = { className?: string };
const base = { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export const GitHubIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedInIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
);

export const XIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);

export const UpworkIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M18.56 13.24c-1.2 0-2.33-.51-3.36-1.33l.25-1.17.01-.05c.23-1.29.95-3.45 3.1-3.45a2.78 2.78 0 0 1 2.79 2.78 2.8 2.8 0 0 1-2.79 3.22Zm0-8.4c-2.78 0-4.93 1.8-5.8 4.76-1.33-2-2.34-4.39-2.93-6.43H7.1v7.3a2.55 2.55 0 0 1-5.1 0V3.17H0v7.3a4.56 4.56 0 0 0 9.1 0V8.4c.57 1.2 1.27 2.42 2.13 3.5L9.97 18.5h2.1l.88-4.2c.38.25.79.48 1.2.67a6.1 6.1 0 0 0 2.4.63c.4.02.76.05 1.1.05 3.04 0 5.35-2.35 5.35-5.28a5.37 5.37 0 0 0-5.45-5.33Z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...base} className={className}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.4 9.4 0 0 1-1.44-5.01c0-5.2 4.23-9.43 9.43-9.43a9.37 9.37 0 0 1 9.42 9.44c0 5.2-4.23 9.42-9.43 9.42Zm8.02-17.45A11.27 11.27 0 0 0 12.05.72C5.8.72.72 5.8.72 12.05c0 2 .52 3.95 1.52 5.66L.62 23.28l5.7-1.5a11.3 11.3 0 0 0 5.72 1.46h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8Z" />
  </svg>
);

const line = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...line} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);

export const ArrowUpRightIcon = ({ className = "h-4 w-4" }: P) => (
  <svg {...line} className={className}><path d="M7 17 17 7M8 7h9v9" /></svg>
);

export const GlobeIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...line} className={className}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
);

export const AppIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...line} className={className}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 14h3M8 17h6" /></svg>
);

export const ApiIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...line} className={className}><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></svg>
);

export const WrenchIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...line} className={className}><path d="M14.7 6.3a4 4 0 0 0 5 5L21 13a6 6 0 0 1-7.6 1.4L7 20.8a2 2 0 0 1-2.8-2.8l6.4-6.4A6 6 0 0 1 12 4l1.7 1.3Z" /></svg>
);

export const BookIcon = ({ className = "h-6 w-6" }: P) => (
  <svg {...line} className={className}><path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2Z" /><path d="M4 19V5M8 7h8M8 11h6" /></svg>
);

export const AwardIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...line} className={className}><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></svg>
);

export const BriefcaseIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...line} className={className}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></svg>
);

export const CapIcon = ({ className = "h-5 w-5" }: P) => (
  <svg {...line} className={className}><path d="m2 9 10-5 10 5-10 5Z" /><path d="M6 11v5c3 2 9 2 12 0v-5M22 9v6" /></svg>
);
