'use client'

import 'aos/dist/aos.css'

import { useEffect } from 'react'

import AOS from 'aos'

import { AboutMe } from '@/components/about-me'
import { Experience } from '@/components/experience'
import { HomeComponent } from '@/components/home'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Skills } from '@/components/skills'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: 'ease-in-out-sine',
      delay: 0,
    })
  })

  return (
    <>
      <HomeComponent />
      <AboutMe />
      <Services />
      <Experience />
      <Skills />
      <Projects />
    </>
  )
}
