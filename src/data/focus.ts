/** What the lab works on. The home page and the inner pages all read this file. */
export interface Area {
  id: string;
  title: string;
  summary: string;
  items: string[];
}

export const research: Area[] = [
  {
    id: "evaluation",
    title: "Testing AI against real failures",
    summary: "How do you know an AI feature works before people depend on it?",
    items: [
      "Writing evaluations before writing prompts",
      "Collecting the inputs that break a model",
      "Tracking whether a change made things better or worse",
    ],
  },
  {
    id: "applied",
    title: "Applied AI for everyday pain",
    summary: "Where AI genuinely removes a chore, and where it only adds noise.",
    items: [
      "Reading, sorting and summarising work that people dislike doing",
      "Small assistants and agents with clear limits",
      "Honest write-ups of what did not work",
    ],
  },
  {
    id: "sustainability",
    title: "System sustainability",
    summary: "Software and AI systems that a small team can keep running for years.",
    items: [
      "Cost of running models and infrastructure over time",
      "Simple architectures that stay maintainable",
      "Reliability and recovery without a large team",
    ],
  },
  {
    id: "culture",
    title: "Culture and the human side",
    summary: "How people and teams actually adopt AI, and what builders' culture looks like.",
    items: [
      "How indie builders work, decide and stay motivated",
      "How people change their habits around new tools",
      "What a healthy build-in-public culture looks like",
    ],
  },
];

/** How a piece of research moves from a question to something shared. */
export const method = [
  { title: "Ask", text: "Start with a specific question or a pain someone has told us about." },
  { title: "Test", text: "Run a small experiment and keep the failures as well as the wins." },
  { title: "Share", text: "Write it up as a note, a prototype or a podcast conversation." },
];

/** What the podcast covers. */
export const podcastTopics = [
  { title: "Research", text: "Conversations with researchers about what they are studying and what it means for people who build." },
  { title: "Indie hacking", text: "Building and shipping small products on your own terms." },
  { title: "Building with AI", text: "What works, what breaks, and what is just hype." },
  { title: "Sustainable systems", text: "Keeping products and builders going for the long run." },
  { title: "Culture", text: "The habits, communities and mindsets behind good independent work." },
];

/** What makes a problem worth building a product for. */
export const painTests = [
  "Someone feels it often, not once a year.",
  "They already use a workaround, such as a spreadsheet or a manual routine.",
  "A small product could help without a long setup.",
  "We can test it with real people early.",
];
