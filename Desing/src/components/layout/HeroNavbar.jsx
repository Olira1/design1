import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { heroNavLinks } from '../../data/navigation'
import Button from '../ui/Button'

function Logo() {
  return (
    <a href="#hero" className="flex shrink-0 items-center" aria-label="Stitch Artistry Academy home">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-pink shadow-lg shadow-accent/30">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 text-white"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12 2c2 4 6 6 6 10a6 6 0 1 1-12 0c0-4 4-6 6-10zm0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
        </svg>
      </span>
    </a>
  )
}

export default function HeroNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute inset-x-0 top-0 z-20 px-4 py-5 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {heroNavLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-display text-sm italic transition-colors md:text-base ${
                  link.active
                    ? 'text-accent-light'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#register" variant="gradient" size="sm">
            Register Now
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-4 max-w-7xl rounded-2xl border border-white/10 bg-black/80 p-4 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-3">
            {heroNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`block py-2 font-display italic ${
                    link.active ? 'text-accent-light' : 'text-white/90'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#register" variant="gradient" className="w-full">
                Register Now
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
