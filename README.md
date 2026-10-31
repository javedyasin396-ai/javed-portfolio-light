# Javed Yasin — Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
```

## Editing content

All text, links, projects, experience, research and training live in [`lib/data.ts`](lib/data.ts). Components only read from it.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production URL, e.g. `https://your-domain.com`. Used for canonical URL, sitemap, robots.txt and Open Graph. On Vercel the project URL is used automatically if this is not set. |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Optional. Contact form endpoint. Defaults to FormSubmit for `javedyasin396@gmail.com`. |

## Contact form

The form posts to [FormSubmit](https://formsubmit.co). The first message sent from the live site triggers a one-time activation email to the address; click the link in it, or messages will not be delivered.

## Deploy to Vercel

No `vercel.json` is needed; Vercel detects Next.js automatically.

1. Commit and push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project**, import the repository and keep the defaults (Framework: Next.js, Build: `npm run build`, Root directory: `./`).
3. Deploy. Without any environment variables the site uses its `*.vercel.app` URL for SEO.
4. After adding a custom domain, set `NEXT_PUBLIC_SITE_URL` to it and redeploy.
5. Send yourself a message through the live contact form and click the FormSubmit activation link.
