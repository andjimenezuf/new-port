import { FileText, Github, Mail } from "lucide-react";

import {
  SectionHeading,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";
import { StarButton } from "@/components/ui/star-button";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:andresjj252@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/andjimenezuf",
    icon: Github,
  },
  {
    label: "Resume",
    href: "https://docs.google.com/document/d/1MFxeRjtxR4kGMUvCdngKPKIOKYopW0g4BTrc4mVFuYU/edit?usp=sharing",
    icon: FileText,
  },
] as const;

export default function ContactSection() {
  return (
    <SectionShell
      id="contact"
      className="space-y-6"
      sectionNumber="07"
    >
      <SurfaceCard className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(244,219,181,0.3),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(170,202,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.02))] dark:bg-[radial-gradient(circle_at_15%_18%,rgba(244,219,181,0.08),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(124,166,255,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
        <div className="relative flex min-h-[42svh] flex-col items-center justify-center gap-8 text-center">
          <SectionHeading title="Contact" subtitle=" " align="center" />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <StarButton
                  key={link.label}
                  href={link.href}
                  lightColor="#f2d6a2"
                  className="h-12 min-w-40 rounded-full px-6 text-slate-900 dark:text-slate-50"
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noreferrer" : undefined}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </span>
                </StarButton>
              );
            })}
          </div>
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
