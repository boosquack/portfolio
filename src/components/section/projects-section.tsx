import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.02;

function renderCard(project: (typeof DATA.projects)[number], id: number) {
  return (
    <BlurFade key={project.title} delay={BLUR_FADE_DELAY * (id + 1)}>
      <ProjectCard
        href={project.href}
        title={project.title}
        dates={project.dates}
        status={project.status}
        image={project.image}
        video={project.video}
      />
    </BlurFade>
  );
}

export default function ProjectsSection() {
  const indexed = DATA.projects.map((project, id) => ({ project, id }));
  const leftColumn = indexed.filter(({ id }) => id % 2 === 0);
  const rightColumn = indexed.filter(({ id }) => id % 2 === 1);

  return (
    <div>
      <div className="flex flex-col gap-8 sm:hidden">
        {indexed.map(({ project, id }) => renderCard(project, id))}
      </div>

      <div className="hidden items-start gap-7 sm:flex">
        <div className="flex min-w-0 flex-1 flex-col gap-8">
          {leftColumn.map(({ project, id }) => renderCard(project, id))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-8 sm:mt-14">
          {rightColumn.map(({ project, id }) => renderCard(project, id))}
        </div>
      </div>
    </div>
  );
}
