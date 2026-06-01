import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '../../data/navigation'
import Button from '../ui/Button'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent font-display text-sm font-bold text-cream">
            A
          </span>
          <span className="font-display text-xl font-semibold text-ink">
            Atelier
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#register" variant="primary" size="sm">
            Register Now
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/5 bg-cream px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-ink/80"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#register" variant="primary" className="w-full">
                Register Now
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
