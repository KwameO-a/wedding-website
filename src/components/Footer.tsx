"use client";
import Divider from "./Divider";

export default function Footer() {
  return (
    <footer className="py-20 bg-soft-black text-center">
      {/* Heartbeat dots */}
      <div className="flex justify-center gap-3 mb-10">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-gold"
            style={{
              animation: "heartbeat 1.5s ease-in-out infinite",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <h2 className="font-display text-3xl md:text-5xl text-white mb-4">
        Jesse <span className="italic text-gold">&</span> Katherine
      </h2>

      <p className="font-ui text-[10px] uppercase tracking-[0.3em] text-white/40 mb-8">
        October 15 &amp; 17, 2026 &bull; Kumasi, Ghana
      </p>

      <Divider dark />

      <p className="mt-8 font-ui text-[10px] uppercase tracking-[0.2em] text-white/20">
        Made with love &bull; &copy; 2026 &bull; Built by{" "}
        <a
          href="https://www.linkedin.com/in/eugene-osei-adjapong-948697172/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold/60 hover:text-gold transition-colors duration-300"
        >
          Kwame
        </a>
      </p>
    </footer>
  );
}
