export const formatDateFr = (date: Date | string, options?: Intl.DateTimeFormatOptions): string =>
  new Date(date).toLocaleDateString('fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  })

export const formatDurationMinutes = (durationInMinutes: number): string => {
  const hours = Math.floor(durationInMinutes / 60)
  const minutes = durationInMinutes % 60

  if (hours && minutes) return `${hours}h${minutes.toString().padStart(2, '0')}`
  if (hours) return `${hours} h`

  return `${minutes} min`
}
