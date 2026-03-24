"use client";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, 2800);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-soft-black"
      style={{
        animation: "loaderFadeOut 0.6s ease forwards",
        animationDelay: "2.2s",
      }}
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-3">
          {["E", "\u00A0&\u00A0", "J"].map((letter, i) => (
            <span
              key={i}
              className={`inline-block font-display text-5xl md:text-7xl ${
                i === 1 ? "italic text-gold" : "text-white"
              }`}
              style={{
                animation: "loaderLetterUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                animationDelay: `${0.3 + i * 0.2}s`,
                opacity: 0,
              }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div
          className="mx-auto mt-6 h-px bg-gold"
          style={{
            animation: "loaderLineGrow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            animationDelay: "1.2s",
            width: 0,
          }}
        />
      </div>
    </div>
  );
}
