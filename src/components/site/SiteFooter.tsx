import { Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-10">
      <div className="mx-auto max-w-6xl px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} FlockOfGeese.dev — made with care.
        </p>
        <a
          href="https://github.com/FlockOfGeeseDev"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
