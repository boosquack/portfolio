import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun",
  description: "Side projects, experiments, and things made for fun.",
  openGraph: {
    title: "Fun",
    description: "Side projects, experiments, and things made for fun.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fun",
    description: "Side projects, experiments, and things made for fun.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function FunPage() {
  return (
    <section id="fun">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="section-title">Fun</h1>
        <p className="section-desc">
          Side projects, experiments, and things made for fun.
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
