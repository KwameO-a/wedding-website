"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const EVENTS = [
  {
    year: "July 2020",
    title: "First Meeting",
    desc: "A chance encounter at a mutual friend's summer gathering in London sparked an instant connection.",
  },
  {
    year: "December 2020",
    title: "First Date",
    desc: "Candlelit dinner at a tucked-away Italian restaurant. Hours passed like minutes.",
  },
  {
    year: "August 2022",
    title: "Moving In Together",
    desc: "A cozy flat in Notting Hill became our first home — filled with books, plants, and love.",
  },
  {
    year: "September 2024",
    title: "The Proposal",
    desc: "Surrounded by golden hour light in the Cotswolds, James asked the question. She said yes.",
  },
  {
    year: "June 2026",
    title: "Forever Begins",
    desc: "The day we've been dreaming of — surrounded by everyone we love most in this world.",
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
              {/* Dot */}
              <div className="absolute -left-8 md:-left-12 top-1 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full border-2 border-gold bg-soft-black transition-all duration-300 hover:bg-gold hover:shadow-[0_0_12px_rgba(197,165,114,0.5)]" />
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
