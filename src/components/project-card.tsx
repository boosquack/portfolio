/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full aspect-video bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full aspect-video object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  dates: string;
  status?: string;
  image?: string;
  video?: string;
}

export function ProjectCard({ title, href, dates, status, image, video }: Props) {
  const year = dates.match(/\d{4}/g)?.pop();
  const meta = status ?? (year ? `Shipped ${year}` : dates);

  const media = (
    <div className="block overflow-hidden bg-muted">
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full aspect-video object-cover"
        />
      ) : image ? (
        <ProjectImage src={image} alt={title} />
      ) : (
        <div className="w-full aspect-video bg-muted" />
      )}
    </div>
  );

  const caption = (
    <div className="flex flex-col justify-between gap-0.5 mt-1 transition-colors duration-300 ease-in-out lg:flex-row">
      <h3 className="project-card-title">{title}</h3>
      <h4 className="project-card-meta">{meta}</h4>
    </div>
  );

  if (!href) {
    return (
      <div className="flex flex-col gap-2">
        {media}
        {caption}
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2"
    >
      {media}
      {caption}
    </Link>
  );
}
