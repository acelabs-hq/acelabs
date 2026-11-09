/**
 * Single source of truth for facts that appear on many pages.
 * Change a value here and every page, the footer and the contact page follow.
 */
export const site = {
  name: "ACE Labs",
  /** ACE stands for AI, Cloud and Engineering. */
  expansion: "AI, Cloud & Engineering",
  tagline: "An independent technology and product innovation lab.",

  /** Plain statement of what this project is. Used on the About page and in the README. */
  independence:
    "ACE Labs is an independent side project. It is not connected to, funded by or endorsed by any employer, and nothing on this site speaks for one.",
  description:
    "ACE Labs is an independent technology and product innovation lab focused on building intelligent solutions, transforming businesses, and solving complex engineering challenges.",

  /**
   * Public contact address, shown on the contact page and in the footer.
   * Confirm this is the inbox you actually read before sharing the site.
   */
  email: "ace@gmail.com",

  /** Only links that exist. Add LinkedIn or X here once the accounts are real. */
  links: {
    github: "https://github.com/acelabs-hq/acelabs",
  },

  /** Main navigation. Order here is the order on screen. */
  nav: [
    { label: "Services", href: "services/" },
    { label: "Systems", href: "systems/" },
    { label: "Projects", href: "projects/" },
    { label: "Notes", href: "notes/" },
    { label: "About", href: "about/" },
  ],
} as const;
