// All site copy lives here so it can be edited without touching components.
// Items marked PLACEHOLDER are stand-ins until real studio details are supplied.

export const site = {
  name: "Curiofold",
  tagline: "Design and engineering studio",
  description:
    "Curiofold is a design and engineering studio. Branding, product UI/UX, full-stack engineering, landing pages and websites, made by one team.",
  status: "Booking new projects",
  // PLACEHOLDER: confirm the real contact address, domain and social links.
  email: "hello@curiofold.com",
  url: "https://curiofold.com",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "Dribbble", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export const manifesto =
  "Most products are made flat. Strategy hands to design, design hands to code, and the idea loses a little shape at every pass. We keep hold of the whole sheet. One team folds brand, interface and engineering together, until the thing stands up on its own.";

export const principles = [
  { figure: "6", label: "Disciplines under one roof" },
  { figure: "1", label: "Team, from brief to launch" },
  { figure: "0", label: "Handoffs between design and code" },
  { figure: "100%", label: "Of files and code handed over" },
];

export const services = [
  {
    id: "branding",
    name: "Branding",
    figure: "Identity construction",
    body: "Complete brand identities: logo, colour, typography and a visual language that stays consistent everywhere it appears. Handed over in a brand portal your whole team can open and use the same day.",
    gets: ["Logo suite and usage rules", "Colour and type system", "Brand portal with every asset"],
    tags: ["Logo", "Colour", "Typography", "Guidelines", "Brand portal", "Figma", "Illustrator"],
  },
  {
    id: "product",
    name: "Product UI/UX",
    figure: "Component states",
    body: "Confusing products lose people before they reach the good part. We handle research, flows and precise interface design in Figma, simple for the people using it and unambiguous for the engineers building it.",
    gets: ["Research and user flows", "High-fidelity screens and prototypes", "A design system engineers can build from"],
    tags: ["Figma", "Web apps", "Mobile apps", "Dashboards", "Design systems", "Prototypes"],
  },
  {
    id: "engineering",
    name: "Full-stack product engineering",
    figure: "Build output",
    body: "We take your product from Figma to production. Faithful implementation, clean integration with your backend, and typed, tested code written by the same team that designed it. Nothing lost in translation.",
    gets: ["Front end built exactly as designed", "APIs, auth, data and integrations", "Clean repository and documentation"],
    tags: ["Next.js", "TypeScript", "React", "React Native", "Node.js", "PostgreSQL", "Supabase"],
  },
  {
    id: "landing",
    name: "Landing pages",
    figure: "Page anatomy",
    body: "Pages built to turn attention into action. Custom visuals, animation and interaction around one clear message, for launches, waitlists and campaigns where a template would undersell the product.",
    gets: ["Messaging structure and copy direction", "Custom visuals and motion", "Fast, measurable build"],
    tags: ["Figma", "Framer", "Webflow", "Next.js", "Rive", "Lottie", "A/B variants"],
  },
  {
    id: "websites",
    name: "Full websites",
    figure: "Site map",
    body: "Custom websites in Framer, Webflow or Next.js, chosen for what your team needs to run afterwards. Every layout, animation and line of code is made from scratch, on a CMS you can update without us.",
    gets: ["Sitemap and page system", "CMS your team can run", "SEO, performance and analytics set up"],
    tags: ["Framer", "Webflow", "Next.js", "Sanity", "CMS", "SEO", "Analytics"],
  },
  {
    id: "motion",
    name: "Motion and video",
    figure: "Easing curve",
    body: "Motion gives a brand its own way of moving. We animate logos, interfaces and explainers, and edit video for launches and social, finished with colour, sound and exports for every platform.",
    gets: ["Logo and interface animation", "Product films and explainers", "Edits cut for every format"],
    tags: ["After Effects", "Rive", "Lottie", "Logo animation", "Explainers", "Video editing"],
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

// PLACEHOLDER: studio concept projects. Replace with real case studies and screenshots.
// Each entry drives a row on the home page, a tile on /work and a page at /work/<slug>.
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
    tags: ["Product UI/UX", "Engineering", "Design system"],
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
    tags: ["Landing page", "Full website", "Engineering"],
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
export const process = [
  { name: "Wonder", span: "Before we start", body: "Questions before screens. What is this for, who is it for, and what would make it unmistakable?" },
  { name: "Crease", span: "Week one", body: "We mark the lines: structure, direction and a technical plan, decided early and in the open." },
  { name: "Fold", span: "Every week", body: "Design and engineering move together in short cycles, with a demo of real progress each week." },
  { name: "Press", span: "Before launch", body: "The details that make it feel finished: motion, states, speed, accessibility, copy." },
  { name: "Unfold", span: "Launch", body: "We ship it, check it in the wild, and hand over the files, the code and the documentation." },
];

// PLACEHOLDER: engagement models. Confirm details and add pricing if wanted.
export const engagements = [
  {
    name: "Pilot",
    span: "One week",
    body: "A short, real piece of your project, so you can judge the process and the quality before committing to more.",
    points: ["One focused problem", "Working sessions through the week", "You keep everything we make"],
  },
  {
    name: "Project",
    span: "Fixed scope",
    body: "A defined outcome with a clear plan: a brand, a product release, a website. Designed, built and launched end to end.",
    points: ["Scope, timeline and quote agreed upfront", "Weekly demos", "Full handover at launch"],
  },
  {
    name: "Embedded",
    span: "Month to month",
    body: "We join your team as its design and engineering wing, working inside your tools, your rituals and your roadmap.",
    points: ["Shared channel and stand-ups", "Priorities you can change", "Scale up or down as needed"],
  },
];

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
