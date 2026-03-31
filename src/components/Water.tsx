/**
 * Water Component
 * Displays "water" with the Ocean Hand Writing Water Font (Caveat)
 * Used to highlight water-related words with visual emphasis
 */

interface WaterProps {
  capitalize?: boolean;
  className?: string;
}

export const Water = ({ capitalize = false, className = "" }: WaterProps) => {
  const text = capitalize ? "Water" : "water";
  return (
    <span className={`font-water text-[1.1em] leading-tight font-bold ${className}`}>
      {text}
    </span>
  );
};
