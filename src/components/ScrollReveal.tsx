import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback: if element is already in viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseHidden = "opacity-0";
  const baseVisible = "opacity-100 translate-x-0 translate-y-0 scale-100 blur-0";

  const directionClass = {
    up: "translate-y-5",
    left: "translate-x-8",
    right: "-translate-x-8",
    scale: "scale-[0.97]",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] blur-[3px] ${
        isVisible ? baseVisible : `${baseHidden} ${directionClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
