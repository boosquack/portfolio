import type { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import BioSection from "@/components/section/bio-section";
import HackathonsSection from "@/components/section/hackathons-section";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.02;

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <section className="content-section" style={{ paddingTop: 0 }}>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="hero-headline">
            I&apos;m {DATA.name.split(" ")[0]}, an AI +{" "}
            <em>Design</em> Engineer.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="hero-subtext">{DATA.description}</p>
        </BlurFade>
      </section>

      <section className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h2 className="section-title">Skills</h2>
          <p className="section-desc">Technologies and tools I work with.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {DATA.skills.map((skill) => (
              <span
                key={skill.name}
                className="font-mono-meta text-muted-foreground"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </BlurFade>
      </section>

      <section className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <HackathonsSection />
        </BlurFade>
      </section>

      <section className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">Where I studied and what I learned.</p>
          <div>
            {DATA.education.map((education) => (
              <div key={education.school} className="list-item">
                <div className="flex-1 min-w-0">
                  <span className="font-medium block" style={{ fontSize: "15px" }}>
                    {education.school}
                  </span>
                  <span
                    className="text-muted-foreground block mt-0.5"
                    style={{ fontSize: "14px" }}
                  >
                    {education.degree}
                  </span>
                </div>
                <span className="font-mono-meta text-muted-foreground">
                  {education.start}-{education.end}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      <section className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <BioSection />
        </BlurFade>
      </section>
    </div>
  );
}
