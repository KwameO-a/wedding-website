"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      {/* Hero background image */}
      <Image
        src="/hero-couple.jpeg"
        alt="Jesse and Katherine"
        fill
        priority
        className="object-cover object-[50%_40%] md:object-[center_15%]"
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Particles */}
      <Particles />

      {/* Center content */}
      <div className="relative z-10 text-center px-4" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
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
        {["Jesse", "&", "Katherine"].map((text, i) => (
          <div key={text} className="overflow-visible">
            <div
              className="overflow-hidden pt-3 -mt-3"
              style={{
                clipPath: "inset(-10px 0 0 0)",
              }}
            >
              <div
                style={{
                  animation: "clipReveal 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
                  animationDelay: `${1.8 + i * 0.2}s`,
                  transform: "translateY(100%)",
                }}
              >
                <h1
                  className={`font-display leading-[1.15] ${
                    i === 1
                      ? "text-[2.5rem] md:text-[5rem] lg:text-[6rem] italic text-gold"
                      : "text-[3rem] md:text-[6rem] lg:text-[8rem] text-white"
                  }`}
                >
                  {text}
                </h1>
              </div>
            </div>
          </div>
        ))}

        {/* Date */}
        <p
          className="mt-8 font-body text-xl md:text-2xl font-normal tracking-[0.2em] text-gold"
          style={{
            animation: "loaderLetterUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
            animationDelay: "2.6s",
            opacity: 0,
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          10.15.26 &nbsp;—&nbsp; 10.17.26
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
