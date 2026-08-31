import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-chitkaar-magenta text-white hover:bg-chitkaar-magenta-dark",
  secondary:
    "bg-chitkaar-yellow text-chitkaar-black hover:bg-chitkaar-yellow-soft",
  outline:
    "border border-chitkaar-black/15 bg-transparent text-chitkaar-black hover:bg-black/5",
};

export function Button({
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    />
  );
}