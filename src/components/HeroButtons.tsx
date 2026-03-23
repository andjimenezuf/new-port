"use client";

import { StarButton } from "@/components/ui/star-button";

const quickLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export default function HeroButtons() {
  const lightColor = "#f2d6a2";

  return (
    <div className="flex flex-wrap gap-3">
      <StarButton
        href="#about"
        lightColor={lightColor}
        className="rounded-3xl text-slate-900 dark:text-slate-50"
      >
        About Me
      </StarButton>
      {quickLinks.map((link) => (
        <StarButton
          key={link.href}
          href={link.href}
          lightColor={lightColor}
          className="rounded-3xl text-slate-700 dark:text-slate-100"
        >
          {link.label}
        </StarButton>
      ))}
    </div>
  );
}
