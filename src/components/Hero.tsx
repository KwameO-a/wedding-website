"use client";
import { useEffect, useState } from "react";

function Particles() {
  const [particles, setParticles] = useState<
    { left: string; delay: string; duration: string; size: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, () => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${8 + Math.random() * 12}s`,
        size: 2 + Math.random() * 3,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gold/60"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            animation: `floatUp ${p.duration} ${p.delay} infinite linear`,
          }}
        />
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-soft-black">
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(139,157,131,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(197,165,114,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(212,165,154,0.08) 0%, transparent 50%)",
          animation: "heroBgScale 15s ease-in-out infinite",
        }}
      />

      {/* Particles */}
      <Particles />

      {/* Center content */}
      <div className="relative z-10 text-center px-4">
        {/* Eyebrow */}
        <p
          className="font-ui text-[10px] uppercase tracking-[0.4em] text-gold mb-8"
          style={{
            animation: "loaderLetterUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
            animationDelay: "2.2s",
            opacity: 0,
          }}
        >
          Together with their families
        </p>

        {/* Names */}
        {["Emma", "&", "James"].map((text, i) => (
          <div key={text} className="overflow-hidden">
            <div
              style={{
                animation: "clipReveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
                animationDelay: `${1.8 + i * 0.2}s`,
                transform: "translateY(100%)",
              }}
            >
              <h1
                className={`font-display leading-[0.95] ${
                  i === 1
                    ? "text-[2.5rem] md:text-[5rem] lg:text-[6rem] italic text-gold"
                    : "text-[3rem] md:text-[6rem] lg:text-[8rem] text-white"
                }`}
              >
                {text}
              </h1>
            </div>
          </div>
        ))}

        {/* Date */}
        <p
          className="mt-8 font-body text-lg md:text-xl font-light tracking-[0.15em] text-sage"
          style={{
            animation: "loaderLetterUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
            animationDelay: "2.6s",
            opacity: 0,
          }}
        >
          June Twenty-First, Two Thousand &amp; Twenty-Six
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          animation: "loaderLetterUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
          animationDelay: "3s",
          opacity: 0,
        }}
      >
        <span className="font-ui text-[9px] uppercase tracking-[0.4em] text-gold">
          Scroll
        </span>
        <div
          className="w-px bg-gold"
          style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
