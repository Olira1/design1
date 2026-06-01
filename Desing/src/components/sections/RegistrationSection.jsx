import { courseOptions } from '../../data/courses'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const hearAboutOptions = [
  'TikTok',
  'Telegram',
  'Instagram',
  'Facebook',
  'Friend',
  'Other',
]

const inputClass =
  'w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'

export default function RegistrationSection() {
  return (
    <section id="register" className="bg-white px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl">
        <SectionHeading
          title="Register Now"
          description="Fill in the form and our team will reach out within 24 hours."
        />

        <form
          className="space-y-5 rounded-3xl border border-ink/8 bg-cream/40 p-6 md:p-8"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Registration submitted! Our team will contact you soon.')
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Full Name
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Phone Number
              </span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+252 ..."
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Gender
              </span>
              <select name="gender" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select gender
                </option>
                <option>Female</option>
                <option>Male</option>
                <option>Prefer not to say</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">Age</span>
              <input
                type="number"
                name="age"
                min={16}
                max={80}
                required
                placeholder="Your age"
                className={inputClass}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">City</span>
              <input
                type="text"
                name="city"
                required
                placeholder="Your city"
                className={inputClass}
              />
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Course Interested In
              </span>
              <select name="course" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Choose a course
                </option>
                {courseOptions.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Skill Level
              </span>
              <select name="level" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select level
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Preferred Schedule
              </span>
              <select name="schedule" required className={inputClass} defaultValue="">
                <option value="" disabled>
                  Select schedule
                </option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Weekend</option>
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-ink">
                Why do you want to join?
              </span>
              <textarea
                name="message"
                rows={3}
                placeholder="Tell us briefly (optional)"
                className={inputClass}
              />
            </label>
          </div>

          <fieldset>
            <legend className="mb-3 text-sm font-medium text-ink">
              Where did you hear about us?
            </legend>
            <div className="flex flex-wrap gap-4">
              {hearAboutOptions.map((opt, i) => (
                <label
                  key={opt}
                  className="flex cursor-pointer items-center gap-2 text-sm text-ink/80"
                >
                  <input
                    type="radio"
                    name="source"
                    value={opt}
                    defaultChecked={i === 0}
                    className="accent-accent"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>

          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Submit Registration
          </Button>
        </form>
      </div>
    </section>
  )
}
