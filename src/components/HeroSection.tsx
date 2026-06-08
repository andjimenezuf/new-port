import { ChevronDown } from "lucide-react";
import { SectionShell } from "@/components/PortfolioPrimitives";

export default function HeroSection() {
  return (
    <SectionShell id="hero" className="relative">
      {/* Visual content lives in the fixed HeroNavMorph — this section is the snap anchor */}
      <div className="min-h-[50svh]" />
      <a
        href="#about"
        className="group absolute bottom-2 left-1/2 z-10 inline-flex -translate-x-1/2 flex-col items-center gap-1.5 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em] text-slate-600 transition hover:text-slate-900 sm:gap-2 sm:text-[0.72rem] sm:tracking-[0.2em] dark:text-white/62 dark:hover:text-white"
      >
        <span className="hidden sm:inline">Scroll or use arrow keys to navigate</span>
        <span className="sm:hidden">Scroll</span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-900/10 bg-white/55 transition group-hover:translate-y-1 sm:h-9 sm:w-9 dark:border-white/12 dark:bg-white/8">
          <ChevronDown className="h-4 w-4" />
        </span>
      </a>
    </SectionShell>
  );
}
