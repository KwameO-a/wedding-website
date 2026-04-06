"use client";
import { useEffect, useRef, useState } from "react";

const TRACK_URL = "/paulyudin-love-485933.mp3";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // autoplay/permission failed — keep state false
        setPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center gap-[3px] rounded-full bg-soft-black/90 shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
      aria-label={playing ? "Pause music" : "Play music"}
    >
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className="w-[3px] rounded-full bg-gold"
          style={{
            height: playing ? undefined : "4px",
            animation: playing
              ? `musicBar${bar} ${0.4 + bar * 0.15}s ease-in-out infinite`
              : "none",
            transition: "height 0.3s",
          }}
        />
      ))}
    </button>
  );
}
