import { SiteHeader } from "./components/site/SiteHeader";
import { Hero } from "./components/site/Hero";
import { Projects } from "./components/site/Projects";
import { SiteFooter } from "./components/site/SiteFooter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Projects />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FlockOfGeese.dev",
            url: "https://flockofgeese.dev/",
            description:
              "A small indie software studio building useful, well-crafted apps.",
          }),
        }}
      />
    </div>
  );
}
