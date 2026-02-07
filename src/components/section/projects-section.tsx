import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.02;

export default function ProjectsSection() {
  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <p className="section-desc">Things I&apos;ve built and explored.</p>
      <div className="projects-grid" style={{ margin: "0 calc(var(--cell-padding) * -1)", marginTop: "0" }}>
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * (id + 1)}
            className="project-card"
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={"links" in project ? project.links : undefined}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
