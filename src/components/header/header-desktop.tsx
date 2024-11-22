import { HeaderLinks } from './links'

interface HeaderDesktopProps {
  activeId: string
  links: {
    name: string
    href: string
  }[]
}

export function HeaderDesktop({ activeId, links }: HeaderDesktopProps) {
  return (
    <div className="flex items-center justify-end gap-7 w-full max-md:hidden">
      {links.map((link) => (
        <HeaderLinks
          key={link.href}
          activeId={activeId}
          href={link.href}
          name={link.name}
        />
      ))}
    </div>
  )
}
