"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

const REGISTRIES = [
  {
    name: "Honeymoon Fund",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Registry() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1100px] px-6 md:px-16 text-center">
        <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
          Gifts
        </p>
        <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-charcoal mb-6">
          Our <em className="text-sage-dark">Registry</em>
        </h2>
        <p className="reveal stagger-3 mx-auto max-w-lg font-body text-lg text-charcoal/70 mb-16">
          Your presence at our wedding is the greatest gift of all. However, if
          you wish to honor us with a gift, we&apos;d love contributions toward our honeymoon.
        </p>

        <div className="flex justify-center">
          <a
            href="https://venmo.com/u/katherine-adu-bonsu"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal stagger-1 card-hover cursor-pointer rounded-sm border border-charcoal/5 bg-warm-white p-10 md:px-20 text-center group"
          >
            <div className="mb-5 flex justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="font-display text-lg text-charcoal mb-3">
              Honeymoon Fund
            </h3>
            <span className="font-ui text-[10px] uppercase tracking-[0.2em] text-sage link-underline group-hover:text-gold transition-colors">
              Contribute via Venmo
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
