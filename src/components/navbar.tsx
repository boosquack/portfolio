"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { href: string; label: string; external?: boolean };

const navItems: NavItem[] = [
  { href: "/", label: "Work" },
  { href: "/fun", label: "Fun" },
  { href: "/about", label: "About Me" },
  { href: "/resume.pdf", label: "Resume", external: true }, // TODO: resume PDF not yet supplied
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          href="/"
          className="site-header-name nav-link-highlight w-fit"
          data-cursor="Home"
        >
          <span className="site-header-name-text">{DATA.name}</span>
          <span className="site-header-role">AI + Design Engineer</span>
        </Link>

        <div className="site-header-end">
          <nav className="site-nav">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Open"
                  className="nav-link-highlight"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="Open"
                  className={cn(
                    "nav-link-highlight",
                    isActive(pathname, item.href) && "site-nav-active"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="site-header-actions">
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
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border">
      <div className="flex items-center justify-between h-14 px-5">
        <Link href="/" className="text-sm font-medium text-foreground">
          {DATA.name.split(" ")[0]}
        </Link>
        <div className="flex items-center gap-4">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
