// All site copy lives here so it can be edited without touching components.
// Items marked PLACEHOLDER are stand-ins until real studio details are supplied.

export const site = {
  name: "Curiofold",
  tagline: "Design and engineering studio",
  description:
    "Curiofold is a design and engineering studio. Branding, product UI/UX, full-stack engineering, landing pages and websites, made by one team.",
  announcement: "Now booking new projects",
  // PLACEHOLDER: confirm the real contact address, domain and social links.
  email: "hello@curiofold.com",
  url: "https://curiofold.com",
  socials: [
    { label: "X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Compare", href: "/#compare" },
  { label: "FAQ", href: "/#faq" },
];

export const sectors = ["SaaS", "Fintech", "AI products", "Developer tools", "Consumer apps", "E-commerce"];

export const services = [
  {
    id: "branding",
    name: "Branding",
    body: "We build complete brand identities: logo, colour, typography and a visual language that stays consistent everywhere it appears. Everything is handed over in a brand portal your whole team can open and use the same day.",
    gets: ["Logo suite and usage rules", "Colour and type system", "Brand portal with every asset"],
    tags: ["Logo", "Colour systems", "Typography", "Visual language", "Brand portal", "Pitch decks", "Figma", "Illustrator"],
  },
  {
    id: "product",
    name: "Product UI/UX",
    body: "Confusing products lose people before they reach the good part. We handle research, flows and precise interface design in Figma, made simple for the people using it and unambiguous for the engineers building it.",
    gets: ["Research and user flows", "High-fidelity screens and prototypes", "A design system engineers can build from"],
    tags: ["Figma", "Web apps", "Mobile apps", "Dashboards", "Design systems", "Prototypes", "Desktop apps"],
  },
  {
    id: "engineering",
    name: "Full-stack product engineering",
    body: "We take your product from Figma to production. Faithful implementation, clean integration with your backend, and typed, tested code written by the same team that designed it. No shortcuts and nothing lost in translation.",
    gets: ["Front end built exactly as designed", "APIs, auth, data and integrations", "Clean repository and documentation"],
    tags: ["Next.js", "TypeScript", "React", "React Native", "Node.js", "PostgreSQL", "Supabase", "Swift", "Redis"],
  },
  {
    id: "landing",
    name: "Landing pages",
    body: "Pages built to turn attention into action. Custom visuals, animation and interaction around one clear message, for launches, waitlists and campaigns where a template would undersell the product.",
    gets: ["Messaging structure and copy direction", "Custom visuals and motion", "Fast, measurable build"],
    tags: ["Figma", "Framer", "Webflow", "Next.js", "Rive", "Lottie", "Waitlist pages", "Product pages", "A/B variants"],
  },
  {
    id: "websites",
    name: "Full websites",
    body: "Custom websites in Framer, Webflow or Next.js, chosen for what your team needs to run afterwards. Every layout, animation and line of code is made from scratch for your brand, on a CMS you can update without us.",
    gets: ["Sitemap and page system", "CMS your team can run", "SEO, performance and analytics set up"],
    tags: ["Framer", "Webflow", "Next.js", "Sanity", "CMS websites", "Marketing websites", "SEO", "Analytics"],
  },
  {
    id: "motion",
    name: "Motion and video",
    body: "Motion gives a brand its own way of moving. We animate logos, interfaces and explainers, and edit video for launches and social, finished with colour, sound and exports for every platform.",
    gets: ["Logo and interface animation", "Product films and explainers", "Edits cut for every format"],
    tags: ["After Effects", "Rive", "Lottie", "Logo animation", "Explainers", "Video editing", "Reels and shorts"],
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const figures = [
  { figure: "6", label: "Disciplines under one roof" },
  { figure: "1", label: "Team, from brief to launch" },
  { figure: "0", label: "Handoffs between design and code" },
  { figure: "100%", label: "Of files and code handed over" },
];

// PLACEHOLDER: studio concept projects. Replace with real case studies and screenshots.
// Each entry drives a spotlight on the home page, a tile on /work and a page at /work/<slug>.
export const work = [
  {
    slug: "halcyon",
    name: "Halcyon",
    kind: "Treasury platform",
    craft: "Product",
    blurb: "A calm control room for company cash, designed and built as one piece.",
    paragraphs: [
      "A concept for a treasury product where finance teams see every account, forecast and payment in one place.",
      "Dense data with a quiet hierarchy: one number always matters most, and everything else steps back until it is needed.",
      "Designed in Figma as a full system, then built in Next.js with a typed API layer so the interface and the data never drift apart.",
    ],
    sectors: ["Fintech", "B2B SaaS"],
    tags: ["Product UI/UX", "Product eng", "Design system"],
    specs: [
      { k: "Scope", v: "Product design and build" },
      { k: "Platform", v: "Web app, responsive" },
      { k: "Stack", v: "Figma, Next.js, PostgreSQL" },
    ],
    story: [
      { title: "Problem", body: "Treasury tools show everything at once. People open five tabs and a spreadsheet to answer one question: how much cash do we really have?" },
      { title: "Approach", body: "We ranked every piece of data by how often it drives a decision, then designed the layout around the top three and tucked the rest one click away." },
      { title: "Result", body: "A dashboard that answers the main question in the first second, with a component system that covers forecasting, payments and reporting without new patterns." },
    ],
    deliverables: ["Product UI/UX", "Design system", "Front-end build", "API and data layer", "Motion details"],
  },
  {
    slug: "moth",
    name: "Moth",
    kind: "Sleep companion app",
    craft: "Product",
    blurb: "A night-first mobile app that dims with you and never asks for attention after dark.",
    paragraphs: [
      "A concept for a sleep app designed around the hour before bed, when most apps are at their loudest.",
      "Large type, slow motion and a palette that drops in contrast as the evening goes on. Every flow can be finished with one thumb.",
      "Designed for iOS and Android together, with a shared component library and Rive animations for the moments that deserve one.",
    ],
    sectors: ["Wellness", "B2C"],
    tags: ["Mobile app", "Product UI/UX", "Motion"],
    specs: [
      { k: "Scope", v: "Mobile product design" },
      { k: "Platform", v: "iOS and Android" },
      { k: "Stack", v: "Figma, Rive, React Native" },
    ],
    story: [
      { title: "Problem", body: "Sleep apps ask for the most interaction at the moment you should be putting the phone down." },
      { title: "Approach", body: "We designed for the dimmest setting first. If a screen worked at arm's length, half asleep, it worked everywhere else." },
      { title: "Result", body: "Three core screens, one gesture each, and a wind-down flow that takes less than ten seconds to start." },
    ],
    deliverables: ["Mobile UI/UX", "Component library", "Rive animations", "Onboarding flow", "App Store assets"],
  },
  {
    slug: "tessel",
    name: "Tessel",
    kind: "Developer platform website",
    craft: "Web",
    blurb: "A launch site for an API product, where the documentation is the hero.",
    paragraphs: [
      "A concept for a developer tools company launching its first public API.",
      "Developers trust what they can run, so the landing page leads with a working code sample instead of a claim, and every section answers a question an engineer would ask next.",
      "Built in Next.js with a CMS behind the changelog and docs, tuned to load fast and score well where it counts.",
    ],
    sectors: ["Developer tools", "B2B SaaS"],
    tags: ["Landing page", "Full website", "Product eng"],
    specs: [
      { k: "Scope", v: "Website design and build" },
      { k: "Pages", v: "Landing, docs, pricing, changelog" },
      { k: "Stack", v: "Figma, Next.js, Sanity" },
    ],
    story: [
      { title: "Problem", body: "Developer marketing pages tend to promise speed and simplicity without showing either." },
      { title: "Approach", body: "We put real, copyable code above the fold and let the page prove the product, with motion used only to explain how requests flow." },
      { title: "Result", body: "A site that reads like good documentation and still sells: one clear path from first glance to first API call." },
    ],
    deliverables: ["Landing page", "Marketing website", "CMS setup", "Docs templates", "Launch assets"],
  },
  {
    slug: "orrery",
    name: "Orrery",
    kind: "Brand identity",
    craft: "Brand",
    blurb: "An identity built from orbits: a mark that moves, a strict type system and a calm palette.",
    paragraphs: [
      "A concept identity for a company that makes precise things and wants to look like it.",
      "One mark drawn from three orbits, a two-weight type system and a palette of four colours, documented so anyone on the team can apply it correctly.",
      "Delivered through a brand portal with logo files, templates and motion guidelines, so the brand holds together long after handover.",
    ],
    sectors: ["Hardware", "B2C"],
    tags: ["Branding", "Brand portal", "Motion"],
    specs: [
      { k: "Scope", v: "Brand identity system" },
      { k: "Includes", v: "Logo, type, colour, motion" },
      { k: "Delivered as", v: "Brand portal and Figma library" },
    ],
    story: [
      { title: "Problem", body: "A good product with a forgettable face. The old identity was a wordmark and a colour, applied differently every time." },
      { title: "Approach", body: "We looked for one idea the whole system could grow from, and found it in the name: bodies in orbit, always in proportion." },
      { title: "Result", body: "A mark that works at sixteen pixels and on a building, with rules simple enough that the system polices itself." },
    ],
    deliverables: ["Logo suite", "Colour and type system", "Brand guidelines", "Templates", "Logo animation"],
  },
] as const;

export type Project = (typeof work)[number];

// PLACEHOLDER: confirm these reflect how the studio really works.
export const compare = {
  columns: ["In-house hire", "Freelancers"],
  rows: [
    { topic: "Time to start", us: "Within days of signing off the scope", others: ["Months to hire and onboard", "Weeks to find a good one"] },
    { topic: "Skills covered", us: "Brand, product, web, engineering and motion", others: ["One person's skill set", "One skill each"] },
    { topic: "Speed", us: "Design and build move in parallel", others: ["One task at a time", "Fitted around other clients"] },
    { topic: "Collaboration", us: "One point of contact, shared channel", others: ["You manage them", "You manage each one"] },
    { topic: "Transparency", us: "Weekly demos of real progress", others: ["Depends on the person", "Updates when they are free"] },
    { topic: "Scaling", us: "Add or remove disciplines as needed", others: ["Every new skill is a new hire", "Start the search again"] },
    { topic: "Ownership", us: "All files and code are yours", others: ["Yours", "Varies by contract"] },
    { topic: "Risk", us: "Start with one pilot week", others: ["A hard hire to undo", "No continuity if they leave"] },
  ],
};

export const process = [
  { name: "Discover", span: "Week 0", body: "A short call, then a written scope: what we will make, the timeline and a fixed quote." },
  { name: "Define", span: "Week 1", body: "Research, structure and direction. You see the thinking before anything is polished." },
  { name: "Design", span: "Ongoing", body: "High-fidelity design in Figma, reviewed with you in short, regular cycles." },
  { name: "Build", span: "In parallel", body: "Engineering starts while design is still moving, so nothing waits on a handoff." },
  { name: "Launch", span: "Final week", body: "We ship, check it in the wild, and hand over files, code and documentation." },
];

export const stack = [
  "Figma", "Framer", "Webflow", "Next.js", "React", "TypeScript", "Tailwind CSS", "React Native",
  "Node.js", "PostgreSQL", "Supabase", "Sanity", "Rive", "Lottie", "After Effects",
];

export const pilot = {
  title: "Start with a pilot week",
  badge: "Fixed price",
  body: [
    "Meet the team, work with the designers and engineers, and see the process and the quality first-hand on a real piece of your project.",
    "If it is the right fit, we carry on into the full project. If not, you keep everything we made that week.",
  ],
};

export const faqs = [
  { q: "Why Curiofold?", a: "Most studios split design and development across different people, or different companies. We do both as one team, so what gets designed is what gets shipped and you never have to coordinate between vendors." },
  { q: "Who will we work with?", a: "The people doing the work. You get one point of contact who runs the project, and direct access to the designers and engineers on it." },
  { q: "How do we work together?", a: "In a shared channel with a weekly demo. You see real progress every week, give feedback at set points, and always know what is happening next." },
  { q: "Do you offer full-stack engineering?", a: "Yes. We build front ends, APIs, databases and integrations, and we are just as happy to hand designs to your own engineers and support them through the build." },
  { q: "What if priorities change?", a: "They usually do. Work is planned in short cycles, so we can re-order what comes next without derailing the project. Larger changes get a quick, written re-scope." },
  { q: "Can you work with our team?", a: "Yes. We regularly plug into in-house designers and engineers, use your repositories and tools, and follow your release process." },
  { q: "Who owns the work?", a: "You do. Design files, source code, assets and documentation are all handed over, with nothing locked behind us." },
];

// Options offered in the project brief on /contact.
export const brief = {
  needs: ["Branding", "Product UI/UX", "Engineering", "Landing page", "Full website", "Motion and video", "Not sure yet"],
  timelines: ["As soon as possible", "2 to 4 weeks", "1 to 2 months", "Flexible"],
};
