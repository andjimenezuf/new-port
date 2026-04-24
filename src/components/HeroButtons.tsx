"use client";

import { StarButton } from "@/components/ui/star-button";

const quickLinks = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function HeroButtons() {
  const lightColor = "#f2d6a2";

  return (
    <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-3">
      <StarButton
        href="#about"
        lightColor={lightColor}
        className="h-7 w-full rounded-3xl px-2 text-[0.62rem] text-slate-900 sm:h-10 sm:w-auto sm:px-4 sm:text-sm dark:text-slate-50"
      >
        About Me
      </StarButton>
      {quickLinks.map((link) => (
        <StarButton
          key={link.href}
          href={link.href}
          lightColor={lightColor}
          className="h-7 w-full rounded-3xl px-2 text-[0.62rem] text-slate-700 sm:h-10 sm:w-auto sm:px-4 sm:text-sm dark:text-slate-100"
        >
          {link.label}
        </StarButton>
      ))}
    </div>
  );
}
