// Template for every case study page. Content comes from caseStudies in data/content.ts.
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Img from "@/components/Img";
import Reveal from "@/components/Reveal";
import Metrics from "@/components/Metrics";
import VideoEmbed from "@/components/VideoEmbed";
import { caseStudies } from "@/data/content";

type Props = { params: Promise<{ slug: string }> };

// Build one page per case study ahead of time (fast + good for SEO).
export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/work/${cs.slug}` },
    openGraph: { title: cs.title, description: cs.summary, url: `/work/${cs.slug}` },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-4 border-t border-line py-12 md:grid-cols-[220px_1fr] md:gap-12">
      <h2 className="font-serif text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </Reveal>
  );
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = caseStudies.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const cs = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="mx-auto max-w-5xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
      <Link href="/#work" className="text-sm text-muted hover:text-accent">← All work</Link>

      <Reveal className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Case Study · {cs.client}</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">{cs.title}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">{cs.summary}</p>
        <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 text-sm">
          <div><dt className="text-muted">Role</dt><dd className="mt-1 font-medium">{cs.role}</dd></div>
          <div><dt className="text-muted">Timeframe</dt><dd className="mt-1 font-medium">{cs.timeframe}</dd></div>
        </dl>
      </Reveal>

      <Reveal className="mt-12">
        <Img src={cs.cover} alt={cs.coverAlt} width={1600} height={1000} priority className="aspect-[16/10] w-full rounded-2xl border border-line object-cover" />
      </Reveal>

      {/* Results first: recruiters skim for numbers */}
      <Reveal className="mt-12">
        <h2 className="sr-only">Results at a glance</h2>
        <Metrics items={cs.results} />
        {cs.resultsNote && <p className="mt-3 text-sm text-muted">{cs.resultsNote}</p>}
      </Reveal>

      <div className="mt-12">
        <Block title="The Challenge">
          <div className="space-y-4 text-lg leading-relaxed">{cs.challenge.map((p, i) => <p key={i}>{p}</p>)}</div>
        </Block>

        <Block title="My Approach">
          <ol className="space-y-4 text-lg leading-relaxed">
            {cs.approach.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Tools Used">
          <ul className="flex flex-wrap gap-2">
            {cs.tools.map((t) => <li key={t} className="rounded-full border border-line bg-card px-4 py-2 text-sm">{t}</li>)}
          </ul>
        </Block>

        <Block title="Results">
          <Metrics items={cs.results} size="sm" />
          {cs.resultsNote && <p className="mt-3 text-sm text-muted">{cs.resultsNote}</p>}
        </Block>

        {(cs.videos?.length || cs.images?.length) ? (
          <Block title="Visuals">
            {cs.videos && cs.videos.length > 0 && (
              <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {cs.videos.map((v, i) => <VideoEmbed key={i} video={v} />)}
              </div>
            )}
            {cs.images && cs.images.length > 0 && (
              <div className="mt-10 space-y-8">
                {cs.images.map((img) => (
                  <figure key={img.src}>
                    <Img src={img.src} alt={img.alt} width={1600} height={1000} className="w-full rounded-2xl border border-line" />
                    {img.caption && <figcaption className="mt-2 text-sm text-muted">{img.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </Block>
        ) : null}

        {cs.links && cs.links.length > 0 && (
          <Block title={cs.linksHeading ?? "Links"}>
            <ul className="space-y-4">
              {cs.links.map((l, i) => (
                <li key={i}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-line bg-card p-5 transition-colors hover:border-accent">
                    <p className="font-serif text-lg font-semibold group-hover:text-accent">{l.title} <span aria-hidden="true">↗</span></p>
                    {l.description && <p className="mt-1 text-muted">{l.description}</p>}
                  </a>
                </li>
              ))}
            </ul>
          </Block>
        )}
      </div>

      {next.slug !== cs.slug && (
        <Link href={`/work/${next.slug}`} className="group mt-8 block rounded-2xl bg-accent-soft p-8 transition-colors">
          <p className="text-sm text-muted">Next case study</p>
          <p className="mt-2 font-serif text-2xl font-semibold group-hover:text-accent">{next.title} →</p>
        </Link>
      )}
    </article>
  );
}
