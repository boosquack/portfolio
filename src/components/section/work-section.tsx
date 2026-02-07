"use client";

import { useState } from "react";
import { DATA } from "@/data/resume";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function WorkSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div>
      {DATA.work.map((work, index) => (
        <div
          key={work.company}
          className="list-item flex-col cursor-pointer"
          onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
        >
          <div className="flex items-start justify-between gap-4 w-full">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium" style={{ fontSize: '15px' }}>{work.company}</span>
                <ChevronRight
                  className={cn(
                    "h-3 w-3 text-muted-foreground transition-transform duration-200",
                    expandedIndex === index && "rotate-90"
                  )}
                />
              </div>
              <p className="text-muted-foreground mt-0.5" style={{ fontSize: '14px' }}>
                {work.title}
              </p>
            </div>
            <span className="font-mono-meta text-muted-foreground flex-shrink-0">
              {work.start}–{work.end ?? "Present"}
            </span>
          </div>

          <div
            className={cn(
              "overflow-hidden transition-all duration-200 w-full",
              expandedIndex === index ? "max-h-96 pt-3" : "max-h-0"
            )}
          >
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: '14px' }}>
              {work.description}
            </p>
            {work.href && (
              <Link
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-block mt-3 font-mono-meta text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
              >
                Visit {work.company}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
