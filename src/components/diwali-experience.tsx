"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export const DIWALI_EXPERIENCE_CONFIG = {
  timezone: "Asia/Kolkata",
  startsAt: "2026-11-07T00:00:00+05:30",
  endsAt: "2026-11-10T00:00:00+05:30",
  welcomeStorageKey: "zaid-diwali-2026-welcome-seen",
} as const;

const startsAt = Date.parse(DIWALI_EXPERIENCE_CONFIG.startsAt);
const endsAt = Date.parse(DIWALI_EXPERIENCE_CONFIG.endsAt);

function Diya({ reduceMotion }: { reduceMotion: boolean }) {
  const [lit, setLit] = useState(false);
  const [sparkId, setSparkId] = useState(0);

  const lightDiya = () => {
    setLit((wasLit) => !wasLit);
    setSparkId(Date.now());
    window.setTimeout(() => setSparkId(0), 900);
  };

  return (
    <button
      type="button"
      onClick={lightDiya}
      aria-label={lit ? "Relight the Diwali diya" : "Light the Diwali diya"}
      aria-pressed={lit}
      className={`diwali-diya relative flex size-14 items-center justify-center rounded-full border border-amber-400/25 bg-background/85 shadow-lg shadow-amber-500/10 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-amber-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${lit ? "diwali-diya-lit" : ""}`}
    >
      <svg viewBox="0 0 48 48" className="size-10 overflow-visible" aria-hidden="true">
        <ellipse cx="24" cy="40" rx="13" ry="2.5" fill="#b7791f" opacity=".55" />
        <path
          d="M11 29c2 7 6 10 13 10s11-3 13-10c-8 2-18 2-26 0Z"
          fill="#c88728"
          stroke="#e7b454"
          strokeWidth="1.5"
        />
        <path d="M18 28c2-2 5-2 7 0" fill="none" stroke="#f6d28b" strokeWidth="1.4" />
        <path
          d="M24 25c-7-5-3-12 1-18 1 5 8 8 5 15-.7 1.5-2.5 2.6-6 3Z"
          fill={lit ? "#fff4b0" : "#ffd477"}
          stroke="#fff1bd"
          strokeWidth="1"
          className={reduceMotion ? "" : "diwali-flame"}
        />
        <path d="M25 23c-2-3 0-5 1-7 2 3 3 5 1 7Z" fill="#ff9b45" />
      </svg>
      {sparkId !== 0 && (
        <span className="pointer-events-none absolute inset-0" key={sparkId} aria-hidden="true">
          {Array.from({ length: 8 }, (_, index) => (
            <span
              key={index}
              className={`diwali-spark ${reduceMotion ? "diwali-spark-static" : ""}`}
              style={{ "--spark-angle": `${index * 45}deg` } as React.CSSProperties}
            />
          ))}
        </span>
      )}
    </button>
  );
}

export function DiwaliExperience() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [welcomeOpen, setWelcomeOpen] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    let checkedWelcome = false;

    const updateWindow = () => {
      const now = Date.now();
      const isActive = now >= startsAt && now < endsAt;
      setActive(isActive);

      if (isActive && !checkedWelcome) {
        checkedWelcome = true;
        try {
          if (!window.localStorage.getItem(DIWALI_EXPERIENCE_CONFIG.welcomeStorageKey)) {
            window.localStorage.setItem(DIWALI_EXPERIENCE_CONFIG.welcomeStorageKey, "shown");
            setWelcomeOpen(true);
          }
        } catch {
          setWelcomeOpen(true);
        }
      }

      const nextBoundary = now < startsAt ? startsAt : isActive ? endsAt : undefined;
      if (nextBoundary !== undefined) {
        timer = window.setTimeout(updateWindow, Math.max(0, nextBoundary - now));
      }
    };

    updateWindow();
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!welcomeOpen) return;
    const timer = window.setTimeout(() => setWelcomeOpen(false), 14_000);
    return () => window.clearTimeout(timer);
  }, [welcomeOpen]);

  if (!active) return null;

  return (
    <>
      <div className="diwali-ambience pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
        <span className="diwali-glow diwali-glow-top" />
        <span className="diwali-glow diwali-glow-bottom" />
        {Array.from({ length: 12 }, (_, index) => (
          <span
            className={`diwali-dust ${reduceMotion ? "diwali-dust-static" : ""}`}
            key={index}
            style={{
              "--dust-x": `${8 + ((index * 37) % 86)}%`,
              "--dust-y": `${8 + ((index * 23) % 82)}%`,
              "--dust-delay": `${(index % 6) * -1.4}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-4 z-40 sm:right-6">
        <Diya reduceMotion={!!reduceMotion} />
      </div>

      <AnimatePresence>
        {welcomeOpen && (
          <motion.aside
            role="status"
            aria-live="polite"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: "easeOut" }}
            className="fixed right-4 top-4 z-50 w-[min(22rem,calc(100vw-2rem))] rounded-2xl border border-amber-400/30 bg-background/95 p-5 shadow-xl shadow-amber-950/10 backdrop-blur-xl sm:right-6 sm:top-6"
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">
                  A little light for your visit
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight">✨ Happy Diwali! 🪔</h2>
              </div>
              <button
                type="button"
                onClick={() => setWelcomeOpen(false)}
                className="-mr-2 -mt-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close Diwali greeting"
              >
                <span aria-hidden="true" className="text-xl leading-none">×</span>
              </button>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Wishing you light, happiness, fresh beginnings, and ideas that shine brighter every day.
            </p>
            <p className="mt-4 border-t border-border/70 pt-3 font-mono text-xs text-foreground/80">
              With light &amp; good vibes, Zaid
            </p>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
