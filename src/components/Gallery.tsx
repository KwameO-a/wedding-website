"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const GRADIENTS = [
  "linear-gradient(135deg, #8B9D83, #B8A0A0)",
  "linear-gradient(135deg, #C5A572, #D4A59A)",
  "linear-gradient(135deg, #D4A59A, #E2D4B7)",
  "linear-gradient(135deg, #5E7255, #8B9D83)",
  "linear-gradient(135deg, #B8A0A0, #C5A572)",
  "linear-gradient(135deg, #E2D4B7, #8B9D83)",
  "linear-gradient(135deg, #C5A572, #5E7255)",
  "linear-gradient(135deg, #D4A59A, #B8A0A0)",
];

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>();
  const allImages = [...GRADIENTS, ...GRADIENTS];

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-32 bg-cream overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-10 text-center mb-16">
        <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
          Moments
        </p>
        <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-charcoal">
          Our <em className="text-sage-dark">Gallery</em>
        </h2>
      </div>

      {/* Marquee */}
      <div className="group relative">
        <div
          className="flex gap-5 group-hover:[animation-play-state:paused]"
          style={{
            animation: "marqueeScroll 40s linear infinite",
            width: "max-content",
          }}
        >
          {allImages.map((grad, i) => (
            <div
              key={i}
              className="h-[420px] w-[320px] flex-shrink-0 overflow-hidden rounded-md transition-transform duration-500 ease-out hover:scale-[1.06]"
              style={{ background: grad }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
