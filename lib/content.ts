// All site copy lives here so it can be edited without touching components.
// Items marked PLACEHOLDER are stand-ins until real studio details are supplied.

export const site = {
  name: "Curiofold",
  tagline: "Motion, graphics & edit studio",
  description:
    "Curiofold is a creative studio for motion design, graphic design and video editing. We fold ideas into things that move.",
  // PLACEHOLDER: confirm the real contact address and social links.
  email: "hello@curiofold.com",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Behance", href: "#" },
    { label: "X / Twitter", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Engage", href: "#engage" },
  { label: "FAQ", href: "#faq" },
];

export const marquee = [
  "Motion design",
  "Logo animation",
  "Brand identity",
  "Posters & print",
  "Social content",
  "Video editing",
  "Title sequences",
  "Colour & sound",
];

export const manifesto =
  "Most content is flat. It gets made fast, posted once and forgotten by the next scroll. We work the other way. We stay curious about the idea, crease it until the shape is right, then fold design, motion and edit together into something people stop for and remember.";

export const services = [
  {
    name: "Motion design",
    summary: "Ideas that move, and move people.",
    body: "Animation with rhythm and intent: logo reveals, explainers, product films, kinetic type and motion systems that give a brand its own way of moving.",
    tags: ["Logo animation", "Explainers", "Kinetic type", "2D & 3D", "Motion systems", "UI motion"],
  },
  {
    name: "Graphic design",
    summary: "A look that could only be yours.",
    body: "Identity and visual design that holds together everywhere it lands, from the logo and type system to posters, covers, decks and a full set of social templates.",
    tags: ["Brand identity", "Logo", "Posters", "Social kits", "Thumbnails", "Pitch decks"],
  },
  {
    name: "Video editing",
    summary: "The cut is where the story happens.",
    body: "Editing that finds the pace of a piece. Long form, short form and everything between, finished with colour, sound design, captions and exports for every platform.",
    tags: ["Long form", "Reels & shorts", "Colour grade", "Sound design", "Captions", "Trailers"],
  },
];

// PLACEHOLDER: studio concept pieces. Replace with real projects (and real footage).
export const work = [
  {
    slug: "orrery",
    name: "Orrery",
    kind: "Motion identity",
    blurb:
      "A logo that never sits still. One mark built from orbits, animated into a full system of idents, loops and transitions.",
    tags: ["Motion design", "Logo animation", "Brand"],
    tone: "ink",
  },
  {
    slug: "tessel",
    name: "Tessel",
    kind: "Poster series",
    blurb:
      "Three shapes, one strict grid and no colour at all. A print series that proves how far a small set of rules can go.",
    tags: ["Graphic design", "Print", "Type"],
    tone: "ivory",
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    kind: "Brand film edit",
    blurb:
      "Ninety seconds cut from hours of footage. Paced to the music, graded to a single mood and finished with sound that carries it.",
    tags: ["Video editing", "Colour", "Sound design"],
    tone: "slate",
  },
  {
    slug: "moth",
    name: "Moth",
    kind: "Title sequence",
    blurb:
      "An opening sequence told in light and shadow. Storyboarded frame by frame, then animated with type that drifts like its namesake.",
    tags: ["Motion design", "Storyboard", "Kinetic type"],
    tone: "bone",
  },
] as const;

export const process = [
  {
    name: "Wonder",
    body: "We start with questions, not software. What is this for, who is it for, and what should they feel when it ends?",
  },
  {
    name: "Crease",
    body: "We mark the lines: script, moodboard, storyboard and styleframes. You see the direction before anything is animated or cut.",
  },
  {
    name: "Fold",
    body: "Design, animation and edit come together in rounds. You review real work in progress, with clear points to give feedback.",
  },
  {
    name: "Unfold",
    body: "Final delivery in every format you need, with source files and a tidy handover so the work is easy to reuse.",
  },
];

export const principles = [
  { figure: "3", label: "crafts under one roof: motion, graphics and edit" },
  { figure: "1", label: "team from first sketch to final export" },
  { figure: "0", label: "templates. Every piece starts from a blank sheet" },
  { figure: "∞", label: "curiosity about what the idea could become" },
];

// PLACEHOLDER: engagement models. Confirm details and add pricing if wanted.
export const engagements = [
  {
    name: "Single",
    span: "One piece",
    body: "One deliverable, done properly: a logo animation, a poster, an edit. A simple way to see how we work.",
    points: ["One clear brief", "Agreed rounds of feedback", "All formats and source files"],
  },
  {
    name: "Project",
    span: "Fixed scope",
    body: "A full body of work around a launch, a campaign or a rebrand, designed and produced as one connected set.",
    points: ["Concept and art direction", "Motion, graphics and edit together", "A delivery schedule you can plan around"],
    featured: true,
  },
  {
    name: "Retainer",
    span: "Monthly",
    body: "An ongoing creative partner for teams and creators who publish often and want a consistent look every time.",
    points: ["A set amount of work each month", "Priority turnaround", "One consistent visual language"],
  },
];

export const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "Motion design, graphic design and video editing, separately or together. That covers things like logo animations, explainers, brand identities, posters, social content and edits for long and short form video.",
  },
  {
    q: "Who do you work with?",
    a: "Brands, startups, agencies and creators who care how their work looks and moves. Some come with a finished brief, some with only a rough idea. Both are fine.",
  },
  {
    q: "How does a project start?",
    a: "With a short conversation about what you need and when. We follow up with a written scope, a timeline and a quote, and begin once you are happy with all three.",
  },
  {
    q: "How do revisions work?",
    a: "Each project includes agreed rounds of feedback at set points: after the direction, after the first full pass and before final delivery. That keeps things moving and avoids surprises.",
  },
  {
    q: "What do I get at the end?",
    a: "Final files exported for every platform you need, plus the source and project files, so the work stays yours and is easy to build on.",
  },
];
