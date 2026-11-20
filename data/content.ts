/* =====================================================================
   YOUR WEBSITE CONTENT — this is the only file you need to edit.
   ---------------------------------------------------------------------
   • Search this file for "TODO" to find every placeholder.
   • Text goes between quotes: "like this". Keep the commas at line ends.
   • Images live in /public/images. Refer to them as "/images/file.jpg".
   • Your resume lives at /public/resume.pdf (just replace that file).
   • Save the file and the site updates automatically while previewing.
   ===================================================================== */

/* ---------- Basic info (used in the nav, footer, and link previews) --- */
export const site = {
  name: "Jimmy Wu",
  fullName: "Chuan Hsi (Jimmy) Wu",
  // TODO: after deploying, replace with your real address (e.g. https://jimmywu.vercel.app)
  url: "https://jimmywu.vercel.app",
  // The title + description show up in Google results and LinkedIn/email link previews.
  title: "Jimmy Wu | Marketing & AI-Powered Content",
  description:
    "Portfolio of Jimmy Wu, a bilingual (English/Mandarin) Global Business Marketing student at Fordham Gabelli, creating AI-powered content that grows audiences.",
  email: "TODO-your-email@fordham.edu", // TODO: your email
  linkedin: "https://www.linkedin.com/in/TODO", // TODO: your LinkedIn URL
  instagram: "https://www.instagram.com/TODO", // TODO: your personal Instagram (or remove)
  resume: "/resume.pdf", // TODO: replace /public/resume.pdf with your real resume
};

/* ---------- Hero (the first thing visitors see) ----------------------- */
export const hero = {
  eyebrow: "Global Business Marketing · Fordham Gabelli '27",
  // Pick one of the three options below (or write your own) and paste it here.
  positioning:
    "Bilingual marketer turning AI-powered content into real audience growth, in English and 中文.",
  // Option 2: "I create scroll-stopping content with AI tools, and tell brand stories in two languages."
  // Option 3: "Marketing student at the intersection of creativity, AI, and cross-cultural storytelling."
  headshot: "/images/headshot.svg", // TODO: add your photo, e.g. /images/headshot.jpg (square works best)
  headshotAlt: "Portrait of Jimmy Wu",
};

/* ---------- About ---------------------------------------------------- */
export const about = {
  paragraphs: [
    "I'm a Global Business Marketing major with a Music minor at Fordham University's Gabelli School of Business, graduating in May 2027. I'm drawn to the part of marketing where data meets storytelling: figuring out what an audience actually cares about, then making content they want to stop and watch.",
    "Lately that's meant experimenting with AI-powered content creation. At FenDoDo Education I use tools like Higgsfield AI to produce short-form reels that grow our Instagram audience, and I'm always testing what turns a view into a follower.",
    "I'm fully bilingual in English and Mandarin, which lets me build campaigns that speak naturally to audiences in both the U.S. and Taiwan. My Music minor keeps my creative side sharp; it's taught me a lot about rhythm, pacing, and emotion, which turns out to matter just as much in a 15-second reel. TODO: add one personal detail (hometown, instrument you play, a hobby).",
  ],
  // Small facts shown beside the bio
  facts: [
    { label: "Based in", value: "New York, NY" }, // TODO: confirm
    { label: "Languages", value: "English · Mandarin" },
    { label: "Graduating", value: "May 2027" },
    { label: "Open to", value: "Summer 2027 marketing internships" }, // TODO: confirm
  ],
};

/* ---------- Experience ----------------------------------------------- */
export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  dates: string;
  summary: string;
  bullets: string[];
  metrics?: { value: string; label: string }[];
};

export const experience: Experience[] = [
  {
    role: "Business Development Representative",
    company: "FenDoDo Education",
    companyUrl: "https://www.instagram.com/fendodo_/", // TODO: company website if there is one
    location: "Taipei, Taiwan (Remote)", // TODO: confirm
    dates: "July 2025 – Present",
    summary: "Online college counseling platform helping students in Taiwan apply to universities abroad.",
    bullets: [
      "Grew the company Instagram (@fendodo_) by producing AI-generated reels with Higgsfield AI. TODO: add result",
      "TODO: e.g. Planned a weekly content calendar in English and Mandarin targeting high-school students and parents",
      "TODO: e.g. Generated X qualified leads for counseling consultations through social and outreach",
      "TODO: e.g. Tracked reel performance (reach, saves, follows) to refine hooks and posting times",
    ],
    metrics: [
      { value: "+XX%", label: "Follower growth (TODO)" },
      { value: "XXK", label: "Total reel views (TODO)" },
    ],
  },
  {
    role: "Marketing Intern",
    company: "GreenPortfolio",
    companyUrl: "https://greenportfolio.co", // TODO: confirm company URL
    location: "TODO: City, State / Remote",
    dates: "January – September 2026",
    summary: "Sustainable investing platform. TODO: confirm one-line company description.",
    bullets: [
      "Wrote blog posts for the company website. TODO: number of posts and topics",
      "TODO: e.g. Researched keywords to improve search visibility of articles",
      "TODO: e.g. Repurposed blog content into social posts and newsletter snippets",
    ],
    metrics: [
      { value: "XX", label: "Blog posts published (TODO)" },
      { value: "X,XXX", label: "Article page views (TODO)" },
    ],
  },
];

/* ---------- Featured Work / Case Studies ------------------------------
   Each case study gets its own page at /work/<slug>.
   To add one, copy a whole { ... } block and change the slug + content.
   --------------------------------------------------------------------- */
export type Video = {
  title: string;
  // "youtube" → the ID from youtube.com/watch?v=THIS_PART
  // "vimeo"   → the number from vimeo.com/THIS_PART
  // "instagram" → the code from instagram.com/reel/THIS_PART/
  platform: "youtube" | "vimeo" | "instagram";
  id: string; // leave as "TODO" to show a placeholder box
  description?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  role: string;
  timeframe: string;
  summary: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  challenge: string[];
  approach: string[];
  tools: string[];
  results: { value: string; label: string }[];
  resultsNote?: string;
  images?: { src: string; alt: string; caption?: string }[];
  videos?: Video[];
  links?: { title: string; description?: string; url: string }[];
  linksHeading?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "fendodo-ai-reels",
    title: "Growing @fendodo_ with AI-generated reels",
    client: "FenDoDo Education",
    role: "Content strategy, AI video production, analytics",
    timeframe: "2025 – Present",
    summary:
      "How I used AI video tools to produce a steady stream of short-form reels and grow an education brand's Instagram audience on a startup budget.",
    cover: "/images/case-fendodo-cover.svg", // TODO: replace with a real image
    coverAlt: "Grid of FenDoDo Instagram reels",
    tags: ["Instagram", "AI Video", "Short-form"],
    challenge: [
      "FenDoDo is a small online college counseling platform. It needed to reach Taiwanese high-school students and their parents on Instagram, but had no video team and a limited budget.",
      "TODO: describe the starting point, e.g. the account had ~X followers and posted irregularly.",
    ],
    approach: [
      "Researched what students and parents engage with: study-abroad tips, application deadlines, campus life, and myth-busting.",
      "Used Higgsfield AI to turn scripts and stills into eye-catching short videos, cutting production time per reel from days to hours.",
      "Wrote hooks and captions in Mandarin and English, and tested posting times and formats.",
      "TODO: e.g. Reviewed Instagram Insights weekly and doubled down on the formats with the best save and follow rates.",
    ],
    tools: ["Higgsfield AI", "Instagram Insights", "CapCut", "Canva", "ChatGPT"], // TODO: confirm tools
    results: [
      { value: "+XX%", label: "Follower growth (TODO)" },
      { value: "XXK", label: "Reel views (TODO)" },
      { value: "X.X%", label: "Avg. engagement rate (TODO)" },
      { value: "XX", label: "Reels produced (TODO)" },
    ],
    resultsNote: "TODO: add timeframe, e.g. \"From July 2025 to November 2026.\"",
    videos: [
      // TODO: paste the code from each reel URL: instagram.com/reel/THIS_PART/
      { title: "Example reel 1", platform: "instagram", id: "TODO" },
      { title: "Example reel 2", platform: "instagram", id: "TODO" },
      { title: "Example reel 3", platform: "instagram", id: "TODO" },
    ],
    images: [
      {
        src: "/images/case-fendodo-insights.svg", // TODO: screenshot of Instagram Insights growth
        alt: "Instagram Insights follower growth chart",
        caption: "TODO: Follower growth from Instagram Insights",
      },
    ],
  },
  {
    slug: "greenportfolio-content",
    title: "Content Marketing at GreenPortfolio",
    client: "GreenPortfolio",
    role: "Blog writing, SEO research",
    timeframe: "Jan – Sep 2026",
    summary:
      "Writing clear, search-friendly blog posts that explain sustainable investing to everyday readers.",
    cover: "/images/case-greenportfolio-cover.svg", // TODO: replace with a real image
    coverAlt: "GreenPortfolio blog article previews",
    tags: ["Content Marketing", "SEO", "Blog"],
    challenge: [
      "Sustainable investing can feel technical and intimidating. GreenPortfolio needed approachable content that builds trust and brings new readers to the website.",
      "TODO: add context, e.g. the blog had few recent posts or low search traffic.",
    ],
    approach: [
      "Researched topics and keywords that readers were actually searching for.",
      "Wrote and edited blog posts that turn complex ideas into plain-language explanations.",
      "TODO: e.g. Collaborated with the team on editorial calendar and on-page SEO.",
    ],
    tools: ["WordPress", "Google Docs", "Google Analytics", "Grammarly", "ChatGPT"], // TODO: confirm tools
    results: [
      { value: "XX", label: "Posts published (TODO)" },
      { value: "X,XXX", label: "Page views (TODO)" },
      { value: "X:XX", label: "Avg. time on page (TODO)" },
    ],
    linksHeading: "Writing samples",
    links: [
      // TODO: replace with your real articles
      { title: "TODO: Blog post title one", description: "One-sentence summary of the article.", url: "https://example.com" },
      { title: "TODO: Blog post title two", description: "One-sentence summary of the article.", url: "https://example.com" },
      { title: "TODO: Blog post title three", description: "One-sentence summary of the article.", url: "https://example.com" },
    ],
  },
];

/* ---------- Social Media Work (gallery) -------------------------------
   Put screenshots in /public/images/social/. Portrait (4:5) looks best.
   caption and url are optional — delete those lines if not needed.
   --------------------------------------------------------------------- */
export const socialPosts: { image: string; alt: string; caption?: string; url?: string }[] = [
  { image: "/images/social/post-1.svg", alt: "TODO: describe the post", caption: "TODO: caption", url: "https://www.instagram.com/fendodo_/" },
  { image: "/images/social/post-2.svg", alt: "TODO: describe the post", caption: "TODO: caption", url: "https://www.instagram.com/fendodo_/" },
  { image: "/images/social/post-3.svg", alt: "TODO: describe the post", caption: "TODO: caption", url: "https://www.instagram.com/fendodo_/" },
  { image: "/images/social/post-4.svg", alt: "TODO: describe the post", caption: "TODO: caption" },
  { image: "/images/social/post-5.svg", alt: "TODO: describe the post", caption: "TODO: caption" },
  { image: "/images/social/post-6.svg", alt: "TODO: describe the post" },
];

/* ---------- Writing (blog posts) ------------------------------------- */
export const writing: { title: string; excerpt: string; date: string; publication: string; url: string }[] = [
  {
    title: "TODO: Blog post title one",
    excerpt: "TODO: A two-sentence excerpt that makes a reader want to click through and read the full article.",
    date: "2026-08-15", // format: YYYY-MM-DD
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
  {
    title: "TODO: Blog post title two",
    excerpt: "TODO: A two-sentence excerpt that makes a reader want to click through and read the full article.",
    date: "2026-05-02",
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
  {
    title: "TODO: Blog post title three",
    excerpt: "TODO: A two-sentence excerpt that makes a reader want to click through and read the full article.",
    date: "2026-02-20",
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
];

/* ---------- Videos ----------------------------------------------------
   Never upload video files to this project; host them on YouTube,
   Vimeo, or Instagram and paste the ID here (see the Video type above).
   --------------------------------------------------------------------- */
export const videos: Video[] = [
  { title: "TODO: Video title", platform: "youtube", id: "TODO", description: "TODO: one line about this video." },
  { title: "TODO: Video title", platform: "instagram", id: "TODO", description: "TODO: one line about this video." },
];

/* ---------- Skills & Tools ------------------------------------------- */
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Marketing",
    items: ["Social Media Strategy", "Content Marketing", "Business Development", "Market Research", "SEO Basics", "Copywriting"],
  },
  {
    group: "Content & Design",
    items: ["Short-form Video", "Canva", "CapCut", "Blog Writing", "Instagram Insights"], // TODO: confirm
  },
  {
    group: "AI Tools",
    items: ["Higgsfield AI", "ChatGPT", "Claude"], // TODO: confirm
  },
  {
    group: "Languages",
    items: ["English (Fluent)", "Mandarin Chinese (Native)"], // TODO: confirm levels
  },
];
