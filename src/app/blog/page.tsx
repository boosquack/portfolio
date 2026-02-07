import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Journal",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal",
    description: "Thoughts on software development, life, and more.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="section-title">Journal</h1>
        <p className="section-desc">
          My thoughts on software development, life, and more.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-muted-foreground text-center italic" style={{ fontSize: '15px' }}>
            Coming soon...
          </p>
        </div>
      </BlurFade>
    </section>
  );
}
