"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

const ITEMS = [
  { label: "The First Look", src: "/couple.jpeg" },
  { label: "Golden Hour", src: "/starring.jpeg" },
  { label: "The Proposal", src: "/hugging.jpeg" },
  { label: "Amalfi Dreams", src: "/look-into-eye.jpeg" },
  { label: "Morning Light", src: "/couple.jpeg" },
  { label: "City Nights", src: "/starring.jpeg" },
  { label: "Together Always", src: "/hugging.jpeg" },
  { label: "Adventure Calls", src: "/look-into-eye.jpeg" },
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
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.06]"
                sizes="320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
