"use client";

import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const mainNavItems = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#hackathons", label: "Hackathons" },
];

const moreNavItems = [
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/blog", label: "Journal" },
];

function DesktopNav() {
  const [moreOpen, setMoreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sidebar-header">
      <div className="space-y-6">
        {/* Name as home link */}
        <Link
          href="/"
          className="nav-link-highlight block text-xs font-bold uppercase text-foreground transition-colors"
          style={{ fontSize: '12px' }}
        >
          INDEX
        </Link>

        {/* Nav items */}
        <nav className="flex flex-col gap-1">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link-highlight text-xs font-bold uppercase text-muted-foreground transition-colors py-0.5 w-fit"
              style={{ fontSize: '12px' }}
            >
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={cn(
                "nav-link-highlight text-xs font-bold uppercase text-muted-foreground transition-colors flex items-center gap-1 py-0.5 cursor-pointer",
                moreOpen && "text-foreground [background:linear-gradient(to_top,#FFF9C4_50%,transparent_50%)]"
              )}
              style={{ fontSize: '12px' }}
            >
              MORE
              <ChevronDown className={cn(
                "h-3 w-3 transition-transform duration-200",
                moreOpen && "rotate-180"
              )} />
            </button>

            <div className={cn(
              "mt-1 pl-3 border-l border-border overflow-hidden transition-all duration-300 ease-out",
              moreOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            )}>
              <div className="flex flex-col gap-1 py-1">
                {moreNavItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMoreOpen(false)}
                    className="nav-link-highlight text-xs font-bold uppercase text-muted-foreground transition-all py-0.5 w-fit"
                    style={{
                      fontSize: '12px',
                      transitionDelay: moreOpen ? `${index * 50}ms` : '0ms'
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Bottom: Info text like reference */}
      <div className="flex flex-col gap-0.5 whitespace-nowrap" style={{ fontSize: '14px' }}>
        <Link href="/" className="nav-link-highlight text-foreground font-medium w-fit">
          {DATA.name}
        </Link>
        <span className="text-muted-foreground">UX Designer & Software Engineer.</span>
        <span className="text-muted-foreground">Based in {DATA.location}.</span>
        <a
          href={`mailto:${DATA.contact.email}`}
          className="text-muted-foreground hover:text-foreground transition-colors mt-2"
        >
          {DATA.contact.email}
        </a>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between h-14 px-5">
        <Link href="/" className="text-sm font-medium text-foreground">
          {DATA.name.split(" ")[0]}
        </Link>
        <div className="flex items-center gap-4">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
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
