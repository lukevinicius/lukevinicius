import { Sparkle } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 text-white bg-black">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <div className="inline-block">
            <div className="bg-yellow text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
              <Sparkle size={16} />
              <span className="text-sm">Serviços</span>
            </div>
          </div>
          <p className="text-2xl/normal text-zinc-200 font-semibold mt-7">
            Serviços que ofereço
          </p>
          <p className="text-zinc-500 mt-6">
            Desenvolvo soluções completas para web e mobile, unindo design e
            tecnologia com foco em performance, escalabilidade e ótima
            experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
          <div
            className="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-t to-white/[4%] from-transparent"
            data-aos="fade-up"
          >
            <p className="text-zinc-200">Desenvolvimento WEB</p>
            <p className="text-zinc-400">
              Desenvolvimento de aplicações web responsivas e dinâmicas
              utilizando tecnologias como React, Next.js, Node.js e TailwindCSS,
              focando em performance e experiência do usuário.
            </p>
          </div>
          <div
            className="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-t to-white/[4%] from-transparent aos-init aos-animate"
            data-aos="fade-up"
          >
            <p className="text-zinc-200">Desenvolvimento Mobile</p>
            <p className="text-zinc-400">
              Criação de aplicativos móveis cross-platform com React Native,
              garantindo interfaces intuitivas e desempenho otimizado para
              Android e iOS.
            </p>
          </div>
          <div
            className="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-t to-white/[4%] from-transparent aos-init aos-animate"
            data-aos="fade-up"
          >
            <p className="text-zinc-200">Desenvolvimento Backend</p>
            <p className="text-zinc-400">
              Desenvolvimento de APIs REST, utilizando Node.js e bancos de dados
              como PostgreSQL e MongoDB para sistemas escaláveis e seguros.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
