import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.02;

export default function ProjectsSection() {
  return (
    <div>
      <div className="masonry-grid">
        {DATA.projects.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * (id + 1)}
            className="masonry-item"
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              dates={project.dates}
              image={project.image}
              video={project.video}
            />
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
