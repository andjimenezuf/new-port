"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "leadership", label: "Leadership" },
  { id: "awards", label: "Awards" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const CARD_HEIGHT = 370;
const NAV_HEIGHT = 64;

export default function HeroNavMorph() {
  const scrollProgress = useMotionValue(0);
  // All three position/size values driven directly to avoid multi-MotionValue transform complexity
  const top = useMotionValue("200px");
  const leftMV = useMotionValue("16px");
  const rightMV = useMotionValue("16px");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const [measured, setMeasured] = useState(false);

  useEffect(() => {
    // Measured at mount (and on resize): match the exact content box of SectionDeck
    let heroTopPx = 200;
    let heroLeftPx = 16;
    let heroRightPx = 16;

    function measureLayout() {
      heroTopPx = Math.max(80, Math.round((window.innerHeight - CARD_HEIGHT) / 2));
      // The inner content div of SectionDeck (max-w-6xl mx-auto)
      const inner = document.querySelector("[data-section-deck] > div") as HTMLElement | null;
      if (inner) {
        const rect = inner.getBoundingClientRect();
        heroLeftPx = Math.max(0, rect.left);
        heroRightPx = Math.max(0, window.innerWidth - rect.right);
      }
      applyValues(scrollProgress.get());
      setMeasured(true);
    }

    function applyValues(p: number) {
      top.set(`${heroTopPx * (1 - p)}px`);
      leftMV.set(`${heroLeftPx * (1 - p)}px`);
      rightMV.set(`${heroRightPx * (1 - p)}px`);
    }

    measureLayout();
    window.addEventListener("resize", measureLayout);

    const container = document.querySelector("[data-section-deck]") as HTMLElement;
    if (!container) return () => window.removeEventListener("resize", measureLayout);

    function updateProgress() {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const p = Math.min(
        1,
        Math.max(0, (container.scrollTop - hero.offsetTop) / (hero.offsetHeight || window.innerHeight))
      );
      scrollProgress.set(p);
      applyValues(p);
    }

    function updateActive() {
      const center = window.innerHeight / 2;
      let nearest = "";
      let nearestDist = Infinity;
      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - center);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = id;
        }
      });
      setActiveId(nearest);
    }

    updateProgress();
    updateActive();
    container.addEventListener("scroll", updateProgress, { passive: true });
    container.addEventListener("scroll", updateActive, { passive: true });

    return () => {
      window.removeEventListener("resize", measureLayout);
      container.removeEventListener("scroll", updateProgress);
      container.removeEventListener("scroll", updateActive);
    };
  }, [scrollProgress, top, leftMV, rightMV]);

  const height = useTransform(scrollProgress, [0, 1], [`${CARD_HEIGHT}px`, `${NAV_HEIGHT}px`]);
  const borderRadius = useTransform(scrollProgress, [0, 1], ["20px", "0px"]);

  // Content cross-fade
  const heroOpacity = useTransform(scrollProgress, [0, 0.48], [1, 0]);
  const navOpacity = useTransform(scrollProgress, [0.52, 1], [0, 1]);
  const navPointerEvents = useTransform(navOpacity, (v) =>
    v > 0.5 ? "auto" : "none"
  );

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <>
      {/* pointer-events-none lets wheel events fall through to the SectionDeck underneath;
          interactive children re-enable pointer events explicitly */}
      <motion.div
        style={{ position: "fixed", top, left: leftMV, right: rightMV, zIndex: 50, visibility: measured ? "visible" : "hidden" }}
        className="pointer-events-none"
      >
        <motion.div
          style={{ height, borderRadius, overflow: "hidden" }}
          className="relative border border-slate-900/10 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/90"
        >

          {/* ── Hero layout (fades out) ── */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col justify-center px-7 py-6 sm:px-9"
          >
            <p className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-white/40">
              Hi, my name is
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Andrew Jimenez.
            </h1>

            <p className="mt-1 text-base font-semibold text-slate-500 sm:text-xl dark:text-white/60">
              I build software.
            </p>

            <p className="mt-3 max-w-xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 dark:text-white/70">
              I&apos;m a software engineer specializing in AI/ML. I&apos;m currently a student at the University of Florida, learning to create and contribute to the technological world for a better future.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 pointer-events-auto sm:mt-7">
              {NAV_SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="font-mono text-xs font-medium tracking-wide text-slate-500 transition hover:text-slate-800 dark:text-white/50 dark:hover:text-white/80"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Navbar layout (fades in) ── */}
          <motion.div
            style={{ opacity: navOpacity, pointerEvents: navPointerEvents }}
            className="absolute inset-0 flex items-center justify-between px-4 sm:px-6"
          >
            {/* Name — left */}
            <button
              onClick={() => scrollToSection("hero")}
              className="shrink-0 font-mono text-sm font-semibold tracking-wide text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-white/75"
            >
              Andrew Jimenez
            </button>

            {/* Section links — center-right (desktop) */}
            <div className="hidden items-center gap-5 lg:flex">
              {NAV_SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={cn(
                    "font-mono text-xs font-medium tracking-wide transition",
                    activeId === id
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 hover:text-slate-800 dark:text-white/50 dark:hover:text-white/80"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Right: theme + mobile menu */}
            <div className="flex shrink-0 items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-900/10 bg-white/60 text-slate-700 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 lg:hidden"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed left-0 right-0 top-16 z-50 border-b border-slate-900/8 bg-white/90 backdrop-blur-md dark:border-white/8 dark:bg-slate-950/90 lg:hidden">
          <div className="mx-auto flex flex-col px-4 py-2 sm:px-6">
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={cn(
                  "py-2.5 text-left font-mono text-sm font-medium tracking-wide transition",
                  activeId === id
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 dark:text-white/50"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
