"use client";

import {
  type ElementType,
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

const SHUFFLE_CHARS = "ABCDEFGHIJVWXYZ0123456789";
const SHUFFLE_DURATION_MS = 700;

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
  const [displayText, setDisplayText] = useState(text);
  const elementRef = useRef<HTMLElement | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    function runAnimation() {
      if (hasAnimatedRef.current) {
        return;
      }

      hasAnimatedRef.current = true;
      const start = window.performance.now();

      const animate = (now: number) => {
        const progress = Math.min((now - start) / SHUFFLE_DURATION_MS, 1);
        const revealedCount = Math.floor(progress * text.length);

        const next = text
          .split("")
          .map((char, index) => {
            if (char === " " || /[^A-Za-z0-9]/.test(char)) {
              return char;
            }

            if (index < revealedCount) {
              return text[index];
            }

            return SHUFFLE_CHARS[Math.floor(Math.random() * SHUFFLE_CHARS.length)];
          })
          .join("");

        setDisplayText(next);

        if (progress >= 1) {
          setDisplayText(text);
          return;
        }

        window.requestAnimationFrame(animate);
      };

      window.requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [text]);

  return (
    <Component
      ref={elementRef}
      className={cn("font-mono", className)}
      {...props}
    >
      {displayText}
    </Component>
  );
}
