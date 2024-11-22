'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'

import { cn } from '@/lib/utils'

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

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 bg-black py-7 border-white/10 flex justify-center h-[100px]">
      <div className="md:max-w-3xl sm:max-w-2xl lg:max-w-5xl">
        <div className="flex items-center justify-center gap-7 w-full">
          <Link
            href="/#home"
            className={cn(
              'inline-block py-2 font-semibold leading-6 duration-300',
              activeId === '#home'
                ? 'text-yellow'
                : 'text-white hover:text-yellow',
            )}
          >
            Home
          </Link>
          <Link
            href="/#about-me"
            className={cn(
              'inline-block py-2 font-semibold leading-6 duration-300',
              activeId === '#about-me'
                ? 'text-yellow'
                : 'text-white hover:text-yellow',
            )}
          >
            Sobre mim
          </Link>
          <Link
            href="/#services"
            className={cn(
              'inline-block py-2 font-semibold leading-6 duration-300',
              activeId === '#services'
                ? 'text-yellow'
                : 'text-white hover:text-yellow',
            )}
          >
            Serviços
          </Link>
          <Link
            href="/"
            className={cn(
              'inline-block py-2 font-semibold leading-6 duration-300',
              activeId === '#projects'
                ? 'text-yellow'
                : 'text-white hover:text-yellow',
            )}
          >
            Projetos
          </Link>
          <Link
            href="/"
            className={cn(
              'inline-block py-2 font-semibold leading-6 duration-300',
              activeId === '#clientes'
                ? 'text-yellow'
                : 'text-white hover:text-yellow',
            )}
          >
            Clientes
          </Link>
          <Link
            href="/#contact"
            className={cn(
              'inline-block py-2 font-semibold leading-6 duration-300',
              activeId === '#contact'
                ? 'text-yellow'
                : 'text-white hover:text-yellow',
            )}
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  )
}
