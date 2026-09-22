import type { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import HackathonsSection from "@/components/section/hackathons-section";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.02;

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div>
      <section className="content-section about-hero">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="hero-headline">
            I&apos;m a designer, builder, &amp; leader—optimizing for fun.
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="hero-bio">
            <p>
              I think deeply about people, products, and the future of
              technology and AI. Currently having the most fun exploring
              creative technology and agentic engineering.
            </p>
            <p>
              Open to contract work starting August 2026. If you&apos;re
              working on something cool,{" "}
              <a href={`mailto:${DATA.contact.email}`}>let&apos;s chat!</a>
            </p>
            <p>
              Outside of design, engineering, and being a computer science
              student, I&apos;m:
            </p>
            <ul>
              <li>building and leading tech communities on campus</li>
              <li>debating</li>
              <li>hiking</li>
              <li>volunteering</li>
            </ul>
            <p>
              To befriend me or hire me, reach out on{" "}
              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              or by{" "}
              <a href={`mailto:${DATA.contact.email}`}>email</a>—can&apos;t
              wait to meet you!
            </p>
          </div>
        </BlurFade>
      </section>

      <section className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <HackathonsSection />
        </BlurFade>
      </section>

      <section className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
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
    </div>
  );
}
