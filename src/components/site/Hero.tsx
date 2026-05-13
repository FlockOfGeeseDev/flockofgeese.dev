import goose0 from "@/assets/geese/goose-0.png";
import goose1 from "@/assets/geese/goose-1.png";
import goose2 from "@/assets/geese/goose-2.png";
import goose3 from "@/assets/geese/goose-3.png";
import goose4 from "@/assets/geese/goose-4.png";

const FLOCK = [goose0, goose1, goose2, goose3, goose4];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft sky tint backdrop */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-[var(--sky-tint)]/40 via-background to-background"
      />
      <div className="mx-auto max-w-6xl px-5 pt-20 pb-12 sm:pt-28 sm:pb-16 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-6">
          // a small software studio
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
          A flock of ideas.
          <br />
          A gaggle of <em className="not-italic text-accent">apps</em>.
        </h1>
        <p className="mt-6 mx-auto max-w-xl text-base sm:text-lg text-muted-foreground">
          We build small, useful apps with big potential. Welcome to our{" "}
          <span className="font-mono text-foreground">nest</span> of projects.
        </p>

        <div className="relative mt-14 sm:mt-20">
          {/* Grass strip */}
          <div className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
          <ul
            className="flex items-end justify-center gap-1 sm:gap-2 mx-auto max-w-3xl"
            aria-label="A flock of friendly cartoon geese walking in a wave"
          >
            {FLOCK.map((src, i) => (
              <li key={i} className="flex-1 flex items-end justify-center">
                <img
                  src={src}
                  alt=""
                  aria-hidden
                  draggable={false}
                  className="w-full h-auto select-none animate-wave"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
