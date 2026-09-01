const CALENDAR_API_URL =
  'https://ical.mathieutu.dev/json?urls=https%3A%2F%2Flestroglos.yaentrainement.fr%2Fcalendar%2Fical&sort=date-asc'

const EVENT_TITLE_PREFIX = /^LesTroglos:\s*/
const EVENT_URL_SUFFIX = /\s*(https:\/\/\S+)\s*$/
const REVALIDATE_SECONDS = 10 * 60

type RawCalendarEvent = {
  summary: string
  description: string
  location?: string
  start: string
  end: string
  totalHours: number
}

export type CalendarEvent = {
  summary: string
  description: string
  location?: string
  url?: string
  start: string
  end: string
}

type CalendarApiResponse = {
  events: RawCalendarEvent[]
}

const parseEvent = (event: RawCalendarEvent): CalendarEvent => {
  const url = event.description.match(EVENT_URL_SUFFIX)?.[1]

  return {
    ...event,
    summary: event.summary.replace(EVENT_TITLE_PREFIX, ''),
    description: event.description.replace(EVENT_URL_SUFFIX, '').trim(),
    url,
  }
}

export const getUpcomingEvents = async (): Promise<CalendarEvent[]> => {
  const res = await fetch(CALENDAR_API_URL, { next: { revalidate: REVALIDATE_SECONDS } })

  if (!res.ok) {
    throw new Error(`Error fetching calendar events: ${res.statusText}`)
  }

  const { events }: CalendarApiResponse = await res.json()
  const now = new Date()

  return events.filter((event) => new Date(event.start) >= now).map(parseEvent)
}
