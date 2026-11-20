import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="font-serif text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-block text-accent hover:underline">← Back home</Link>
    </div>
  );
}
