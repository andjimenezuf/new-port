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
              color1="#fffdf8"
              color2="#f4e1c6"
              color3="#edf4ff"
              color4="#d8a95e"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(244,219,181,0.24),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(170,202,255,0.18),transparent_26%),radial-gradient(circle_at_62%_30%,rgba(216,169,94,0.12),transparent_24%),radial-gradient(circle_at_50%_105%,rgba(255,255,255,0.76),rgba(255,255,255,0)_44%),linear-gradient(180deg,rgba(255,252,247,0.68),rgba(242,247,255,0.46))]" />
          </div>
          <div className="absolute inset-0 hidden dark:block">
            <AnimatedGradient
              color1="#08111e"
              color2="#11243c"
              color3="#1f4e63"
              color4="#3f2e1d"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,219,181,0.12),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(124,166,255,0.16),transparent_24%),radial-gradient(circle_at_50%_82%,rgba(79,168,196,0.1),transparent_28%),linear-gradient(180deg,rgba(5,10,18,0.18),rgba(3,8,15,0.78))]" />
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
