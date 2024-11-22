import Link from 'next/link'

import { cn } from '@/lib/utils'

interface HeaderLinksProps {
  activeId: string
  href: string
  name: string
}

export function HeaderLinks({ activeId, href, name }: HeaderLinksProps) {
  return (
    <Link
      href={`/${href}`}
      className={cn(
        'inline-block py-2 leading-6 duration-300 md:font-semibold',
        activeId === href ? 'text-yellow' : 'text-white hover:text-yellow',
      )}
    >
      {name}
    </Link>
  )
}
