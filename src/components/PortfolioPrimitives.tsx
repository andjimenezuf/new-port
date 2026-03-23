import { cn } from "@/lib/utils";
import { ShuffleText } from "@/components/ui/shuffle-text";

type SectionShellProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "flex min-h-[100svh] snap-start snap-always scroll-mt-0 items-center py-8 sm:py-10",
        className
      )}
    >
      <div className="max-h-[calc(100svh-8rem)] w-full overflow-y-auto pr-1">
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", align === "center" && "text-center")}>
      <div
        className={cn(
          "h-px w-20 bg-gradient-to-r from-transparent via-foreground/40 to-transparent",
          align === "center" && "mx-auto"
        )}
      />
      <ShuffleText
        as="h2"
        text={title}
        className="text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white"
      />
      {subtitle ? (
        <p className="max-w-3xl text-base leading-8 text-black/72 dark:text-white/72">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "panel-surface rounded-[1.75rem] p-7 [&_.text-muted-foreground]:text-[var(--panel-muted)] sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[color:var(--panel-muted)]">
      {children}
    </p>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="panel-surface-soft inline-flex rounded-full px-3 py-1 font-mono text-sm text-[color:var(--panel-muted)]">
      {children}
    </span>
  );
}

export function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <ShuffleText
      as="h1"
      text={String(children)}
      className="max-w-4xl text-6xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-7xl"
    />
  );
}
