"use client";

import { useState } from "react";
import Link from "next/link";

type NavigationItem = {
  label: string;
  href: string;
};

type MobileNavProps = {
  navigation: NavigationItem[];
};

export function MobileNav({ navigation }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-chitkaar-black/10 text-chitkaar-black transition-colors hover:bg-black/5"
      >
        <span className="sr-only">
          {open ? "Close navigation menu" : "Open navigation menu"}
        </span>

        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-black/5 bg-[#fffdf9] px-5 py-6 shadow-soft"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-black/5 py-4 text-base font-medium text-chitkaar-charcoal transition-colors hover:text-chitkaar-magenta"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex gap-3 pt-5">
              <Link
                href="#get-involved"
                onClick={closeMenu}
                className="flex min-h-11 flex-1 items-center justify-center rounded-full border border-chitkaar-black/15 px-4 py-3 text-sm font-semibold"
              >
                Join Us
              </Link>

              <Link
                href="#donate"
                onClick={closeMenu}
                className="flex min-h-11 flex-1 items-center justify-center rounded-full bg-chitkaar-magenta px-4 py-3 text-sm font-semibold text-white"
              >
                Donate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}