import * as React from "react";

import { cn } from "@/lib/utils";

type ParticleVariant = "default" | "snow" | "stars";

type ParticleStyle = {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  opacity?: number;
};

type ParticlesProps = {
  className?: string;
  variant?: ParticleVariant;
  style?: ParticleStyle;
  interactive?: boolean;
  customOptions?: Record<string, unknown>;
};

function buildParticles(count: number, minSize: number, maxSize: number) {
  return Array.from({ length: count }, (_, index) => {
    const progress = index / Math.max(count - 1, 1);
    const size = minSize + ((index * 7) % (maxSize - minSize + 1));

    return {
      id: index,
      left: `${(progress * 100 + (index % 3) * 7) % 100}%`,
      top: `${-18 - (index % 6) * 11}%`,
      size,
      duration: `${8 + (index % 7) * 1.35}s`,
      delay: `${(index % 7) * -1.2}s`,
      drift: `${(index % 7) * 10 - 30}px`,
      opacity: 0.24 + (index % 4) * 0.14,
    };
  });
}

export function Particles({
  className,
  variant = "default",
  style,
}: ParticlesProps) {
  const count = style?.count ?? (variant === "snow" ? 22 : 18);
  const minSize = style?.minSize ?? (variant === "snow" ? 4 : 2);
  const maxSize = style?.maxSize ?? (variant === "snow" ? 10 : 4);
  const color =
    style?.color ??
    (variant === "stars"
      ? "rgba(255,255,255,0.8)"
      : "rgba(255,255,255,0.65)");
  const particles = buildParticles(count, minSize, maxSize);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={cn(
            "absolute rounded-full will-change-transform",
            variant === "snow" ? "animate-snow-fall" : "animate-star-drift"
          )}
          style={
            {
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: style?.opacity ?? particle.opacity,
              backgroundColor: color,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
              "--particle-drift": particle.drift,
              boxShadow:
                variant === "snow"
                  ? "0 0 10px rgba(255,255,255,0.18)"
                  : "0 0 12px rgba(255,255,255,0.28)",
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
