export function scrollToSection(id) {
  const el = document.getElementById(id.replace('#', ''))
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
