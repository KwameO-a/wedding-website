"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function OurStory() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="story" ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Image */}
          <div className="reveal stagger-1 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,157,131,0.3), rgba(197,165,114,0.2), rgba(212,165,154,0.2))",
                }}
              />
              {/* Gold border overlay */}
              <div className="absolute inset-[-1px] border border-gold-light/40 rounded-sm pointer-events-none" />
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-5 -right-5 h-[120px] w-[120px] rounded-full border border-gold/30 hidden md:block" />
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
            <div className="space-y-5 font-body text-lg leading-relaxed text-charcoal/80">
              <p className="reveal stagger-3">
                It began on a warm July evening in 2020, when two paths
                unexpectedly crossed at a friend&apos;s gathering. Emma noticed
                James&apos;s <em className="text-sage-dark font-medium italic">quiet confidence</em>, while James was
                captivated by Emma&apos;s <em className="text-sage-dark font-medium italic">effortless warmth</em>.
                What started as a lingering conversation turned into hours that
                felt like minutes.
              </p>
              <p className="reveal stagger-4">
                By December, a proper first date over candlelit dinner confirmed
                what they both already knew — this was{" "}
                <em className="text-sage-dark font-medium italic">something extraordinary</em>. From weekend
                adventures in the countryside to quiet Sunday mornings, they
                built a love rooted in laughter, kindness, and an unwavering
                sense of home in each other.
              </p>
              <p className="reveal stagger-5">
                On a golden September afternoon in 2024, surrounded by the
                rolling hills of the Cotswolds, James asked Emma to{" "}
                <em className="text-sage-dark font-medium italic">be his forever</em>. Through happy tears, she
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
