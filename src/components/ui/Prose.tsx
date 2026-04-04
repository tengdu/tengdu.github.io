export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose max-w-none prose-headings:font-semibold prose-img:rounded-xl"
      style={{
        "--tw-prose-body": "var(--foreground)",
        "--tw-prose-headings": "var(--foreground)",
        "--tw-prose-links": "var(--accent)",
        "--tw-prose-bold": "var(--foreground)",
        "--tw-prose-counters": "var(--muted)",
        "--tw-prose-bullets": "var(--muted)",
        "--tw-prose-quotes": "var(--foreground)",
        "--tw-prose-quote-borders": "var(--border)",
        "--tw-prose-code": "var(--foreground)",
        "--tw-prose-pre-bg": "var(--card)",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
