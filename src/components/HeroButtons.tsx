"use client";

import { StarButton } from "@/components/ui/star-button";

const quickLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
];

export default function HeroButtons() {
  const lightColor = "#d7e4ff";

  return (
    <div className="flex flex-wrap gap-3">
      <StarButton href="#about" lightColor={lightColor} className="rounded-3xl">
        About Me
      </StarButton>
      {quickLinks.map((link) => (
        <StarButton
          key={link.href}
          href={link.href}
          lightColor={lightColor}
          className="rounded-3xl text-muted-foreground"
        >
          {link.label}
        </StarButton>
      ))}
    </div>
  );
}
