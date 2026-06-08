import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import HeroNavMorph from "@/components/HeroNavMorph";
import LeadershipSection from "@/components/LeadershipSection";
import ProjectsSection from "@/components/ProjectsSection";
import SectionDeck from "@/components/SectionDeck";
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
    "contact",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0">
          {/* ── LIGHT MODE background (hidden in dark mode via dark:hidden) ── */}
          <div className="absolute inset-0 dark:hidden">
            {/* Animated base: warm whites, sandy gold, and a soft blue */}
            <AnimatedGradient
              color1="#fffdf8" /* near-white warm base */
              color2="#f4e1c6" /* sandy/peach */
              color3="#edf4ff" /* soft blue-white */
              color4="#d8a95e" /* golden amber */
            />
            {/* Static radial accents layered on top of the animation:
                - top-left:  warm sandy spot
                - top-right: cool blue spot
                - center:    subtle amber glow
                - bottom:    white fade-out so content area stays clean
                - overall:   diagonal warm→cool tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(244,219,181,0.24),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(170,202,255,0.18),transparent_26%),radial-gradient(circle_at_62%_30%,rgba(216,169,94,0.12),transparent_24%),radial-gradient(circle_at_50%_105%,rgba(255,255,255,0.76),rgba(255,255,255,0)_44%),linear-gradient(180deg,rgba(255,252,247,0.68),rgba(242,247,255,0.46))]" />
          </div>

          {/* ── DARK MODE background (hidden in light mode via hidden dark:block) ── */}
          <div className="absolute inset-0 hidden dark:block">
            {/* Animated base: deep navy, dark teal, and dark brown */}
            <AnimatedGradient
              color1="#022842" 
              color2="#1f2a35"
              color3="#343332" /* light brown */
              color4="#1b1c1e" /* dark black */
            />
            {/* Static radial accents layered on top of the animation:
                - top-left:  faint warm gold glow
                - top-right: faint blue-purple glow
                - bottom:    soft teal glow
                - overall:   dark overlay that deepens toward the bottom */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,219,181,0.12),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(124,166,255,0.16),transparent_24%),radial-gradient(circle_at_50%_82%,rgba(79,168,196,0.1),transparent_28%),linear-gradient(180deg,rgba(5,10,18,0.18),rgba(3,8,15,0.78))]" />
          </div>
        </div>
        <HeroNavMorph />
        <div className="relative z-10 min-h-screen w-full">
          <SectionDeck sectionIds={sectionIds}>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <ExperienceSection />
            <LeadershipSection />
            <AwardsSection />
            <ProjectsSection />
            <ContactSection />
          </SectionDeck>
        </div>
      </div>
    </main>
  );
}
