"use client";
import { useEffect, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

const WEDDING_DATE = new Date("2026-06-21T15:00:00");

function getTimeLeft() {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const ref = useScrollReveal<HTMLElement>();

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: time.days, label: "Days" },
    { value: time.hours, label: "Hours" },
    { value: time.minutes, label: "Minutes" },
    { value: time.seconds, label: "Seconds" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32 bg-warm-white">
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--color-sage), transparent)" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
          Counting the Days
        </p>
        <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-charcoal mb-16">
          Until We Say <em className="text-sage-dark">I Do</em>
        </h2>

        <div className="flex justify-center gap-6 md:gap-12">
          {units.map((unit, i) => (
            <div key={unit.label} className={`reveal stagger-${i + 1}`}>
              <div className="font-display text-[3rem] md:text-[5.5rem] leading-none text-sage-dark">
                {mounted ? String(unit.value).padStart(unit.label === "Days" ? 3 : 2, "0") : "\u00A0"}
              </div>
              <div className="mt-2 font-ui text-[9px] uppercase tracking-[0.3em] text-dusty-mauve">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
