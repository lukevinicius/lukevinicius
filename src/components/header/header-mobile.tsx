import { DialogTitle } from '@radix-ui/react-dialog'
import { MenuIcon } from 'lucide-react'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

import { HeaderLinks } from './links'

interface HeaderMobileProps {
  activeId: string
  links: {
    name: string
    href: string
  }[]
}

export function HeaderMobile({ activeId, links }: HeaderMobileProps) {
  return (
    <Drawer>
      <DrawerTrigger className="md:hidden">
        <MenuIcon size={24} className="text-white" />
      </DrawerTrigger>
      <DrawerContent className="bg-black border-0 px-6">
        <DialogTitle className="text-white hidden">Menu</DialogTitle>

        <div className="flex flex-col items-start">
          {links.map((link) => (
            <HeaderLinks
              key={link.href}
              activeId={activeId}
              href={link.href}
              name={link.name}
            />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  )
}
