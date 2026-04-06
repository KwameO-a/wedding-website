"use client";
import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const FAQS = [
  {
    q: "What is the dress code?",
    a: "We invite you to dress in formal or black-tie optional attire. Think elegant summer — light fabrics, soft colors, and garden-party sophistication. We kindly ask guests to avoid wearing white or ivory.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, complimentary parking is available at the venue. There will be clear signage directing you to the designated parking areas. For those preferring not to drive, we recommend arranging a taxi or using the shuttle service we'll be providing from nearby hotels.",
  },
  {
    q: "Can I bring a plus one?",
    a: "Due to limited capacity, we are only able to accommodate those guests named on the invitation. If you have been given a plus one, it will be indicated on your invitation. We appreciate your understanding.",
  },
  {
    q: "Are children welcome?",
    a: "While we adore your little ones, our wedding will be an adults-only celebration. We hope this gives you the opportunity to enjoy a night off and celebrate with us worry-free!",
  },
  {
    q: "When should I RSVP by?",
    a: "Please RSVP by April 30, 2026 so we can finalise all arrangements. You can respond using the RSVP form above or by returning the enclosed response card with your invitation.",
  },
];

export default function FAQ() {
  const ref = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-[800px] px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
            Questions
          </p>
          <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-charcoal">
            Frequently <em className="text-sage-dark">Asked</em>
          </h2>
        </div>

        <div className="space-y-0">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`reveal stagger-${Math.min(i + 1, 5)} border-b border-charcoal/10`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-lg md:text-xl text-charcoal pr-4">
                  {faq.q}
                </span>
                <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span className="absolute h-px w-4 bg-charcoal" />
                  <span
                    className={`absolute h-4 w-px bg-charcoal transition-transform duration-300 ${
                      openIndex === i ? "rotate-90" : ""
                    }`}
                  />
                </span>
              </button>
              <div
                className={`faq-answer ${openIndex === i ? "open" : ""}`}
                style={{ paddingBottom: openIndex === i ? "1.5rem" : 0 }}
              >
                <p className="font-body text-base text-charcoal/60">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
