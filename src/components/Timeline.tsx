"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const EVENTS = [
  {
    year: "2007",
    title: "A Childhood Memory",
    desc: "Paths crossed in Kumasi, Ghana, leaving an impression that would only grow years later.",
  },
  {
    year: "2013",
    title: "Reconnection",
    desc: "A simple message brought us back into each other\u2019s worlds, reminding us that some connections are meant to last.",
  },
  {
    year: "2017",
    title: "Together Again",
    desc: "Our first in-person reunion, filled with laughter, stories, and the excitement of rediscovering each other.",
  },
  {
    year: "2020",
    title: "First Adventure",
    desc: "Dubai, our first trip together, a magical escape in February 2020 just before the world changed forever.",
  },
  {
    year: "2023",
    title: "Moving In Together",
    desc: "Our first shared home, weekends filled with avocado toast, smoothies, and trips to the farmers market, discovering how perfectly our lives fit together.",
  },
  {
    year: "2025",
    title: "The Proposal",
    desc: "On a beautiful beach in San Pedro, Belize, a heartfelt \u201cyes\u201d that changed everything.",
  },
  {
    year: "October 2026",
    title: "Forever Begins",
    desc: "The day we celebrate our love surrounded by everyone who matters most, in the place where it all began: Kumasi, Ghana.",
  },
];

export default function Timeline() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-soft-black">
      <div className="mx-auto max-w-[800px] px-6 md:px-16">
        <h2 className="reveal stagger-1 text-center font-display text-3xl md:text-5xl text-white mb-20">
          Our <em className="text-gold">Journey</em>
        </h2>

        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gold/30" />

          {EVENTS.map((event, i) => (
            <div
              key={event.year}
              className={`reveal stagger-${Math.min(i + 1, 5)} relative mb-14 last:mb-0`}
            >
              {/* Dot — centered on the vertical line */}
              <div className="absolute -left-8 md:-left-12 top-1">
                <div className="h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-soft-black transition-all duration-300 hover:bg-gold hover:shadow-[0_0_12px_rgba(197,165,114,0.5)]" />
              </div>

              <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                {event.year}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-white mb-2">
                {event.title}
              </h3>
              <p className="font-body text-base text-white/60">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
