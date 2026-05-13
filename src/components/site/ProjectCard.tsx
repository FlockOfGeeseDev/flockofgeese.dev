import { ArrowRight } from "lucide-react";
import posthog from "posthog-js";
import type { Project, Integration } from "@/data/projects";

const toneClasses: Record<Integration["tone"], string> = {
  red: "bg-red-500/10 text-red-600 border-red-500/20",
  blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  orange: "bg-accent/15 text-accent border-accent/30",
  neutral: "bg-muted text-foreground border-border",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
      <div className="flex items-start gap-4">
        <img
          src={project.icon}
          alt={`${project.name} icon`}
          width={64}
          height={64}
          loading="lazy"
          className="h-16 w-16 rounded-2xl shadow-sm ring-1 ring-border/60"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{project.name}</h3>
            <span className="font-mono text-[10px] uppercase tracking-wider rounded-full border border-border bg-secondary px-2 py-0.5 text-secondary-foreground">
              {project.platform}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.tagline}</p>
        </div>
      </div>

      {project.integrations && project.integrations.length > 0 && (
        <div className="mt-6 flex items-center gap-2 flex-wrap">
          {project.integrations.map((integration, i) => (
            <div key={integration.name} className="flex items-center gap-2">
              <span
                title={integration.name}
                className={`inline-flex h-8 items-center gap-1.5 rounded-full border px-3 font-mono text-[11px] font-medium ${toneClasses[integration.tone]}`}
              >
                {integration.name}
              </span>
              {i < project.integrations!.length - 1 && (
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground animate-arrow" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-border/60 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">{project.slug}</span>
        <a
          href={project.cta.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          onClick={() =>
            posthog.capture("project_cta_clicked", {
              project_slug: project.slug,
              project_name: project.name,
              project_platform: project.platform,
              cta_label: project.cta.label,
              cta_href: project.cta.href,
            })
          }
        >
          {project.cta.label}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
