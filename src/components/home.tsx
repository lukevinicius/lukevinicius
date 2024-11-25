import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import curriculum from '@/assets/curriculumPT.pdf'
import fotoPessoal from '@/assets/fotopessoal.svg'

export function HomeComponent() {
  function handleDownloadCV() {
    console.log('Download CV')
    window.open(curriculum)
  }

  return (
    <section id="home" className="pt-[100px] relative">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="flex flex-col flex-wrap items-center gap-5 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="py-16 md:py-24 w-full">
                <p className="font-semibold text-lg p-2.5 bg-yellow/20 inline-block text-yellow">
                  Olá! Eu sou Lucas vinicius.
                </p>
                <p className="font-bold text-3xl/normal md:text-[50px]/normal text-black mt-8">
                  Web developer
                </p>
                <p className="text-zinc-500 mt-6">
                  Eu sou um desenvolvedor de software que gosta de criar coisas
                  para a web.
                </p>
                <div className="flex flex-wrap gap-5 mt-10 max-md:justify-center">
                  <Link href="https://wa.me/5588988139063?text=Ol%C3%A1%20Lucas%2C%20estou%20entrando%20em%20contato%20pois%20gostei%20do%20seu%20curriculo%2C%20e%20acredito%20que%20voc%C3%AA%20tenha%20a%20experiencia%20que%20procuro%20nesse%20momento">
                    <Button
                      size="lg"
                      className="mt-8 bg-yellow hover:bg-yellow/85"
                    >
                      Contrate-me
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="mt-8"
                    type="button"
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </Button>
                </div>

                <div className="grid grid-cols-2 pt-12 md:pt-20 md:gap-12">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-zinc-900">25+</p>
                    <p className="text-zinc-500">Projetos feitos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-zinc-900">3+</p>
                    <p className="text-zinc-500">Anos de experiência</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[radial-gradient(#10475E,#3D717E,#F9A825)] max-w-[800px] md:top-[100px] lg:absolute bottom-0 right-0 lg:w-6/12 w-full">
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
  )
}
