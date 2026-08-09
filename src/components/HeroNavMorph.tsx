"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
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
const HERO_SIDE_GAP = 24;
const HERO_IMAGE_URL = "/CLRSTK_2026.png";

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
        heroLeftPx = Math.max(0, rect.left + HERO_SIDE_GAP);
        heroRightPx = Math.max(0, window.innerWidth - rect.right + HERO_SIDE_GAP);
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
  const heroImageScale = useTransform(scrollProgress, [0, 0.58], [1, 0.88]);
  const heroImageY = useTransform(scrollProgress, [0, 0.58], [0, -10]);
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
          {/* Spotlight accents — same two-spotlight style used in other section cards */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(244,219,181,0.3),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(170,202,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] dark:bg-[radial-gradient(circle_at_15%_18%,rgba(244,219,181,0.08),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(124,166,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />

          {/* ── Hero layout (fades out) ── */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col justify-center px-6 py-5 sm:px-10 sm:py-7 lg:px-12 lg:py-8"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_88px] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_132px] sm:gap-8 lg:grid-cols-[2fr_1fr] lg:gap-x-10 lg:gap-y-4">
              <div className="min-w-0">
                <p className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.22em] text-slate-400 dark:text-white/40">
                  Hi, my name is
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                  Andrew Jimenez.
                </h1>

                <p className="mt-1 text-base font-semibold text-slate-500 sm:text-xl dark:text-white/60">
                  I build software.
                </p>
              </div>

              <motion.div
                style={{
                  scale: heroImageScale,
                  y: heroImageY,
                }}
                className="relative aspect-[4/5] w-[88px] justify-self-end overflow-hidden rounded-2xl opacity-90 shadow-lg ring-1 ring-black/10 sm:w-[132px] lg:row-span-2 lg:my-auto lg:aspect-auto lg:h-[280px] lg:w-[224px] lg:justify-self-end dark:ring-white/15"
              >
                <Image
                  src={HERO_IMAGE_URL}
                  alt="Andrew Jimenez"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 132px, 88px"
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="col-span-2 min-w-0 lg:col-span-1 lg:col-start-1 lg:row-start-2">
                <p className="max-w-2xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 dark:text-white/70">
                  I&apos;m a software engineer specializing in AI/ML. I&apos;m currently a student at the University of Florida, learning to create and contribute to the technological world for a better future.
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 pointer-events-auto sm:mt-7 sm:gap-x-5">
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
              </div>
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
