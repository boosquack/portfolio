import Link from "next/link";
import { DATA } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-credit">
          Designed + coded by {DATA.name}
        </p>

        <div className="site-footer-social">
          {Object.entries(DATA.contact.social)
            .filter(([, social]) => social.navbar)
            .map(([name, social]) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Visit"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={name}
                >
                  <IconComponent className="h-4 w-4" />
                </Link>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
