/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full aspect-video bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full aspect-video object-cover grayscale"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <article
      className={cn(
        "group flex flex-col h-full",
        className
      )}
    >
      {/* Media */}
      <Link
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden border border-border bg-muted"
      >
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full aspect-video object-cover grayscale"
          />
        ) : image ? (
          <ProjectImage src={image} alt={title} />
        ) : (
          <div className="w-full aspect-video bg-muted" />
        )}
      </Link>

      {/* Content */}
      <div className="pt-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 group/link"
            >
              <h3 className="font-medium" style={{ fontSize: '15px' }}>{title}</h3>
              <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 group-hover/link:opacity-100 transition-opacity" aria-hidden />
            </Link>
            <time className="font-mono-meta text-muted-foreground block mt-0.5">{dates}</time>
          </div>
          {links && links.length > 0 && (
            <div className="flex items-center gap-2">
              {links.map((link, idx) => (
                <Link
                  href={link.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.type}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="text-muted-foreground leading-relaxed line-clamp-3" style={{ fontSize: '14px' }}>
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-2">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="font-mono-meta text-muted-foreground/70"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="font-mono-meta text-muted-foreground/50">
                +{tags.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
