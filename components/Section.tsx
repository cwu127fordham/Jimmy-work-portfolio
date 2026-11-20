import Reveal from "./Reveal";

// A page section with a small label ("eyebrow") and a big heading.
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
