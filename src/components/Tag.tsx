import Link from 'next/link'
import type { Tag as TagType } from '@/data/trips'
interface Props {
  tag: TagType
}

export const Tag = ({ tag }: Props) => {
  return (
    <Link href={`/sorties/tags/${tag.slug}`} className="link mr-3 text-sm font-medium uppercase">
      {tag.title}
    </Link>
  )
}
