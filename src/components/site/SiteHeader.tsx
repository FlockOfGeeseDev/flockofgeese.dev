import { Github } from "lucide-react";
import posthog from "posthog-js";
import gooseMark from "@/assets/goose-mark.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="/" className="flex items-center gap-2 group">
          <img
            src={gooseMark}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 transition-transform group-hover:-rotate-6"
          />
          <span className="font-mono text-sm font-semibold tracking-tight">
            FlockOfGeese<span className="text-accent">.dev</span>
          </span>
        </a>
        <nav className="flex items-center gap-5 text-sm">
          <a
            href="#projects"
            className="font-mono text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => posthog.capture("projects_nav_clicked")}
          >
            Projects
          </a>
          <a
            href="https://github.com/FlockOfGeeseDev"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => posthog.capture("github_link_clicked", { location: "header" })}
          >
            <Github className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}
