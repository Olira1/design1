import { useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNavigationLinks } from "../../data/navigation";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";
import logo from "../../assets/images/logo.jpg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMenuOpen((open) => !open);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-soft)] bg-[var(--color-cream)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#hero"
          className="inline-flex items-center gap-2.5"
          onClick={closeMobileMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent">
            <img src={logo} alt="Atelier Logo" className="h-9 w-9" />
          </span>
          <span className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-ink)]">
            FDTC ACADEMY
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {mainNavigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/register" size="sm" variant="primary">
            Register Now
          </Button>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-[var(--color-ink)] lg:hidden"
          type="button"
          onClick={toggleMobileMenu}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-t border-[var(--color-border-soft)] bg-white lg:hidden",
          isMenuOpen ? "max-h-[420px]" : "max-h-0 border-t-0",
        )}
      >
        <ul className="space-y-1 px-4 py-4 md:px-6">
          {mainNavigationLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-blush)]/35 hover:text-[var(--color-accent)]"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button
              className="w-full"
              href="/register"
              onClick={closeMobileMenu}
            >
              Register Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
