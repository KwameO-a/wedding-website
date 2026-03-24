"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const ITEMS = [
  { label: "The First Look", gradient: "linear-gradient(135deg, #8B9D83, #5E7255)" },
  { label: "Golden Hour", gradient: "linear-gradient(135deg, #D4A59A, #B8A0A0)" },
  { label: "The Proposal", gradient: "linear-gradient(135deg, #C5A572, #A68B5B)" },
  { label: "Amalfi Dreams", gradient: "linear-gradient(135deg, #B8A0A0, #8B9D83)" },
  { label: "Morning Light", gradient: "linear-gradient(135deg, #5E7255, #C5A572)" },
  { label: "City Nights", gradient: "linear-gradient(135deg, #D4A59A, #C5A572)" },
  { label: "Together Always", gradient: "linear-gradient(135deg, #8B9D83, #D4A59A)" },
  { label: "Adventure Calls", gradient: "linear-gradient(135deg, #C5A572, #8B9D83)" },
];

export default function Gallery() {
  const ref = useScrollReveal<HTMLElement>();
  const allItems = [...ITEMS, ...ITEMS];

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
          {allItems.map((item, i) => (
            <div
              key={i}
              className="gallery-item h-[420px] w-[320px] flex-shrink-0 overflow-hidden rounded-sm relative"
            >
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-500 ease-out hover:scale-[1.06]"
                style={{ background: item.gradient }}
              >
                <span className="font-display text-xl italic text-white/70">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
