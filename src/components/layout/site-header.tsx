import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { MobileNav } from "./mobile-nav";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Events", href: "#events" },
  { label: "Shop", href: "#shop" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-md"
          aria-label="Chitkaar home"
        >
          <Image
            src="/brand/logo.png"
            alt="Chitkaar"
            width={2172}
            height={724}
            className="h-auto w-40 object-contain sm:w-48"
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-chitkaar-magenta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="#get-involved"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border-strong px-5 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-surface-muted"
          >
            Join Us
          </Link>

          <Link
            href="#donate"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-chitkaar-magenta px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-chitkaar-magenta-dark"
          >
            Donate
          </Link>
        </div>

        <MobileNav navigation={navigation} />
      </Container>
    </header>
  );
}