import { cn } from "../../utils/cn";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        /*
          Tailwind purpose:
          Pill label matching your image design with solid maroon text.
        */
        "inline-flex items-center gap-2 rounded-full",
        "px-4 py-2 text-2xl font-bold bg-gradient-to-r from-[#a05269] to-[#000000] bg-clip-text text-transparent", // Set font size, bold weight, and custom maroon hex color
        className,
      )}
    >
      {/* Removed the small accent dot to exactly match the clean text layout in the image */}
      {children}
    </span>
  );
}
