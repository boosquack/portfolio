import BlurFade from "@/components/magicui/blur-fade";
import HeroTimeline from "@/components/hero-timeline";
import { DATA } from "@/data/resume";
import ProjectsSection from "@/components/section/projects-section";

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section id="hero" className="hero-row">
        <div className="flex flex-col w-full gap-4">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <h1 className="hero-headline">
              I&apos;m Josh, an AI engineer who <em>designs</em>.
            </h1>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <HeroTimeline />
        </BlurFade>
      </section>

      {/* Projects */}
      <section id="projects" className="content-section" style={{ paddingTop: 0 }}>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <ProjectsSection />
        </BlurFade>
      </section>
    </div>
  );
}
