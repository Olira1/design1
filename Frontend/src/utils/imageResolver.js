const imageModules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

export function resolveImagePath(imageSrc, fallback = '') {
  if (!imageSrc) return fallback

  const normalized = imageSrc
    .replace(/^\.?\.\//, '')
    .replace(/^\.?\.\.\//, '')
    .replace('assets/images/', '')

  const directKey = Object.keys(imageModules).find((key) =>
    key.endsWith(normalized),
  )

  if (directKey) return imageModules[directKey]

  const fileNameOnly = normalized.split('/').pop()
  const byName = Object.keys(imageModules).find((key) => key.endsWith(fileNameOnly))

  return byName ? imageModules[byName] : fallback
}
