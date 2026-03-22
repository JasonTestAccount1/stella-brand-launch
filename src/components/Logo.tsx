interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "default" | "light";
}

export const Logo = ({ size = "md", showText = false, variant = "default" }: LogoProps) => {
  const sizeMap = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  const isLight = variant === "light";

  return (
    <div className="flex items-center gap-2">
      <img 
        src="/images/stella-logo.png" 
        alt="STELLA Logo" 
        className={`${sizeMap[size]} w-auto ${isLight ? "invert saturate-0 brightness-150" : ""}`}
      />
      {showText && (
        <span className={`font-display font-800 tracking-[0.15em] text-sm md:text-base ${isLight ? "text-white" : "text-foreground"}`}>
          STELLA
        </span>
      )}
    </div>
  );
};
