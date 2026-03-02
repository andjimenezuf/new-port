import * as React from "react";

import { cn } from "@/lib/utils";

type BorderBeamProps = React.HTMLAttributes<HTMLDivElement> & {
  lightWidth?: number;
  duration?: number;
  lightColor?: string;
  borderWidth?: number;
};

export function BorderBeam({
  lightWidth = 200,
  duration = 10,
  lightColor = "#fafafa",
  borderWidth = 1,
  className,
  style,
  ...props
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
        className
      )}
      style={
        {
          "--beam-width": `${lightWidth}px`,
          "--beam-duration": `${duration}s`,
          "--beam-color": lightColor,
          "--beam-border-width": `${borderWidth}px`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      <div className="absolute inset-0 rounded-[inherit] border border-white/12" />
      <div className="border-beam absolute inset-0 rounded-[inherit]" />
    </div>
  );
}
