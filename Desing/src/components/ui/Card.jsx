export default function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-2xl border border-ink/8 bg-white/60 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </article>
  )
}
