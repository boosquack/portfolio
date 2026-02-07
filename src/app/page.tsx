/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import HackathonsSection from "@/components/section/hackathons-section";
import ProjectsSection from "@/components/section/projects-section";
import BioSection from "@/components/section/bio-section";

const BLUR_FADE_DELAY = 0.02;

export default function Page() {
  return (
    <div>
      {/* Hero Section - fluid layout */}
      <section id="hero" className="hero-section">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <p className="text-foreground leading-relaxed max-w-lg" style={{ fontSize: '18px' }}>
            I&apos;m <span className="section-title">{DATA.name}</span>, a <span className="section-title">UX Designer</span> and <span className="section-title">Software Engineer</span> blending design thinking with technical expertise to build meaningful products.
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-foreground leading-relaxed mt-4 max-w-md" style={{ fontSize: '18px' }}>
            {DATA.summary}
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="mt-12">
            <p className="text-foreground leading-relaxed" style={{ fontSize: '18px' }}>
              Enter the world of my notes.
            </p>
            <p className="leading-relaxed" style={{ fontSize: '18px' }}>
              <span className="section-title">Connect the dots to discover my process.</span>
            </p>
          </div>
        </BlurFade>
      </section>

      {/* Projects Section */}
      <section id="projects" className="content-section" style={{ paddingBottom: 0 }}>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <ProjectsSection />
        </BlurFade>
      </section>

      {/* Skills Section */}
      <section id="skills" className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
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

      {/* Hackathons Section */}
      <section id="hackathons" className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <HackathonsSection />
        </BlurFade>
      </section>

      {/* Education Section */}
      <section id="education" className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="section-title">Education</h2>
          <p className="section-desc">Where I studied and what I learned.</p>
          <div>
            {DATA.education.map((education) => (
              <div
                key={education.school}
                className="list-item"
              >
                <div className="flex-1 min-w-0">
                  <span className="font-medium block" style={{ fontSize: '15px' }}>{education.school}</span>
                  <span className="text-muted-foreground block mt-0.5" style={{ fontSize: '14px' }}>{education.degree}</span>
                </div>
                <span className="font-mono-meta text-muted-foreground">
                  {education.start}–{education.end}
                </span>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* Bio Section */}
      <section id="about" className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <BioSection />
        </BlurFade>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <ContactSection />
        </BlurFade>
      </section>
    </div>
  );
}
