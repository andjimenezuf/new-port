"use client";

import { AnimatedGradient } from "@/components/ui/stripe-animated-gradient";

export default function StripeGradientDemoSection() {
  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-muted-foreground">
          Background Test
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          Stripe Animated Gradient
        </h2>
      </div>
      <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950 shadow-[0_24px_100px_-48px_rgba(0,0,0,0.65)]">
        <AnimatedGradient
          color1="#5b8cff"
          color2="#ff5d8f"
          color3="#6fffe9"
          color4="#ffd166"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%),linear-gradient(180deg,rgba(5,10,20,0.1),rgba(5,10,20,0.45))]" />
        <div className="relative z-10 flex h-full items-end p-8 sm:p-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.28em] text-white/70">
              Preview Only
            </p>
            <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Motion-heavy background option
            </h3>
            <p className="max-w-xl text-sm leading-6 text-white/75 sm:text-base">
              This is an isolated test block so you can judge whether this
              gradient should replace the current page background or stay as a
              separate visual section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
