// The home page. Content comes from data/content.ts — edit that file, not this one.
import Link from "next/link";
import Img from "@/components/Img";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Metrics from "@/components/Metrics";
import VideoEmbed from "@/components/VideoEmbed";
import { site, hero, about, experience, caseStudies, socialPosts, writing, videos, skills } from "@/data/content";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent";

function formatDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function Home() {
  return (
    <>
      {/* 1. HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-[1.4fr_1fr] md:pb-24 md:pt-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{hero.eyebrow}</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{site.name}</h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted sm:text-2xl">{hero.positioning}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className={btnPrimary}>View Resume</a>
            <Link href="/#contact" className={btnSecondary}>Contact Me</Link>
          </div>
        </Reveal>
        <Reveal delay={150} className="mx-auto w-full max-w-[260px] sm:max-w-sm">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] bg-accent-soft" aria-hidden="true" />
            <Img src={hero.headshot} alt={hero.headshotAlt} width={900} height={1125} priority className="aspect-[4/5] w-full rounded-[1.75rem] object-cover" />
          </div>
        </Reveal>
      </section>

      {/* 2. ABOUT */}
      <Section id="about" eyebrow="About" title="Hi, I'm Jimmy.">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed">
            {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>
          <Reveal delay={100}>
            <dl className="divide-y divide-line rounded-2xl border border-line bg-card">
              {about.facts.map((f) => (
                <div key={f.label} className="px-6 py-4">
                  <dt className="text-xs uppercase tracking-wider text-muted">{f.label}</dt>
                  <dd className="mt-1 font-medium">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      {/* 3. EXPERIENCE */}
      <Section id="experience" eyebrow="Experience" title="What I've been doing">
        <ol className="space-y-6">
          {experience.map((job) => (
            <li key={job.company}>
              <Reveal>
                <article className="rounded-2xl border border-line bg-card p-6 sm:p-8">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-serif text-2xl font-semibold">{job.role}</h3>
                    <p className="text-sm text-muted">{job.dates}</p>
                  </div>
                  <p className="mt-1 font-medium text-accent">
                    {job.companyUrl ? <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{job.company}</a> : job.company}
                    <span className="font-normal text-muted"> · {job.location}</span>
                  </p>
                  <p className="mt-3 text-muted">{job.summary}</p>
                  <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                    <ul className="list-disc space-y-2 pl-5 marker:text-accent">
                      {job.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                    {job.metrics && <Metrics items={job.metrics} size="sm" />}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* 4. FEATURED WORK */}
      <Section id="work" eyebrow="Featured Work" title="Case studies" intro="A closer look at the challenge, my approach, and the results behind my work.">
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link href={`/work/${cs.slug}`} className="group block h-full overflow-hidden rounded-2xl border border-line bg-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/5">
                <Img src={cs.cover} alt={cs.coverAlt} width={1200} height={750} className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                <div className="p-6 sm:p-7">
                  <p className="text-sm text-muted">{cs.client} · {cs.timeframe}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold">{cs.title}</h3>
                  <p className="mt-3 text-muted">{cs.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.tags.map((t) => <span key={t} className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">{t}</span>)}
                  </div>
                  <p className="mt-6 text-sm font-medium text-accent">Read case study <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span></p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. SOCIAL MEDIA WORK */}
      <Section id="social" eyebrow="Social Media" title="Posts I've created" intro="Reels and carousel posts I created for @fendodo_, written in Mandarin for students and parents in Taiwan. Swipe the carousels or play the reels right here.">
        <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {socialPosts.map((post, i) => (
            <Reveal key={post.instagram ?? post.image} delay={(i % 3) * 80}>
              {post.instagram ? (
                <VideoEmbed video={{ platform: "instagram", id: post.instagram, title: post.title ?? `Instagram post ${i + 1}`, description: post.caption }} />
              ) : (
                <figure>
                  {post.url ? (
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="group block" aria-label={`${post.alt} (opens the live post)`}>
                      <Img src={post.image!} alt={post.alt ?? ""} width={540} height={675} className="aspect-[4/5] w-full rounded-xl border border-line object-cover transition-opacity group-hover:opacity-90" />
                    </a>
                  ) : (
                    <Img src={post.image!} alt={post.alt ?? ""} width={540} height={675} className="aspect-[4/5] w-full rounded-xl border border-line object-cover" />
                  )}
                  {post.caption && <figcaption className="mt-2 text-sm text-muted">{post.caption}</figcaption>}
                </figure>
              )}
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-center">
          <a href="https://www.instagram.com/fendodo_/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-accent hover:underline">See more on @fendodo_ ↗</a>
        </p>
      </Section>

      {/* 6. WRITING */}
      <Section id="writing" eyebrow="Writing" title="Articles & blog posts">
        <div className="grid gap-6 md:grid-cols-2">
          {writing.map((post, i) => (
            <Reveal key={post.title + i} delay={i * 80}>
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent">
                <p className="text-xs uppercase tracking-wider text-muted">
                  {post.publication} · <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold group-hover:text-accent">{post.title}</h3>
                <p className="mt-3 flex-1 text-muted">{post.excerpt}</p>
                <p className="mt-5 text-sm font-medium text-accent">Read article ↗</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. VIDEOS */}
      <Section id="videos" eyebrow="Videos" title="Video work">
        <div className="grid items-start gap-10 md:grid-cols-2">
          {videos.map((v, i) => <Reveal key={i}><VideoEmbed video={v} /></Reveal>)}
        </div>
      </Section>

      {/* 8. SKILLS */}
      <Section id="skills" eyebrow="Skills & Tools" title="What I work with">
        <div className="grid gap-10 sm:grid-cols-2">
          {skills.map((group) => (
            <Reveal key={group.group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">{group.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((s) => <li key={s} className="rounded-full border border-line bg-card px-4 py-2 text-sm">{s}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9. RESUME */}
      <section id="resume" aria-labelledby="resume-title" className="px-5 py-12 sm:px-8">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-3xl bg-accent-soft p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 id="resume-title" className="font-serif text-3xl font-semibold">Want the one-page version?</h2>
            <p className="mt-2 text-muted">View or download my resume as a PDF.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className={btnPrimary}>View Resume</a>
            <a href={site.resume} download className={btnSecondary}>Download PDF</a>
          </div>
        </Reveal>
      </section>

      {/* 10. CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's talk" intro="I'm looking for marketing internship opportunities. The best way to reach me is email. I usually reply within a day.">
        <Reveal className={`grid gap-4 ${site.instagram ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
          {[
            { label: "Email", value: site.email, href: `mailto:${site.email}` },
            { label: "LinkedIn", value: "Connect on LinkedIn", href: site.linkedin },
            { label: "Instagram", value: "Follow on Instagram", href: site.instagram },
          ].filter((c) => c.href).map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent"
            >
              <p className="text-xs uppercase tracking-wider text-muted">{c.label}</p>
              <p className="mt-2 break-all font-medium group-hover:text-accent">{c.value}</p>
            </a>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
