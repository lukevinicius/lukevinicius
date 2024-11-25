'use client'

import Link from 'next/link'

import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'

interface LinkButtonProps {
  href: string
  title: string
  style?: string
}

export function LinkButton({ href, title, style }: LinkButtonProps) {
  return (
    <Link href={href}>
      <Button size="lg" variant="outline" className={cn(style)}>
        {title}
      </Button>
    </Link>
  )
}
