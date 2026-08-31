import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-chitkaar-magenta text-white hover:bg-chitkaar-magenta-dark",
  secondary:
    "bg-chitkaar-yellow text-foreground hover:bg-chitkaar-yellow-soft",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface-muted",
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