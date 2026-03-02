"use client";

import { useEffect } from "react";

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

    function handleKeyDown(event: KeyboardEvent) {
      if (
        isEditableTarget(event.target) ||
        (event.key !== "ArrowDown" && event.key !== "ArrowUp")
      ) {
        return;
      }

      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      if (!sections.length) {
        return;
      }

      const currentIndex = sections.findIndex((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top >= -rect.height * 0.25 && rect.top < window.innerHeight * 0.5;
      });

      const fallbackIndex = currentIndex === -1 ? 0 : currentIndex;
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

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sectionIds]);

  return (
    <div
      className={cn(
        "h-[100svh] w-full snap-y snap-mandatory overflow-y-auto scroll-smooth",
        className
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
