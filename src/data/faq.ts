/** Frequently asked questions. The home page shows the first few; the About page shows all of them. */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What does ACE stand for?",
    answer:
      "AI, Cloud & Engineering. Those are the three disciplines the lab combines when it works on a system.",
  },
  {
    question: "What is ACE Labs?",
    answer:
      "An independent technology and product innovation lab, founded by Prasad F. as a side project and built with a small group of collaborators. It focuses on building intelligent solutions and solving hard engineering problems.",
  },
  {
    question: "What kinds of systems does it work on?",
    answer:
      "QMS, ERP, SaaS and healthcare systems, plus the AI, cloud and data work around them.",
  },
  {
    question: "Are the projects on this site past client work?",
    answer:
      "No. The Projects page shows blueprints: reference designs for the kinds of systems the lab works on. They are ideas, not delivered projects.",
  },
  {
    question: "Is ACE Labs connected to an employer?",
    answer:
      "No. ACE Labs is an independent side project. It is not connected to, funded by or endorsed by any employer, and nothing here speaks for one.",
  },
  {
    question: "How does collaboration work?",
    answer:
      "When a project needs extra depth, the lab brings in trusted specialists as collaborators. They work with us, not for us, and share the goals, the standards and the credit.",
  },
  {
    question: "How would an engagement work?",
    answer:
      "A short discovery, a scoped build with regular demos, then a handover with documentation.",
  },
  {
    question: "Who owns the result?",
    answer:
      "You do. Code, infrastructure and decisions stay with your team. That is the intent of every engagement.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "By email. The address is on the contact page. Say what you are trying to fix and include any links that help.",
  },
];
