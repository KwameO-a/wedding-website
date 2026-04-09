"use client";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function ParallaxQuote2() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative flex h-[50vh] items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #3D3D3D, #5E7255, #C5A572)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
        <blockquote className="reveal stagger-1 font-display italic text-[1.5rem] md:text-[2.5rem] leading-snug text-white">
          &ldquo;I have found the one whom my soul loves.&rdquo;
        </blockquote>
        <p className="reveal stagger-2 mt-6 font-ui text-[10px] uppercase tracking-[0.3em] text-gold-light">
          Song of Solomon 3:4
        </p>
      </div>
    </section>
  );
}
