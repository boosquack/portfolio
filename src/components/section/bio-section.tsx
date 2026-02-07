import { DATA } from "@/data/resume";

export default function BioSection() {
  return (
    <div>
      <h2 className="section-title">Bio</h2>
      <div className="max-w-2xl space-y-6 mt-6">
        {DATA.bio.map((paragraph, index) => (
          <p
            key={index}
            className="text-foreground leading-relaxed"
            style={{ fontSize: '15px', textIndent: '2rem' }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
