import Link from "next/link";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div>
      <h2 className="section-title">Contact</h2>
      <p className="section-desc">Let&apos;s connect and create something together.</p>
      <p className="text-muted-foreground max-w-md leading-relaxed mb-6" style={{ fontSize: '14px' }}>
        Want to chat? Reach out on{" "}
        <Link
          href={DATA.contact.social.LinkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:underline underline-offset-2"
        >
          LinkedIn
        </Link>
        .
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {Object.entries(DATA.contact.social)
            .filter(([_, social]) => social.navbar)
            .map(([name, social]) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={name}
                >
                  <IconComponent className="h-4 w-4" />
                </Link>
              );
            })}
        </div>

        <div className="flex flex-col items-end gap-0.5">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {DATA.name}.
          </p>
          <p className="text-muted-foreground/50 text-xs">
            Designed with passion
          </p>
        </div>
      </div>
    </div>
  );
}
