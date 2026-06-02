import { courseOptions } from '../../data/courses'
import Button from '../ui/Button'
import SectionHeading from '../ui/SectionHeading'

const inputClasses =
  'w-full rounded-xl border border-[var(--color-border-soft)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-accent)]'

export default function RegistrationSection() {
  return (
    <section id="register" className="bg-white px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Begin Your Journey"
          title="Register Now"
          description="Fill in the form and our team will reach out within 24 hours."
        />

        <form
          className="mt-12 space-y-5 rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-cream)] p-6 md:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="md:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">
                Full Name
              </span>
              <input className={inputClasses} name="fullName" placeholder="Your full name" required type="text" />
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

          <Button className="w-full md:w-auto" type="submit">
            Submit Registration
          </Button>
        </form>
      </div>
    </section>
  )
}
