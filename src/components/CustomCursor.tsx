"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const animate = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      requestAnimationFrame(animate);
    };

    const hoverTargets = "a, button, .faq-question, .gallery-item, .detail-card, .registry-item";

    const onOver = () => ring.classList.add("hover");
    const onOut = () => ring.classList.remove("hover");

    const addHoverListeners = () => {
      document.querySelectorAll(hoverTargets).forEach((el) => {
        el.addEventListener("mouseenter", onOver);
        el.addEventListener("mouseleave", onOut);
      });
    };

    window.addEventListener("mousemove", onMove);
    animate();
    addHoverListeners();

    // Re-add listeners when DOM changes (e.g. navigation)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
