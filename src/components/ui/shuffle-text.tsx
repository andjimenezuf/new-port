"use client";

import { type ElementType, type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ShuffleTextProps<T extends ElementType> = {
  as?: T;
  text: string;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

export function ShuffleText<T extends ElementType = "span">({
  as,
  text,
  className,
  ...props
}: ShuffleTextProps<T>) {
  const Component = (as ?? "span") as ElementType;

  return <Component className={cn("font-mono", className)} {...props}>{text}</Component>;
}
