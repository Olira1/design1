import { useMemo, useState } from 'react'
import { courseOptions } from '../../data/courses'
import sideImage from '../../assets/images/evan.png'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const inputClasses =
  'w-full rounded-xl border border-[var(--color-border-soft)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?[0-9]{8,15}$/
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || ''

function getRegistrationApiUrl() {
  if (!apiBaseUrl) return '/api/register'
  return `${apiBaseUrl.replace(/\/$/, '')}/api/register`
}

function normalizeFormValues(formData) {
  return {
    fullName: String(formData.get('fullName') || '').trim(),
    phone: String(formData.get('phone') || '')
      .replace(/[\s()-]/g, '')
      .trim(),
    email: String(formData.get('email') || '').trim(),
    gender: String(formData.get('gender') || '').trim(),
    age: Number(formData.get('age')),
    city: String(formData.get('city') || '').trim(),
    course: String(formData.get('course') || '').trim(),
    level: String(formData.get('level') || '').trim(),
    schedule: String(formData.get('schedule') || '').trim(),
    message: String(formData.get('message') || '').trim(),
    source: String(formData.get('source') || '').trim(),
  }
}

export default function RegistrationSection() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const statusClasses = useMemo(() => {
    if (status.type === 'success') {
      return 'border border-emerald-300 bg-emerald-50 text-emerald-700'
    }
    if (status.type === 'error') {
      return 'border border-red-300 bg-red-50 text-red-700'
    }
    return ''
  }, [status.type])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'idle', message: '' })

    const form = event.currentTarget
    const payload = normalizeFormValues(new FormData(form))

    if (!emailRegex.test(payload.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }

    if (!phoneRegex.test(payload.phone)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid phone number (8-15 digits, optional +).',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(getRegistrationApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        const firstError = result?.errors?.[0]?.message
        throw new Error(firstError || result?.message || 'Registration failed. Please try again.')
      }

      setStatus({
        type: 'success',
        message: 'Registration submitted successfully. We will contact you soon.',
      })
      form.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Registration failed. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="bg-[#f6f7fa] px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-white shadow-[0_18px_45px_rgba(24,27,38,0.12)]">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 md:p-8 lg:p-10">
            <SectionHeading
              align="left"
              eyebrow="Begin Your Journey"
              title="Register Now"
              description="Fill in the form and our team will reach out within 24 hours."
            />

            <form
              className="mt-8 space-y-5 rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-cream)] p-6 md:p-8"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-5 md:grid-cols-2">
            <label className="md:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Full Name
              </span>
              <input className={inputClasses} name="fullName" placeholder="Your full name" required type="text" />
            </label>

            <label className="md:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Email Address
              </span>
              <input
                className={inputClasses}
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Phone Number
              </span>
              <input className={inputClasses} name="phone" placeholder="+252 ..." required type="tel" />
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Gender
              </span>
              <select className={inputClasses} defaultValue="" name="gender" required>
                <option value="" disabled>
                  Select gender
                </option>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Age
              </span>
              <input className={inputClasses} min="10" name="age" placeholder="Your age" required type="number" />
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                City
              </span>
              <input className={inputClasses} name="city" placeholder="Your city" required type="text" />
            </label>

            <label className="md:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Course Interested In
              </span>
              <select className={inputClasses} defaultValue="" name="course" required>
                <option value="" disabled>
                  Choose a course
                </option>
                {courseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Skill Level
              </span>
              <select className={inputClasses} defaultValue="" name="level" required>
                <option value="" disabled>
                  Select level
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>

            <label>
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Preferred Schedule
              </span>
              <select className={inputClasses} defaultValue="" name="schedule" required>
                <option value="" disabled>
                  Select schedule
                </option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Weekend</option>
              </select>
            </label>
              </div>

              <label>
                <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                  Why do you want to join?
                </span>
                <textarea
                  className={inputClasses}
                  name="message"
                  placeholder="Tell us briefly..."
                  rows={4}
                />
              </label>

              <fieldset>
                <legend className="text-sm font-medium text-[var(--color-ink)]">
                  Where did you hear about us?
                </legend>
                <div className="mt-2 flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
                  {['TikTok', 'Telegram', 'Instagram', 'Facebook', 'Friend', 'Other'].map(
                    (source, index) => (
                      <label key={source} className="inline-flex items-center gap-2">
                        <input
                          defaultChecked={index === 0}
                          name="source"
                          type="radio"
                          value={source}
                        />
                        {source}
                      </label>
                    ),
                  )}
                </div>
              </fieldset>

              <Button className="w-full md:w-auto" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </Button>

              {status.type !== 'idle' ? (
                <p className={`rounded-xl px-4 py-3 text-sm font-medium ${statusClasses}`}>
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>

          <div className="relative hidden min-h-[680px] lg:block">
            <img
              src={sideImage}
              alt="Fashion student working at a sewing station"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
