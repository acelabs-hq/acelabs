/**
 * People and collaboration. This text was written by the lab and is shown on the About page exactly
 * as written here. Only list people who have agreed to be named, and keep their details accurate.
 */
export interface Person {
  name: string;
  initials: string;
  role: string;
  bio: string;
}

export const leadership: Person[] = [
  {
    name: "Prasad F.",
    initials: "PF",
    role: "CEO & Co-Founder",
    bio: "3+ years of experience building software systems, AI-powered solutions, and scalable digital products.",
  },
  {
    name: "MK",
    initials: "MK",
    role: "Head of Business Development",
    bio: "Helps grow the lab's network of builders, guests and collaborators.",
  },
];

export const collaborators: Person[] = [
  {
    name: "Reaper",
    initials: "R",
    role: "Dev Tools & Performance",
    bio: "Seasoned developer from India with 9+ years in web development, tooling, automation and parsers. Open-source contributor who values simplicity: doing more with less, without lowering the quality bar.",
  },
  {
    name: "Kshitij G.",
    initials: "KG",
    role: "Senior Software Engineer",
    bio: "Senior software engineer with 6 years of experience working across the stack, from backend services to polished user interfaces.",
  },
  {
    name: "Pixel",
    initials: "P",
    role: "Backend Engineer",
    bio: "Backend engineer at a quantum computing startup, with 2+ years of experience.",
  },
];

/** Areas the lab and its collaborators cover together. */
export const specialties = [
  { title: "ML & LLM engineers", text: "Fine-tuning, retrieval, evaluation and agent design." },
  { title: "Cloud & DevOps", text: "Platform, security hardening, cost optimization." },
  { title: "Data engineering", text: "Pipelines, warehousing, quality and governance." },
  { title: "Security & compliance", text: "Reviews, threat modeling, audit readiness." },
  { title: "Product & design", text: "UX for AI features, prototypes, user research." },
  { title: "Domain experts", text: "Finance, health, logistics and more, as needed." },
];

/** How a project with collaborators is run. */
export const collaboration = [
  "We scope the project together and decide who is needed.",
  "Collaborators join as partners for the time the work requires.",
  "You get one clear lead and one shared standard of quality.",
  "Knowledge stays with your team after the project.",
];
