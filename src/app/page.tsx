import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import LeadershipSection from "@/components/LeadershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectionDeck from "@/components/SectionDeck";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedGradient } from "@/components/ui/stripe-animated-gradient";

export default function Home() {
  const sectionIds = [
    "hero",
    "about",
    "education",
    "experience",
    "leadership",
    "awards",
    "projects",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 dark:hidden">
            <AnimatedGradient
              color1="#fcfdff"
              color2="#e8f1ff"
              color3="#d6e6ff"
              color4="#e8f1ff"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.72),transparent_24%),radial-gradient(circle_at_right,rgba(186,212,255,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(226,236,255,0.58))]" />
          </div>
          <div className="absolute inset-0 hidden dark:block">
            <AnimatedGradient
              color1="#050b16"
              color2="#0f1d31"
              color3="#18344e"
              color4="#0f1d31"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(188,220,255,0.14),transparent_20%),linear-gradient(180deg,rgba(3,8,18,0.14),rgba(3,8,18,0.74))]" />
          </div>
        </div>
        <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
          <ThemeToggle />
        </div>
        <div className="relative z-10 min-h-screen w-full">
          <SectionDeck sectionIds={sectionIds}>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <LeadershipSection />
            <AwardsSection />
            <ProjectsSection />
          </SectionDeck>
        </div>
      </div>
    </main>
  );
}
