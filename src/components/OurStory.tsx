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
                style={{ objectPosition: "center 30%" }}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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
              Where It All <em className="text-sage-dark">Began</em>
            </h2>
            <div className="space-y-5 font-body text-lg leading-relaxed text-charcoal/80">
              <p className="reveal stagger-3">
                It all started when our paths crossed as kids in{" "}
                <em className="text-sage-dark font-medium italic">Kumasi, Ghana</em>
                — two lives briefly intersecting.
              </p>
              <p className="reveal stagger-3">
                Years later, a simple reconnection changed everything. What
                began as catching up turned into something more, filled with
                laughter, deep connection, and a love neither of us saw coming.
              </p>
              <p className="reveal stagger-4">
                From there, our story unfolded naturally — marked by shared
                experiences, traveling to new places, embracing adventures, and
                intentionally building a life side by side. With every step,
                our bond grew stronger, rooted in love, friendship, and purpose.
              </p>
              <p className="reveal stagger-4">
                In June 2025, beneath a breathtaking sunset in{" "}
                <em className="text-sage-dark font-medium italic">San Pedro, Belize</em>,
                we said <em className="text-sage-dark font-medium italic">yes</em> to forever.
              </p>
              <p className="reveal stagger-5">
                Now, we&apos;re so excited to return to where it all began —
                Kumasi — to start this next chapter together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
