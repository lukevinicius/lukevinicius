import fotoPessoal from '@/assets/fotopessoal.svg'
import Image from 'next/image'

import { AboutMe } from '@/components/about-me'
import { Experience } from '@/components/experience'
import { Services } from '@/components/services'
import { Skills } from '@/components/skills'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className="pt-[100px] relative">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className="flex flex-col flex-wrap items-center gap-5 lg:flex-row">
              <div className="w-full lg:w-1/2">
                <div className="py-16 md:py-24 w-full">
                  <p className="font-semibold text-lg p-2.5 bg-emerald-200 inline-block text-emerald-700">
                    Olá! Eu sou Lucas vinicius.
                  </p>
                  <p className="font-bold text-3xl/normal md:text-[50px]/normal text-black mt-8">
                    Web developer
                  </p>
                  <p className="text-zinc-500 mt-6">
                    Eu sou um desenvolvedor de software que gosta de criar
                    coisas para a web.
                  </p>
                  <div className="flex flex-wrap gap-5 mt-10">
                    <Button size="lg" className="mt-8">
                      Contrate-me
                    </Button>
                    <Button size="lg" variant="outline" className="mt-8">
                      Download CV
                    </Button>
                  </div>

                  <div className="grid grid-cols-2 gap-5 pt-12 md:pt-20 md:gap-12">
                    <div className="text-center">
                      <p className="text-2xl font-semibold text-zinc-900">
                        25+
                      </p>
                      <p className="text-zinc-500">Projetos feitos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-semibold text-zinc-900">4+</p>
                      <p className="text-zinc-500">Anos de experiência</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(#994ff5,#ffc41f)] max-w-[800px] md:top-[100px] lg:absolute bottom-0 right-0 lg:w-6/12 w-full">
                <p className="max-w-2xl mx-auto mt-5 text-5xl font-extrabold text-center text-transparent uppercase md:text-7xl lg:text-8xl bg-gradient-to-b from-white/70 bg-clip-text">
                  Lucas vinicius
                </p>
                <div>
                  <Image
                    src={fotoPessoal}
                    alt="Foto pessoal"
                    className="inset-x-0 bottom-0 mx-auto -mt-16 lg:absolute md:mt-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutMe />
      <Services />
      <Experience />
      <Skills />
    </>
  )
}
