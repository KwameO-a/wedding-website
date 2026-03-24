"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function OurStory() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="story" ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Image */}
          <div className="reveal stagger-1 relative md:sticky md:top-32">
            <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden bg-sage/10 rounded-sm group">
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,157,131,0.3), rgba(197,165,114,0.2), rgba(212,165,154,0.2))",
                }}
              />
              {/* Gold border overlay */}
              <div className="absolute inset-3 border border-gold/30 pointer-events-none" />
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-gold-light/40 hidden md:block" />
          </div>

          {/* Text */}
          <div>
            <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
              Our Story
            </p>
            <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-charcoal mb-8">
              A Love Written in{" "}
              <em className="text-sage-dark">the Stars</em>
            </h2>
            <div className="space-y-5 font-body text-lg text-charcoal/80">
              <p className="reveal stagger-3">
                It began on a warm July evening in 2020, when two paths
                unexpectedly crossed at a friend&apos;s gathering. Emma noticed
                James&apos;s <em className="text-sage-dark">quiet confidence</em>, while James was
                captivated by Emma&apos;s <em className="text-sage-dark">effortless warmth</em>.
                What started as a lingering conversation turned into hours that
                felt like minutes.
              </p>
              <p className="reveal stagger-4">
                By December, a proper first date over candlelit dinner confirmed
                what they both already knew — this was{" "}
                <em className="text-sage-dark">something extraordinary</em>. From weekend
                adventures in the countryside to quiet Sunday mornings, they
                built a love rooted in laughter, kindness, and an unwavering
                sense of home in each other.
              </p>
              <p className="reveal stagger-5">
                On a golden September afternoon in 2024, surrounded by the
                rolling hills of the Cotswolds, James asked Emma to{" "}
                <em className="text-sage-dark">be his forever</em>. Through happy tears, she
                said yes — and so began the next beautiful chapter of their
                story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
