"use client";
import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";

type Event = {
  id: string;
  weekday: string;
  day: string;
  month: string;
  year: string;
  title: string;
  dateLong: string;
  time: string;
  venue: string;
  address: string;
};

const EVENTS: Event[] = [
  {
    id: "traditional",
    weekday: "Thu",
    day: "15",
    month: "Oct",
    year: "2026",
    title: "The Traditional Wedding",
    dateLong: "15 October 2026",
    time: "10:00 — 16:00",
    venue: "Casa",
    address: "Kumasi, Ghana",
  },
  {
    id: "white",
    weekday: "Sat",
    day: "17",
    month: "Oct",
    year: "2026",
    title: "The White Wedding",
    dateLong: "17 October 2026",
    time: "11:00 — 14:00",
    venue: "Saint Peter's Cathedral Basilica",
    address: "Kumasi, Ghana",
  },
  {
    id: "reception",
    weekday: "Sat",
    day: "17",
    month: "Oct",
    year: "2026",
    title: "Reception & Dinner",
    dateLong: "17 October 2026",
    time: "18:00 — 23:00",
    venue: "Greenwood Event Center",
    address: "Asokwa, Kumasi",
  },
];

type Status =
  | "pending"
  | "accepted"
  | "declined"
  | "submitting"
  | "submitted-accept"
  | "submitted-decline"
  | "error";

const ENDPOINT = process.env.NEXT_PUBLIC_RSVP_ENDPOINT || "";

export default function RSVP() {
  const ref = useScrollReveal<HTMLElement>();
  const [selectedId, setSelectedId] = useState<string>(EVENTS[0].id);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("pending");
  const [errorMsg, setErrorMsg] = useState("");

  // Accept form fields
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [dietary, setDietary] = useState("none");
  const [arrivalDate, setArrivalDate] = useState("");
  const [message, setMessage] = useState("");

  const selected = EVENTS.find((e) => e.id === selectedId)!;

  const resetForEvent = (id: string) => {
    setSelectedId(id);
    setStatus("pending");
    setErrorMsg("");
  };

  const submitToSheet = async (response: "accepted" | "declined") => {
    if (!ENDPOINT) {
      // No endpoint configured — just succeed silently for local dev
      return true;
    }
    try {
      // Use text/plain to avoid CORS preflight against Apps Script
      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          event: selected.title,
          name: name.trim(),
          response,
          email: email.trim(),
          guests: response === "accepted" ? guests : "",
          dietary: response === "accepted" ? dietary : "",
          arrivalDate: response === "accepted" ? arrivalDate : "",
          message: message.trim(),
        }),
      });
      // With no-cors we can't read the response, but the request goes through
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    if (status !== "accepted" && status !== "declined") return;

    if (status === "accepted" && !email.trim()) return;

    const responseType = status;
    setStatus("submitting");
    setErrorMsg("");

    const ok = await submitToSheet(responseType);
    if (!ok) {
      setStatus(responseType);
      setErrorMsg("Something went wrong. Please try again.");
      return;
    }

    setStatus(responseType === "accepted" ? "submitted-accept" : "submitted-decline");
  };

  return (
    <section
      id="rsvp"
      ref={ref}
      className="relative py-24 md:py-32 bg-soft-black overflow-hidden"
    >
      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[12rem] md:text-[18rem] text-white/[0.015] select-none">
          RSVP
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center mb-16">
          <p className="reveal stagger-1 font-ui text-[10px] uppercase tracking-[0.4em] text-sage mb-4">
            Will You Join Us?
          </p>
          <h2 className="reveal stagger-2 font-display text-3xl md:text-5xl text-white">
            Kindly <em className="text-dusty-rose">Respond</em>
          </h2>
        </div>

        <div className="reveal stagger-3 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* LEFT — Events list */}
          <div className="space-y-4">
            {EVENTS.map((ev) => {
              const isActive = ev.id === selectedId;
              return (
                <button
                  key={ev.id}
                  type="button"
                  onClick={() => resetForEvent(ev.id)}
                  className={`group w-full text-left rounded-sm border transition-all duration-300 ${
                    isActive
                      ? "bg-warm-white border-gold shadow-lg"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-stretch">
                    {/* Date block */}
                    <div
                      className={`flex flex-col items-center justify-center px-5 py-5 border-r ${
                        isActive
                          ? "border-charcoal/10 text-charcoal"
                          : "border-white/10 text-white/70"
                      }`}
                    >
                      <span className="font-ui text-[9px] uppercase tracking-[0.25em]">
                        {ev.weekday}
                      </span>
                      <span className="font-display text-2xl leading-none my-1">
                        {ev.day}
                      </span>
                      <span className="font-ui text-[9px] uppercase tracking-[0.25em]">
                        {ev.month} {ev.year}
                      </span>
                    </div>
                    {/* Title */}
                    <div className="flex-1 px-5 py-5 flex flex-col justify-center">
                      <h3
                        className={`font-display text-base md:text-lg uppercase tracking-[0.1em] leading-snug ${
                          isActive ? "text-charcoal" : "text-white"
                        }`}
                      >
                        {ev.title}
                      </h3>
                      {name.trim() && (
                        <p
                          className={`mt-1 font-body text-sm ${
                            isActive ? "text-charcoal/60" : "text-white/50"
                          }`}
                        >
                          {name.trim().split(" ")[0]}
                          {name.trim().split(" ").length > 1 ? " " + name.trim().split(" ").slice(-1)[0][0] + "." : ""}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — Details panel */}
          <div className="bg-warm-white rounded-sm shadow-2xl flex flex-col">
            <div className="px-8 md:px-12 pt-10 pb-8 flex-1">
              <p className="font-display text-sm uppercase tracking-[0.4em] text-charcoal/60 text-center mb-8">
                RSVP
              </p>

              <h3 className="font-display text-xl md:text-2xl uppercase tracking-[0.1em] text-charcoal mb-4">
                {selected.title}
              </h3>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sage font-ui text-[12px] uppercase tracking-[0.15em] mb-6">
                <span className="inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {selected.dateLong}
                </span>
                <span className="inline-flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {selected.time}
                </span>
              </div>

              <p className="font-body text-base text-charcoal mb-1">
                {selected.venue}
              </p>
              <p className="font-body text-base text-gold italic mb-8">
                {selected.address}
              </p>

              <div className="h-px bg-charcoal/10 mb-8" />

              {status === "submitted-accept" && (
                <div className="text-center py-6">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-charcoal mb-2">
                    Thank You, {name.split(" ")[0]}!
                  </h4>
                  <p className="font-body text-charcoal/70">
                    Your response has been received. We can&apos;t wait to celebrate with you.
                  </p>
                </div>
              )}

              {status === "submitted-decline" && (
                <div className="text-center py-6">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dusty-rose">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dusty-rose">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <h4 className="font-display text-2xl text-charcoal mb-2">
                    We&apos;ll Miss You
                  </h4>
                  <p className="font-body text-charcoal/70">
                    So sorry you won&apos;t be part of our celebration, {name.split(" ")[0]}. You&apos;ll be in our hearts on the day.
                  </p>
                </div>
              )}

              {(status === "pending" || status === "accepted" || status === "declined" || status === "submitting") && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-ui text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full border-b border-charcoal/20 bg-transparent py-3 font-display text-xl text-charcoal outline-none transition-colors focus:border-gold placeholder:text-charcoal/30 placeholder:font-body placeholder:text-base"
                      required
                    />
                  </div>

                  {/* Accept / Decline pills */}
                  <div className="flex gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setStatus("accepted")}
                      className={`flex-1 border py-3 font-ui text-[11px] uppercase tracking-[0.3em] transition-all duration-300 ${
                        status === "accepted"
                          ? "border-gold bg-gold text-white"
                          : "border-charcoal/20 text-charcoal/60 hover:border-gold hover:text-gold"
                      }`}
                    >
                      Accept
                    </button>
                    <button
                      type="button"
                      onClick={() => setStatus("declined")}
                      className={`flex-1 border py-3 font-ui text-[11px] uppercase tracking-[0.3em] transition-all duration-300 ${
                        status === "declined"
                          ? "border-dusty-rose bg-dusty-rose text-white"
                          : "border-charcoal/20 text-charcoal/60 hover:border-dusty-rose hover:text-dusty-rose"
                      }`}
                    >
                      Decline
                    </button>
                  </div>

                  {/* Accept extra fields — slides in */}
                  {status === "accepted" && (
                    <div
                      className="space-y-5 pt-4 border-t border-charcoal/10"
                      style={{ animation: "loaderLetterUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards" }}
                    >
                      <div>
                        <label className="block font-ui text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-charcoal outline-none transition-colors focus:border-gold placeholder:text-charcoal/30"
                          required
                        />
                      </div>

                      <div>
                        <label className="block font-ui text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">
                          Date of Arrival
                        </label>
                        <input
                          type="date"
                          value={arrivalDate}
                          onChange={(e) => setArrivalDate(e.target.value)}
                          min="2026-10-10"
                          max="2026-10-17"
                          className="w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-charcoal outline-none transition-colors focus:border-gold placeholder:text-charcoal/30"
                        />
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        <div>
                          <label className="block font-ui text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">
                            Number of Guests
                          </label>
                          <select
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            className="w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-charcoal outline-none focus:border-gold cursor-pointer"
                          >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-ui text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">
                            Dietary
                          </label>
                          <select
                            value={dietary}
                            onChange={(e) => setDietary(e.target.value)}
                            className="w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-charcoal outline-none focus:border-gold cursor-pointer"
                          >
                            <option value="none">No Restrictions</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="vegan">Vegan</option>
                            <option value="gluten-free">Gluten-Free</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-ui text-[10px] uppercase tracking-[0.3em] text-charcoal/60 mb-2">
                          A Note for the Couple
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={3}
                          placeholder="Optional message…"
                          className="w-full border-b border-charcoal/20 bg-transparent py-2 font-body text-charcoal outline-none transition-colors focus:border-gold resize-none placeholder:text-charcoal/30"
                        />
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Footer / Submit bar */}
            {(status === "accepted" || status === "declined" || status === "submitting") && (
              <div className="border-t border-charcoal/10 bg-charcoal/[0.02] px-8 md:px-12 py-5 flex items-center justify-between gap-4">
                {errorMsg ? (
                  <p className="font-body text-sm text-dusty-rose">{errorMsg}</p>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-3 font-ui text-[11px] uppercase tracking-[0.3em] hover:bg-soft-black transition-colors disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Submit
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
