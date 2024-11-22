import { Sparkle } from 'lucide-react'

export function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%] w-full"
    >
      <div className="container mx-auto">
        <div className="inline-block">
          <div
            className="bg-yellow text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5"
            data-aos="fade-up"
          >
            <Sparkle size={16} />
            <span className="text-sm">Sobre Mim</span>
          </div>
        </div>
        <p
          className="text-2xl/normal text-zinc-900 font-semibold mt-7"
          data-aos="fade-up"
        >
          Lucas vinicius
        </p>
        <p className="text-zinc-500 mt-6" data-aos="fade-up">
          Olá, sou Lucas Vinicius, tecnólogo em análise e desenvolvimento de
          sistemas. Tehho 3 anos de experiência trabalhando no setor de apostas
          esportivas e cassino online. Sou organizado, tenho bom relacionamento
          interpessoal, boa capacidade de análise crítica e estou sempre
          disposto a aprender e ensinar. Buscando novas oportunidades para criar
          produtos digitais impactantes.
        </p>
        <div
          className="flex-wrap items-start sm:flex gap-7 space-y-7 sm:space-y-0 mt-14"
          data-aos="fade-up"
        >
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Contato</p>
            <p className="text-zinc-900">lucasviniciusaalves@gmail.com</p>
          </div>
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Telefone</p>
            <p className="text-zinc-900">+55 (88) 98813-9063</p>
          </div>
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Linguas</p>
            <p className="text-zinc-900">Português - Inglês</p>
          </div>
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Interesse</p>
            <p className="text-zinc-900">Games, Leitura </p>
          </div>
        </div>
      </div>
    </section>
  )
}
