import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {site.fullName}</p>
        <div className="flex gap-5">
          <a href={`mailto:${site.email}`} className="hover:text-fg">Email</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">LinkedIn</a>
          {site.instagram && <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-fg">Instagram</a>}
        </div>
      </div>
    </footer>
  );
}
