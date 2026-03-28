import HeroButtons from "@/components/HeroButtons";
import {
  HeroTitle,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";

export default function HeroSection() {
  return (
    <SectionShell id="hero">
      <SurfaceCard className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(244,219,181,0.34),transparent_30%),radial-gradient(circle_at_78%_20%,rgba(170,202,255,0.2),transparent_28%),linear-gradient(135deg,rgba(255,252,246,0.66),rgba(237,245,255,0.32))] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(244,219,181,0.1),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(124,166,255,0.14),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
        <div className="relative flex min-h-[36svh] items-center py-2 lg:py-4">
          <div className="max-w-4xl space-y-6">
            <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-600 dark:text-white/60">
              AI
            </p>
            <HeroTitle>Andrew Jimenez</HeroTitle>
            <p className="max-w-2xl text-base leading-7 text-slate-700 dark:text-white/72">
              I build software across AI, data, and product engineering, with a
              portfolio focused on ambitious student work, internships, and
              fast-moving technical experiments.
            </p>
            <HeroButtons />
          </div>
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
