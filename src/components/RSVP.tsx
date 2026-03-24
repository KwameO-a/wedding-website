"use client";
import { useRef, useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function RSVP() {
  const ref = useScrollReveal<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const shakeField = (input: HTMLInputElement) => {
    const group = input.closest(".floating-label-group");
    if (!group) return;
    group.classList.add("shake");
    setTimeout(() => group.classList.remove("shake"), 400);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fname = form.querySelector<HTMLInputElement>('input[name="firstName"]');
    const lname = form.querySelector<HTMLInputElement>('input[name="lastName"]');
    const email = form.querySelector<HTMLInputElement>('input[name="email"]');

    if (fname && !fname.value.trim()) { shakeField(fname); fname.focus(); return; }
    if (lname && !lname.value.trim()) { shakeField(lname); lname.focus(); return; }
    if (email && !email.value.trim()) { shakeField(email); email.focus(); return; }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" ref={ref} className="relative py-24 md:py-32 bg-soft-black overflow-hidden">
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[12rem] md:text-[18rem] text-white/[0.015] select-none">
          RSVP
        </span>
      </div>

      <div className="relative mx-auto max-w-[550px] px-6 md:px-10 text-center">
        <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
          Will You Join Us?
        </p>
        <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-white mb-12">
          Kindly <em className="text-dusty-rose">Respond</em>
        </h2>

        {submitted ? (
          <div className="reveal visible flex flex-col items-center gap-6">
            <div
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold"
              style={{ animation: "checkPop 0.6s cubic-bezier(0.16,1,0.3,1) forwards" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="font-display text-2xl text-white">Thank You!</h3>
            <p className="font-body text-lg text-white/60">
              We&apos;ve received your response and can&apos;t wait to celebrate with you.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="reveal stagger-3 space-y-8 text-left">
            {/* Name row */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="floating-label-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder=" "
                  className="w-full border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold"
                />
                <label>First Name</label>
              </div>
              <div className="floating-label-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder=" "
                  className="w-full border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold"
                />
                <label>Last Name</label>
              </div>
            </div>

            {/* Email */}
            <div className="floating-label-group">
              <input
                type="email"
                name="email"
                placeholder=" "
                className="w-full border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold"
              />
              <label>Email Address</label>
            </div>

            {/* Attendance + Guests */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="floating-label-group">
                <select
                  name="attendance"
                  required
                  defaultValue=""
                  className="w-full border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold appearance-none cursor-pointer [&>option]:bg-soft-black"
                >
                  <option value="" disabled hidden />
                  <option value="accepts">Joyfully Accepts</option>
                  <option value="declines">Regretfully Declines</option>
                </select>
                <label>Attendance</label>
              </div>
              <div className="floating-label-group">
                <select
                  name="guests"
                  required
                  defaultValue=""
                  className="w-full border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold appearance-none cursor-pointer [&>option]:bg-soft-black"
                >
                  <option value="" disabled hidden />
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                </select>
                <label>Number of Guests</label>
              </div>
            </div>

            {/* Dietary */}
            <div className="floating-label-group">
              <select
                name="dietary"
                defaultValue=""
                className="w-full border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold appearance-none cursor-pointer [&>option]:bg-soft-black"
              >
                <option value="" disabled hidden />
                <option value="none">No Restrictions</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-Free</option>
                <option value="other">Other (specify in message)</option>
              </select>
              <label>Dietary Requirements</label>
            </div>

            {/* Message */}
            <div className="floating-label-group">
              <textarea
                name="message"
                rows={4}
                placeholder=" "
                className="w-full resize-none border-b border-white/15 bg-transparent py-3 font-body text-white outline-none transition-colors focus:border-gold"
              />
              <label>Your Message</label>
            </div>

            {/* Submit */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="btn-fill inline-flex items-center gap-3 border border-gold px-10 py-4 font-ui text-[11px] uppercase tracking-[0.3em] text-gold transition-colors"
              >
                <span>Send RSVP</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
