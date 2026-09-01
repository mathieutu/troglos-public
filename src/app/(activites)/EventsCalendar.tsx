import { getUpcomingEvents } from '@/services/calendar'
import { Link } from '@/components/Link'

const EVENTS_TIME_ZONE = 'Europe/Paris'

const formatDayMonth = (date: string) => {
  const [day, month] = new Intl.DateTimeFormat('fr', {
    day: '2-digit',
    month: 'short',
    timeZone: EVENTS_TIME_ZONE,
  })
    .format(new Date(date))
    .replace('.', '')
    .split(' ')

  return { day, month }
}

const formatTime = (date: string) => {
  const [hours, minutes] = new Intl.DateTimeFormat('fr', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: EVENTS_TIME_ZONE,
    hourCycle: 'h23',
  })
    .format(new Date(date))
    .split(':')

  return `${hours}h${minutes}`
}

export async function EventsCalendar() {
  const events = await getUpcomingEvents().catch(() => null)

  if (!events?.length) return null

  return (
    <section className="relative py-16">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 id="evenements" className="scroll-mt-24 text-3xl font-bold text-white lg:text-4xl">
            Prochains Évènements
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Un aperçu des rendez-vous à venir.
          </p>
        </div>

        <ul className="space-y-3">
          {events.map((event) => {
            const { day, month } = formatDayMonth(event.start)

            const cardContent = (
              <>
                <div className="bg-primary-500/10 border-primary-500/30 flex w-14 shrink-0 flex-col items-center self-start rounded-md border py-2">
                  <span className="text-lg leading-tight font-bold text-white">{day}</span>
                  <span className="text-primary-400 text-xs font-semibold tracking-wide uppercase">
                    {month}
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-white">
                    {event.summary}{' '}
                    <span className="text-xs font-normal text-gray-400">
                      {formatTime(event.start)}
                    </span>
                  </h3>
                  {event.location && (
                    <p className="truncate text-xs text-gray-400">{event.location}</p>
                  )}
                  {event.description && (
                    <p title={event.description} className="line-clamp-2 text-xs text-gray-300">
                      {event.description}
                    </p>
                  )}
                </div>
              </>
            )

            return (
              <li key={`${event.summary}-${event.start}`}>
                {event.url ? (
                  <Link
                    href={event.url}
                    className="from-primary-900/20 border-primary-500/20 hover:from-primary-900/40 hover:border-primary-500/40 flex items-start gap-4 rounded-lg border bg-linear-to-r to-transparent p-4 backdrop-blur-sm transition-all duration-300"
                  >
                    {cardContent}
                  </Link>
                ) : (
                  <div className="from-primary-900/20 border-primary-500/20 flex items-start gap-4 rounded-lg border bg-linear-to-r to-transparent p-4 backdrop-blur-sm">
                    {cardContent}
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
