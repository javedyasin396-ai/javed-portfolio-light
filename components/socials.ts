import { site } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, UpworkIcon, XIcon } from "./Icons";

export const socials = [
  { href: site.github, label: "GitHub", Icon: GitHubIcon },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.upwork, label: "Upwork", Icon: UpworkIcon },
  { href: site.x, label: "X (Twitter)", Icon: XIcon },
];
