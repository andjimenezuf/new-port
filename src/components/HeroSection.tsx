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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(161,255,198,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_25%)]" />
        <div className="relative grid gap-8 lg:min-h-[36svh] lg:grid-cols-[1.9fr_0.95fr]">
          <div className="flex h-full items-center py-2 lg:py-0">
            <div className="space-y-6">
              <HeroTitle>Andrew Jimenez</HeroTitle>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                I build software across AI, data, and product engineering, with a
                portfolio focused on ambitious student work, internships, and
                fast-moving technical experiments.
              </p>
              <HeroButtons />
            </div>
          </div>
          <div className="flex h-full min-h-[14rem] lg:min-h-0">
            <div className="panel-surface-strong h-full w-full rounded-[1.75rem] p-4 sm:p-5">
              <div className="panel-surface-soft h-full rounded-[1.5rem] border-dashed p-4">
                <div className="flex h-full min-h-[10rem] items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)] px-6 text-center text-sm text-muted-foreground">
                  Photo placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
