// Big, bold result numbers. (The label comes first in the code for screen readers,
// but flex-col-reverse shows the number on top.)
export default function Metrics({ items, size = "lg" }: { items: { value: string; label: string }[]; size?: "lg" | "sm" }) {
  return (
    <dl className={`grid gap-px overflow-hidden rounded-2xl border border-line bg-line ${size === "lg" ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2"}`}>
      {items.map((m) => (
        <div key={m.label} className="flex flex-col-reverse bg-card p-5 sm:p-6">
          <dt className="mt-1 text-sm text-muted">{m.label}</dt>
          <dd className={`font-serif font-semibold tracking-tight text-accent ${size === "lg" ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
