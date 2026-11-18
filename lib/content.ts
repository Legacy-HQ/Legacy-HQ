// All site copy lives here so it can be edited without touching components.
// Items marked PLACEHOLDER are stand-ins until real studio details are supplied.

export const site = {
  name: "Curiofold",
  tagline: "Motion, graphics & edit studio",
  description:
    "Curiofold is a creative studio for motion design, graphic design and video editing. We fold ideas into things that move.",
  // PLACEHOLDER: confirm the real contact address and social links.
  email: "hello@curiofold.com",
  // PLACEHOLDER: the live domain, used for link previews.
  url: "https://curiofold.com",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Behance", href: "#" },
    { label: "X / Twitter", href: "#" },
  ],
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Engage", href: "/#engage" },
  { label: "Contact", href: "/contact" },
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
// Each entry drives a card on the home page, a tile on /work and a full page at /work/<slug>.
export const work = [
  {
    slug: "orrery",
    name: "Orrery",
    kind: "Motion identity",
    craft: "Motion",
    blurb:
      "A logo that never sits still. One mark built from orbits, animated into a full system of idents, loops and transitions.",
    tags: ["Motion design", "Logo animation", "Brand"],
    tone: "ink",
    specs: [
      { k: "Format", v: "Idents, loops, transitions" },
      { k: "Length", v: "6 second master loop" },
      { k: "Delivered as", v: "16:9, 9:16, 1:1 and Lottie" },
    ],
    story: [
      {
        title: "Wonder",
        body: "What if a logo behaved like the thing it is named after? An orrery is a model of orbits, so the mark should keep time rather than sit still.",
      },
      {
        title: "Crease",
        body: "Three rings, three speeds, one fixed centre. We set the ratios first so every loop lands back on the resting mark without a visible cut.",
      },
      {
        title: "Fold",
        body: "The same motion became the system: a six second ident, a looping avatar, and wipes that use the rings to move from one scene to the next.",
      },
    ],
    deliverables: ["Animated logo", "Ident and sting", "Looping avatar", "Transition pack", "Motion guidelines"],
  },
  {
    slug: "tessel",
    name: "Tessel",
    kind: "Poster series",
    craft: "Graphic",
    blurb:
      "Three shapes, one strict grid and no colour at all. A print series that proves how far a small set of rules can go.",
    tags: ["Graphic design", "Print", "Type"],
    tone: "ivory",
    specs: [
      { k: "Format", v: "Poster series of three" },
      { k: "Size", v: "50 × 70 cm, plus social crops" },
      { k: "Delivered as", v: "Print-ready PDF and templates" },
    ],
    story: [
      {
        title: "Wonder",
        body: "How little do you need for a set of posters to feel like a family? We removed colour, photography and illustration to find out.",
      },
      {
        title: "Crease",
        body: "A five by seven grid, one serif, and three shapes: a disc, a folded sheet and a stack of bars. Every poster uses the same margins and the same baseline.",
      },
      {
        title: "Fold",
        body: "Each poster swaps figure and ground, so the three read as a sequence on a wall and still hold up alone as a square crop in a feed.",
      },
    ],
    deliverables: ["Three posters", "Type and grid system", "Social crops", "Editable templates"],
  },
  {
    slug: "halcyon",
    name: "Halcyon",
    kind: "Brand film edit",
    craft: "Edit",
    blurb:
      "Ninety seconds cut from hours of footage. Paced to the music, graded to a single mood and finished with sound that carries it.",
    tags: ["Video editing", "Colour", "Sound design"],
    tone: "slate",
    specs: [
      { k: "Format", v: "Brand film with cutdowns" },
      { k: "Length", v: "90 seconds, plus 30 and 15" },
      { k: "Delivered as", v: "16:9 master, 9:16 and 1:1 cuts" },
    ],
    story: [
      {
        title: "Wonder",
        body: "Hours of good footage is a harder brief than too little. The question was what the film is about once everything pretty has been removed.",
      },
      {
        title: "Crease",
        body: "We built the cut on paper first: one line of story, a music map marking every beat, and a short list of shots that had earned their place.",
      },
      {
        title: "Fold",
        body: "The edit breathes with the track, the grade holds one cool, quiet mood from first frame to last, and the sound design fills the space between cuts.",
      },
    ],
    deliverables: ["Master edit", "Short cutdowns", "Colour grade", "Sound design and mix", "Captions"],
  },
  {
    slug: "moth",
    name: "Moth",
    kind: "Title sequence",
    craft: "Motion",
    blurb:
      "An opening sequence told in light and shadow. Storyboarded frame by frame, then animated with type that drifts like its namesake.",
    tags: ["Motion design", "Storyboard", "Kinetic type"],
    tone: "bone",
    specs: [
      { k: "Format", v: "Opening title sequence" },
      { k: "Length", v: "45 seconds at 24 fps" },
      { k: "Delivered as", v: "ProRes master with type layers" },
    ],
    story: [
      {
        title: "Wonder",
        body: "A title sequence sets the temperature of everything after it. This one needed to feel like the last hour of daylight.",
      },
      {
        title: "Crease",
        body: "Twelve storyboard frames, each built around a single source of light. The type was drawn to appear a letter at a time, pulled toward that light.",
      },
      {
        title: "Fold",
        body: "Animated at 24 frames with slow, uneven easing so nothing moves mechanically. The title arrives last, and stays just long enough.",
      },
    ],
    deliverables: ["Storyboard", "Styleframes", "Animated sequence", "Title card", "Type toolkit"],
  },
] as const;

export type Project = (typeof work)[number];

export const formats = [
  { id: "16:9", ratio: 16 / 9, where: "YouTube, web, screens" },
  { id: "9:16", ratio: 9 / 16, where: "Reels, Shorts, TikTok" },
  { id: "1:1", ratio: 1, where: "Feed posts, covers" },
  { id: "4:5", ratio: 4 / 5, where: "Feed, paid social" },
] as const;

// Options offered in the project brief on /contact.
export const brief = {
  needs: ["Motion design", "Graphic design", "Video editing", "Not sure yet"],
  timelines: ["As soon as possible", "2 to 4 weeks", "1 to 2 months", "Flexible"],
};

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
