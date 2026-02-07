/* eslint-disable @next/next/no-img-element */
import { DATA } from "@/data/resume";

export default function HackathonsSection() {
  return (
    <div>
      <h2 className="section-title">Hackathons</h2>
      <p className="section-desc">Competitions and events I&apos;ve participated in.</p>
      <div>
        {DATA.hackathons.slice(0, 8).map((hackathon, index) => (
          <div
            key={hackathon.title + hackathon.dates}
            className={`list-item ${index > 0 ? 'border-t border-border/40' : ''}`}
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-medium" style={{ fontSize: '15px' }}>{hackathon.title}</h3>
              <p className="text-muted-foreground mt-1 line-clamp-2" style={{ fontSize: '14px' }}>
                {hackathon.description}
              </p>
            </div>
            <span className="font-mono-meta text-muted-foreground flex-shrink-0">{hackathon.dates.match(/\d{4}/)?.[0]}</span>
          </div>
        ))}
        {DATA.hackathons.length > 8 && (
          <p className="font-mono-meta text-muted-foreground pt-4">
            + {DATA.hackathons.length - 8} more hackathons
          </p>
        )}
        <p className="font-mono-meta text-muted-foreground/60 pt-6 italic">
          More to come...
        </p>
      </div>
    </div>
  );
}
