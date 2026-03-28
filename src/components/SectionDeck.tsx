"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SectionDeckProps = {
  sectionIds: string[];
  children: React.ReactNode;
  className?: string;
};

export default function SectionDeck({
  sectionIds,
  children,
  className,
}: SectionDeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navSectionIds = sectionIds.slice(1);

  useEffect(() => {
    function isEditableTarget(target: EventTarget | null) {
      if (!(target instanceof HTMLElement)) {
        return false;
      }

      return (
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      );
    }

    function getSections() {
      return sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));
    }

    function updateActiveSection() {
      const sections = getSections();

      if (!sections.length) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const nearestIndex = sections.reduce((closestIndex, section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        const closestRect = sections[closestIndex].getBoundingClientRect();
        const closestDistance = Math.abs(
          closestRect.top + closestRect.height / 2 - viewportCenter
        );

        return distance < closestDistance ? index : closestIndex;
      }, 0);

      setActiveIndex(nearestIndex);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (
        isEditableTarget(event.target) ||
        (event.key !== "ArrowDown" && event.key !== "ArrowUp")
      ) {
        return;
      }

      const sections = getSections();

      if (!sections.length) {
        return;
      }

      const fallbackIndex = activeIndex;
      const nextIndex =
        event.key === "ArrowDown"
          ? Math.min(fallbackIndex + 1, sections.length - 1)
          : Math.max(fallbackIndex - 1, 0);

      if (nextIndex === fallbackIndex) {
        return;
      }

      event.preventDefault();
      sections[nextIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    const container = containerRef.current;

    updateActiveSection();
    container?.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      container?.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, sectionIds]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-[100svh] w-full snap-y snap-mandatory overflow-y-auto scroll-smooth",
        className
      )}
    >
      <div className="pointer-events-none fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 xl:flex">
        <div className="pointer-events-auto flex flex-col gap-3">
          {navSectionIds.map((id, index) => {
            const sectionIndex = index + 1;
            const isActive = activeIndex === sectionIndex;

            return (
              <button
                key={id}
                type="button"
                onClick={() => {
                  document.getElementById(id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={cn(
                  "text-right font-mono text-xs font-semibold tracking-[0.24em] text-foreground/35 transition hover:text-foreground/78",
                  isActive && "text-foreground"
                )}
                aria-label={`Jump to section ${index + 1}`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            );
          })}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
