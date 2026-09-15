import { DATA } from "@/data/resume";

export default function HeroTimeline() {
  return (
    <ul className="hero-timeline">
      {DATA.work.map((job) => (
        <li key={job.company} className="hero-timeline-item">
          <span className="hero-timeline-year">
            {job.start.match(/\d{4}/)?.[0] ?? job.start}
          </span>
          <p className="hero-timeline-company">{job.company}</p>
          <p className="hero-timeline-role">{job.title}</p>
        </li>
      ))}
    </ul>
  );
}
