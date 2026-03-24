"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const EVENTS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    time: "3:00 PM",
    title: "The Ceremony",
    desc: "Exchange of vows at the beautiful St. Mary's Chapel, nestled among ancient oaks and wildflower meadows.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4" />
        <path d="M17.5 8H6.5a2.5 2.5 0 0 0-2.5 2.5v0c0 2.5 3 5.5 8 9 5-3.5 8-6.5 8-9v0A2.5 2.5 0 0 0 17.5 8z" />
        <path d="M12 8v11" />
      </svg>
    ),
    time: "4:30 PM",
    title: "Cocktail Hour",
    desc: "Join us on the sunlit terrace for craft cocktails, canapés, and the warmth of good company.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5.8 11.3 2 22l10.7-3.8" />
        <path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
        <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
        <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
        <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2z" />
      </svg>
    ),
    time: "6:00 PM",
    title: "Reception & Dinner",
    desc: "An evening of feasting, toasts, and dancing under a beautifully adorned marquee beneath the stars.",
  },
];

export default function EventDetails() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="details" ref={ref} className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
        <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
          The Details
        </p>
        <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-charcoal mb-16">
          Join Us for Our Celebration
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {EVENTS.map((event, i) => (
            <div
              key={event.title}
              className={`reveal stagger-${i + 1} card-hover gradient-line-top relative bg-cream rounded-sm border border-charcoal/5 p-10`}
            >
              <div className="mb-5 text-sage">{event.icon}</div>
              <span className="inline-block mb-4 rounded-full bg-gold/10 px-4 py-1 font-ui text-[10px] uppercase tracking-[0.2em] text-gold">
                {event.time}
              </span>
              <h3 className="font-display text-xl mb-3 text-charcoal">
                {event.title}
              </h3>
              <p className="font-body text-base text-charcoal/70">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
