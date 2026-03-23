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
              color1="#fffaf4"
              color2="#f4dbc0"
              color3="#eef5ff"
              color4="#dfeafb"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(244,219,181,0.42),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(170,202,255,0.28),transparent_26%),radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.94),rgba(255,255,255,0)_46%),linear-gradient(180deg,rgba(255,253,249,0.96),rgba(243,248,255,0.84))]" />
          </div>
          <div className="absolute inset-0 hidden dark:block">
            <AnimatedGradient
              color1="rgba(244,219,181,0.14)"
              color2="rgba(124,166,255,0.18)"
              color3="rgba(112,231,203,0.12)"
              color4="rgba(255,255,255,0.02)"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,219,181,0.14),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(124,166,255,0.18),transparent_26%),radial-gradient(circle_at_52%_82%,rgba(112,231,203,0.12),transparent_30%),linear-gradient(160deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
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
