"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const EVENTS = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v14M21 7v14M6 7V3h12v4M9 21v-4a3 3 0 0 1 6 0v4" />
      </svg>
    ),
    time: "Thursday, Oct 15",
    title: "Traditional Wedding",
    desc: "A beautiful Ghanaian traditional ceremony at Casa Restaurant, Kumasi — where families come together in celebration.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    time: "Saturday, Oct 17",
    title: "White Wedding",
    desc: "Exchange of vows at the iconic Saint Peter\u2019s Cathedral Basilica, one of Kumasi\u2019s most beautiful churches.",
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
    time: "Saturday, Oct 17",
    title: "Reception & Dinner",
    desc: "An evening of music, dancing, and feasting at the Greenwood Event Centre, Asokwa \u2014 celebrating with everyone we love.",
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
              <div className="mb-5 flex justify-center text-sage">{event.icon}</div>
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
