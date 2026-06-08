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
      data-section-deck
      className={cn(
        "relative h-svh w-full snap-y snap-mandatory overflow-y-auto scroll-smooth",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
