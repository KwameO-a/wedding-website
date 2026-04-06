"use client";
import Image from "next/image";
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
              <Image
                src="/couple.jpeg"
                alt="Jesse and Katherine"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
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
                It started with a <em className="text-sage-dark font-medium italic">chance encounter</em> at
                a friend&apos;s gathering on a warm summer evening in 2020. What
                began as casual conversation quickly became hours of talking,
                laughing, and discovering a connection neither of us expected.
              </p>
              <p className="reveal stagger-4">
                Two years of adventures, quiet mornings, and building a life
                together led to a sunset proposal on the cliffs of the Amalfi
                Coast. With tears of joy and hearts overflowing, the answer was
                a resounding <em className="text-sage-dark font-medium italic">yes</em>.
              </p>
              <p className="reveal stagger-5">
                Now, surrounded by the people we love most, we&apos;re ready to
                begin the <em className="text-sage-dark font-medium italic">greatest adventure</em> of all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
