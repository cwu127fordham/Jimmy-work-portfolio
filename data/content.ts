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
  url: "https://chuanhsiwu.vercel.app",
  // The title + description show up in Google results and LinkedIn/email link previews.
  title: "Jimmy Wu | Marketing & AI-Powered Content",
  description:
    "Portfolio of Jimmy Wu, a bilingual (English/Mandarin) Global Business Marketing student at Fordham Gabelli, creating AI-powered content that grows audiences.",
  email: "cwu127@fordham.edu",
  linkedin: "https://www.linkedin.com/in/chuan-hsi-jimmy-wu/",
  instagram: "", // optional: your personal Instagram URL. Leave "" to hide the Instagram links.
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
  headshot: "/images/headshot.jpg", // portrait (4:5) photo
  headshotAlt: "Portrait of Jimmy Wu",
};

/* ---------- About ---------------------------------------------------- */
export const about = {
  paragraphs: [
    "I'm a Global Business Marketing major with a Music minor at Fordham University's Gabelli School of Business, graduating in May 2027. I'm drawn to the part of marketing where data meets storytelling: figuring out what an audience actually cares about, then making content they want to stop and watch.",
    "Lately that's meant building AI into everything I make. At FenDoDo Education I produce short-form reels with Higgsfield AI to grow our Instagram audience, and at GreenPortfolio I turned blog posts into YouTube videos with Google Vids and used Gemini and Perplexity to speed up SEO and research.",
    "I'm a native speaker of both English and Mandarin, which lets me build campaigns that speak naturally to audiences in the U.S. and Taiwan. My Music minor keeps my creative side sharp: I play piano, sing with the F-Sharps a cappella group and the Fordham University Choir, and produce music in FL Studio. It's taught me a lot about rhythm, pacing, and emotion, which matter just as much in a 15-second reel. I'm especially excited about music and sports marketing.",
  ],
  // Small facts shown beside the bio
  facts: [
    { label: "Based in", value: "Brooklyn, NY" },
    { label: "Languages", value: "English · Mandarin (both native)" },
    { label: "Graduating", value: "May 2027 · GPA 3.67" },
    { label: "Honors", value: "Woolworth Award · Dean's List · Consulting Cup Finalist" },
    { label: "Open to", value: "Marketing internships & full-time roles" }, // TODO: confirm
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
    location: "Taipei, Taiwan",
    dates: "July 2025 – Present",
    summary: "Online college counseling platform.",
    bullets: [
      "Grew FenDoDo's Instagram (@fendodo_) with AI-generated reels made in Higgsfield AI. TODO: add result (e.g. +X% followers)",
      "Generated $4,052 in new client revenue through social media outreach and referral initiatives",
      "Launched FenDoDo's Referral Program, an incentive system that boosted client acquisition",
      "Created 2 Google Ads campaigns for the U.S. and Taiwan markets to maximize impressions and conversions",
      "Promoted tutors with Canva profiles and strengthened client engagement through tailored services",
    ],
    metrics: [
      { value: "$4,052", label: "New client revenue" },
      { value: "2", label: "Google Ads campaigns (U.S. & Taiwan)" },
    ],
  },
  {
    role: "Marketing Intern",
    company: "GreenPortfolio",
    companyUrl: "https://greenportfolio.co", // TODO: confirm company URL
    location: "New York, NY",
    dates: "January – September 2026",
    summary: "Climate-conscious investing and financial advice platform.", // TODO: confirm wording
    bullets: [
      "Produced 8 blog posts on climate-conscious investing (fiduciary advisors, advisor fees, choosing a climate-savvy advisor, midlife wealth planning), driving a 28% increase in organic web traffic",
      "Turned blog posts into 5 YouTube videos with Google Vids, refining AI voiceovers and aligning each scene with brand color guidelines",
      "Integrated generative AI tools (Gemini, Perplexity) into SEO optimization, content creation, lead sourcing, and competitive research",
    ],
    metrics: [
      { value: "+28%", label: "Organic web traffic" },
      { value: "8", label: "Blog posts published" },
    ],
  },
  {
    role: "Team Member, Consulting Cup Finalist",
    company: "Gabelli School of Business Consulting Cup",
    location: "New York, NY",
    dates: "September – December 2024",
    summary: "Annual competition where student teams consult for an assigned company and propose a solution.",
    bullets: [
      "Placed 2nd out of 27 teams (150 students); one of three teams selected to present to five industry judges",
      "Analyzed T-Mobile's consumer demographics and proposed \"PorT,\" a digital-detox device, to capture a growth opportunity",
    ],
    metrics: [
      { value: "2nd", label: "Out of 27 teams" },
      { value: "150", label: "Students competing" },
    ],
  },
  {
    role: "Artist Management & Promotion Intern",
    company: "Mezz Entertainment",
    location: "New York, NY",
    dates: "August – December 2024",
    summary: "Music artist management and promotion.",
    bullets: [
      "Sent 5 outreach pitches weekly promoting Mezz artists to clubs, bars, and venues via email and social media",
      "Researched venues and pitched artists to bookers, building research and marketing skills",
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
    tools: ["Higgsfield AI", "Instagram", "Instagram Insights", "Canva", "Google Ads"], // TODO: confirm tools
    results: [
      { value: "$4,052", label: "New client revenue from social & referrals" },
      { value: "+XX%", label: "Follower growth (TODO)" },
      { value: "XXK", label: "Reel views (TODO)" },
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
    role: "Blog writing, SEO, AI video production",
    timeframe: "Jan – Sep 2026",
    summary:
      "Eight search-friendly blog posts on climate-conscious investing, turned into YouTube videos with AI, that lifted organic web traffic by 28%.",
    cover: "/images/case-greenportfolio-cover.svg", // TODO: replace with a real image
    coverAlt: "GreenPortfolio blog article previews",
    tags: ["Content Marketing", "SEO", "Blog"],
    challenge: [
      "Climate-conscious investing can feel technical and intimidating. GreenPortfolio needed approachable content that builds trust and brings new readers to the website.",
      "TODO: add context, e.g. the blog had few recent posts or low search traffic.",
    ],
    approach: [
      "Researched topics and keywords readers were actually searching for, using Gemini and Perplexity to speed up SEO, competitive, and industry research.",
      "Wrote 8 plain-language blog posts on fiduciary advisors, advisor fees, choosing a climate-savvy advisor, and midlife wealth planning.",
      "Repurposed the posts into 5 YouTube videos with Google Vids, refining AI voiceovers for smooth transitions and matching every scene to brand color guidelines.",
    ],
    tools: ["Google Vids", "Gemini", "Perplexity", "YouTube"], // TODO: add any others (e.g. WordPress, Google Analytics)
    results: [
      { value: "+28%", label: "Organic web traffic" },
      { value: "8", label: "Blog posts published" },
      { value: "5", label: "YouTube videos produced" },
    ],
    resultsNote: "January – September 2026.",
    videos: [
      // TODO: paste the ID from youtube.com/watch?v=THIS_PART
      { title: "TODO: GreenPortfolio video title", platform: "youtube", id: "TODO" },
      { title: "TODO: GreenPortfolio video title", platform: "youtube", id: "TODO" },
    ],
    linksHeading: "Writing samples",
    links: [
      // TODO: replace with your real articles
      { title: "TODO: exact title (fiduciary advisors post)", description: "TODO: one-sentence summary.", url: "https://example.com" },
      { title: "TODO: exact title (advisor fees post)", description: "TODO: one-sentence summary.", url: "https://example.com" },
      { title: "TODO: exact title (choosing a climate-savvy advisor post)", description: "TODO: one-sentence summary.", url: "https://example.com" },
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
  // You wrote 8 posts. Add the rest by copying a block.
  {
    title: "TODO: exact title (fiduciary advisors post)",
    excerpt: "TODO: a two-sentence excerpt that makes a reader want to click through.",
    date: "2026-02-01", // TODO: real date (YYYY-MM-DD)
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
  {
    title: "TODO: exact title (advisor fees post)",
    excerpt: "TODO: a two-sentence excerpt that makes a reader want to click through.",
    date: "2026-03-01", // TODO: real date (YYYY-MM-DD)
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
  {
    title: "TODO: exact title (choosing a climate-savvy advisor post)",
    excerpt: "TODO: a two-sentence excerpt that makes a reader want to click through.",
    date: "2026-05-01", // TODO: real date (YYYY-MM-DD)
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
  {
    title: "TODO: exact title (midlife wealth planning post)",
    excerpt: "TODO: a two-sentence excerpt that makes a reader want to click through.",
    date: "2026-07-01", // TODO: real date (YYYY-MM-DD)
    publication: "GreenPortfolio Blog",
    url: "https://example.com", // TODO
  },
];

/* ---------- Videos ----------------------------------------------------
   Never upload video files to this project; host them on YouTube,
   Vimeo, or Instagram and paste the ID here (see the Video type above).
   --------------------------------------------------------------------- */
export const videos: Video[] = [
  { title: "TODO: GreenPortfolio video title", platform: "youtube", id: "TODO", description: "Blog post turned into a YouTube video with Google Vids and an AI voiceover." },
  { title: "TODO: FenDoDo reel title", platform: "instagram", id: "TODO", description: "AI-generated reel made with Higgsfield AI for @fendodo_." },
];

/* ---------- Skills & Tools ------------------------------------------- */
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Marketing",
    items: ["Digital Marketing", "Social Media Marketing", "Content Marketing", "SEO", "Google Ads", "Business Development", "Referral Programs", "Market Research", "Consumer Behavior", "Excel"],
  },
  {
    group: "Content & Design",
    items: ["Short-form Video", "Blog Writing", "Canva", "Google Vids", "Instagram", "FL Studio (Music Production)"],
  },
  {
    group: "AI Tools",
    items: ["Higgsfield AI", "Gemini", "Perplexity", "AI Voiceover (Google Vids)"],
  },
  {
    group: "Languages",
    items: ["English (Native)", "Mandarin Chinese (Native)"],
  },
];
