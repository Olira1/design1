import { Sparkles } from 'lucide-react'

export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-ink/70 uppercase shadow-sm backdrop-blur-sm">
      <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden />
      {children}
    </span>
  )
}
