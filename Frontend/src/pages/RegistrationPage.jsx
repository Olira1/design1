import logo from '../assets/images/logo.jpg'
import RegistrationSection from '../components/sections/RegistrationSection'

export default function RegistrationPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border-soft)] bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center px-4 py-4 md:px-6">
          <a href="/" aria-label="Go to home page" className="inline-flex items-center gap-2.5">
            <img src={logo} alt="FDTC Academy logo" className="h-11 w-auto object-contain" />
            <span className="text-lg font-extrabold tracking-wide text-[var(--color-ink)]">
              IQ
            </span>
          </a>
        </div>
      </header>

      <main>
        <RegistrationSection />
      </main>
    </>
  )
}
