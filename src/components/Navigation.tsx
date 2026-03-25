"use client";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Our Story", href: "#story" },
  { label: "The Day", href: "#details" },
  { label: "Gallery", href: "#gallery" },
  { label: "RSVP", href: "#rsvp" },
  { label: "Guest Guide", href: "https://jesse-katherine.vercel.app/", external: true },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Outer wrapper: fixed, full width, holds the morphing inner bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center">
        <nav
          className="w-full flex items-center justify-between"
          style={{
            maxWidth: scrolled ? "min(90%, 960px)" : "100%",
            marginTop: scrolled ? "12px" : "0px",
            padding: scrolled ? "10px 28px" : "16px 24px",
            background: scrolled
              ? "rgba(255, 255, 255, 0.75)"
              : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
            borderRadius: scrolled ? "9999px" : "0px",
            border: scrolled
              ? "1px solid rgba(197, 165, 114, 0.2)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 4px 30px rgba(0, 0, 0, 0.08)"
              : "none",
            transition:
              "max-width 400ms ease-in-out, margin 400ms ease-in-out, padding 400ms ease-in-out, background-color 400ms ease-in-out, backdrop-filter 400ms ease-in-out, -webkit-backdrop-filter 400ms ease-in-out, border-radius 400ms ease-in-out, border-color 400ms ease-in-out, box-shadow 400ms ease-in-out",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`font-display text-xl transition-colors duration-400 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            J <span className="italic text-gold">&</span> K
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, link.href) }
                )}
                className={`link-underline font-ui text-[11px] uppercase tracking-[0.25em] transition-colors duration-400 ${
                  scrolled ? "text-charcoal" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block h-px w-6 transition-all duration-300 ${
                  scrolled ? "bg-charcoal" : "bg-white"
                } ${
                  menuOpen
                    ? i === 0
                      ? "translate-y-[5px] rotate-45"
                      : i === 1
                      ? "opacity-0"
                      : "-translate-y-[5px] -rotate-45"
                    : ""
                }`}
              />
            ))}
          </button>
        </nav>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[99] flex items-center justify-center bg-soft-black transition-opacity duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e, link.href) }
              )}
              className="font-ui text-sm uppercase tracking-[0.3em] text-white link-underline"
              style={{
                transitionDelay: menuOpen ? `${i * 80}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s, transform 0.4s",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
