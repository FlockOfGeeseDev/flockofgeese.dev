import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-3">
            // 01 — projects
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Our nest of apps
          </h2>
        </div>
        <p className="hidden sm:block max-w-xs text-sm text-muted-foreground">
          Indie software, lovingly made. More hatching soon.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        {projects.length === 0 && (
          <div className="sm:col-span-2 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-12 text-center">
            <p className="font-display text-2xl font-semibold tracking-tight">
              More hatching
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              new projects landing soon
            </p>
          </div>
        )}
        {projects.length % 2 === 1 && (
          <div className="hidden sm:flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/50 p-10 text-center">
            <p className="font-display text-2xl font-semibold tracking-tight">
              More hatching
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              new projects landing soon
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
