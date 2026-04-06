"use client";
import Image from "next/image";
import useScrollReveal from "@/hooks/useScrollReveal";

type Item = { label: string; src: string; position?: string };

const ITEMS: Item[] = [
  { label: "The First Look", src: "/couple.jpeg", position: "30% center" },
  { label: "Golden Hour", src: "/starring.jpeg", position: "center 30%" },
  { label: "The Proposal", src: "/hugging.jpeg", position: "center 30%" },
  { label: "Amalfi Dreams", src: "/look-into-eye.jpeg", position: "65% center" },
  { label: "Morning Light", src: "/couple.jpeg", position: "30% center" },
  { label: "City Nights", src: "/starring.jpeg", position: "center 30%" },
  { label: "Together Always", src: "/hugging.jpeg", position: "center 30%" },
  { label: "Adventure Calls", src: "/look-into-eye.jpeg", position: "65% center" },
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
                style={{ objectPosition: item.position || "center" }}
                className="object-cover transition-transform duration-500 ease-out hover:scale-[1.06]"
                sizes="320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
