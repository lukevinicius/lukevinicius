'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

export function Header() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveId = `#${entry.target.id}`
            // Atualiza o estado apenas se o valor for diferente
            if (newActiveId !== activeId) {
              setActiveId(newActiveId)
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [activeId])

  const links = [
    {
      name: 'Home',
      href: '#home',
    },
    {
      name: 'Sobre mim',
      href: '#about-me',
    },
    {
      name: 'Serviços',
      href: '#services',
    },
    {
      name: 'Projetos',
      href: '#projects',
    },
    {
      name: 'Clientes',
      href: '#clientes',
    },
    {
      name: 'Contato',
      href: '#contact',
    },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 bg-black py-7 border-white/10 h-[100px]">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <Link className="font-semibold text-white" href="/">
            lukevinicius.dev
          </Link>
          <HeaderDesktop activeId={activeId} links={links} />
          <HeaderMobile activeId={activeId} links={links} />
        </div>
      </div>
    </header>
  )
}
