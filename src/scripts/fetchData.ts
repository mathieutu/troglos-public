import UniqueSlugger, { slug as simpleSlug } from 'github-slugger'

import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

import { resolve } from 'node:path'
import { dirname } from 'path'
import type { Tag, TripReport } from '@/data/trips'

export const SPORTS = {
  cave: 'Spéléologie',
  canyon: 'Canyonisme',
} satisfies Record<TripReport['placeType'], string>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchTripsFromApi = async (): Promise<Record<string, any>[]> => {
  if (!process.env.APP_TROGLOS_API_URL || !process.env.APP_TROGLOS_API_KEY) {
    throw new Error('Missing APP_TROGLOS_API_URL or APP_TROGLOS_API_KEY environment variables')
  }

  return fetch(`${process.env.APP_TROGLOS_API_URL}/trip-reports`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.APP_TROGLOS_API_KEY}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Error fetching trip reports: ${res.statusText}`)
    }

    return res.json()
  })
}

const normalize = (str: string) =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const formateDateIso = (date: Date | string): string =>
  new Date(date)
    .toLocaleDateString('fr', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1')

const uniqBy = <T, K>(array: T[], keyFn: (item: T) => K): T[] => {
  const seen = new Set<K>()
  return array.filter((item) => {
    const key = keyFn(item)
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const computeTripsAndTags = (rawTrips: Record<string, any>[]): [TripReport[], Tag[]] => {
  const tripSlugger = new UniqueSlugger()

  const tags: Record<string, Tag> = {}

  const addTag = (title: string) => {
    const slug = simpleSlug(normalize(title))

    tags[slug] = {
      title,
      count: (tags[slug]?.count || 0) + 1,
      slug,
    }

    return tags[slug]
  }

  const trips = rawTrips.map((trip) => ({
    ...trip,
    tags: uniqBy(
      [
        addTag(SPORTS[trip.placeType as TripReport['placeType']]),
        addTag(trip.tripType),
        addTag(trip.place.county.replace(/\s(.*)/, '')),
        addTag(trip.place.region),
      ],
      (tag) => tag.slug
    ),
    title: trip.place.name,
    slug: tripSlugger.slug(`${formateDateIso(trip.tripDate)} ${normalize(trip.place.name)}`),
  })) as TripReport[]

  return [trips, Object.values(tags).toSorted((a, b) => b.count - a.count)]
}

const [trips, tags] = computeTripsAndTags(await fetchTripsFromApi())

const dataPath = (relativePath: string) =>
  resolve(dirname(fileURLToPath(import.meta.url)), '..', 'data', relativePath)

await Promise.all([
  fs.writeFile(dataPath('trips/list.json'), JSON.stringify(trips), 'utf-8'),
  fs.writeFile(dataPath('trips/tags.json'), JSON.stringify(tags), 'utf-8'),
])
console.log(`Fetched ${trips.length} trips and saved to ${dataPath('trips')}`)
