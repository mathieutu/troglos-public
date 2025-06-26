import tripReportsJson from './list.json'
import tagsJson from './tags.json'

type Place = {
  city: string
  county: string
  id: string
  name: string
  region: string
}
export type Tag = {
  title: string
  count: number
  slug: string
}

type User = {
  firstName: string
  avatarUrl: string
}
export type TripReport = {
  id: string
  description: string
  place: Place
  placeType: 'cave' | 'canyon'
  quickSummary: string
  timeSpent: number
  tripDate: string
  tripType: string
  publishedAt: string
  tags: Tag[]
  author: User
  users: User[]
  title: string
  slug: string
}

export const tripsReports = tripReportsJson as TripReport[]
export const tags = tagsJson as Tag[]
