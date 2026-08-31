import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border border-chitkaar-teal/20 bg-chitkaar-teal-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-chitkaar-teal-dark ${className}`.trim()}
      {...props}
    />
  );
}