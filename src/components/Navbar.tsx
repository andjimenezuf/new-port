"use client";

import { useEffect, useState } from "react";
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

export default function Navbar() {
  const [activeId, setActiveId] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.querySelector("[data-section-deck]") as HTMLElement;
    if (!container) return;

    function updateActive() {
      const viewportCenter = window.innerHeight / 2;
      let nearest = "";
      let nearestDist = Infinity;

      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = id;
        }
      });

      setActiveId(nearest);
    }

    updateActive();
    container.addEventListener("scroll", updateActive, { passive: true });
    return () => container.removeEventListener("scroll", updateActive);
  }, []);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-900/8 bg-white/75 backdrop-blur-md dark:border-white/8 dark:bg-slate-950/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-mono text-sm font-semibold tracking-wide text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-white/75"
        >
          Andrew Jimenez
        </button>

        <div className="hidden items-center gap-6 lg:flex">
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
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-900/10 bg-white/60 text-slate-700 transition hover:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-900/8 bg-white/90 backdrop-blur-md dark:border-white/8 dark:bg-slate-950/90 lg:hidden">
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
    </nav>
  );
}
