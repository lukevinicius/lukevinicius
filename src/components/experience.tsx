import { BriefcaseBusiness, GraduationCap, Sparkle } from 'lucide-react'
import Image from 'next/image'

import mongodbIcon from '@/assets/mongodb.svg'
import nextIcon from '@/assets/nextjs.svg'
import nodeIcon from '@/assets/nodejs.svg'
import postgresqlIcon from '@/assets/postgresql.svg'
import reactIcon from '@/assets/reactjs.svg'

export function Experience() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <div className="inline-block">
            <div className="bg-yellow text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
              <Sparkle size={16} />
              <span className="text-sm">Life Time</span>
            </div>
          </div>
          <p className="text-2xl/normal text-zinc-800 font-semibold mt-7">
            Educação & Experiência
          </p>
          <p className="text-zinc-400 mt-6">
            Desenvolvo soluções completas para web e mobile, unindo design e
            tecnologia com foco em performance, escalabilidade e ótima
            experiência do usuário.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-14">
          <div className="relative space-y-12 md:space-y-12">
            <div className="block shrink-0 bg-[url('../assets/dot-line.svg')] w-[2px] bg-center bg-cover absolute h-full left-0 md:left-1/2 transform md:-translate-x-1/2" />
            <div className="relative !mt-0" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left md:text-right">
                      <GraduationCap size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-12">
                          <p className="text-yellow font-semibold">
                            2018 - 2020
                          </p>
                          <p className="text-xl font-semibold">
                            Análise e desenvolvimento de sistemas
                          </p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Graduação tecnológica em Análise e Desenvolvimento de
                          Sistemas.
                        </p>
                        <p className="mt-6 font-semibold">
                          Centro Universitário Unileão, Juazeiro do Norte, CE,
                          Brasil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left">
                      <BriefcaseBusiness size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex gap-4 items-center">
                          <p className="text-yellow font-semibold">2020</p>
                          <p className="text-xl font-semibold">Cabo</p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Durante meu serviço militar fui promovido a Cabo do
                          Exército Brasileiro. Atuei na arma de infantaria e
                          pude desenvolver habilidades de liderança e trabalho
                          em equipe.
                        </p>
                        <p className="mt-6 font-semibold">
                          Exercito Brasileiro, Brasil
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left md:text-right">
                      <BriefcaseBusiness size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-12">
                          <p className="text-yellow font-semibold">
                            2021 - Atual
                          </p>
                          <p className="text-xl font-semibold">RSA</p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Atualmente coordenando o desenvolvimento de novas
                          ferramentas e melhorias para um SaaS voltado para
                          apostas esportivas e operações de cassino no mercado
                          brasileiro. Antes disso, desenvolvi um projeto
                          multi-tenant para operadores de cassino online no
                          Brasil, utilizando Next.js e Fastify, além de integrar
                          sistemas de micropagamentos e provedores de cassino
                          como Pragmatic Play e Spribe.
                        </p>
                        <p className="mt-6 font-semibold">
                          Juazeiro do Norte, CE, Brasil
                        </p>
                        <div className="flex flex-wrap items-center gap-5 mt-7 md:justify-end">
                          {[
                            nodeIcon,
                            reactIcon,
                            nextIcon,
                            postgresqlIcon,
                            mongodbIcon,
                          ].map((icon, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-center border-2 rounded-full h-14 w-14 border-gray/10 backdrop-blur-2xl bg-gradient-to-t from-white to-gray-200/70"
                            >
                              <Image
                                src={icon}
                                alt="icon"
                                className="h-6 w-6"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left">
                      <GraduationCap size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex gap-4 items-center">
                          <p className="text-yellow font-semibold">
                            2021 - 2022
                          </p>
                          <p className="text-xl font-semibold">
                            Bootcamp Rocketseat
                          </p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Jornada de treinamento nas trilhas de Node.js, ReactJS
                          e React Native.
                        </p>
                        <p className="mt-6 font-semibold">
                          Rocketseat, Brasil.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left md:text-right">
                      <GraduationCap size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-12">
                          <p className="text-yellow font-semibold">
                            2022 - 2023
                          </p>
                          <p className="text-xl font-semibold">
                            Foundations of project management
                          </p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Curso de gerenciamento de projetos.
                        </p>
                        <p className="mt-6 font-semibold">Google</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-end w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left">
                      <GraduationCap size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex gap-4 items-center">
                          <p className="text-yellow font-semibold">2023</p>
                          <p className="text-xl font-semibold">
                            Fundamentos em liderança
                          </p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Curso de fundamentos em liderança e gestão de pessoas.
                        </p>
                        <p className="mt-6 font-semibold">G4 Educação</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div className="relative" data-aos="fade-up">
              <div className="flex flex-col items-center md:flex-row">
                <div className="flex items-center justify-start w-full mx-auto">
                  <div className="w-full md:w-1/2 pl-7 md:pr-8 lg:pr-14">
                    <div className="space-y-5 text-left md:text-right">
                      <GraduationCap size={34} className="inline-block" />
                      <div className="mt-7">
                        <div className="flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-12">
                          <p className="text-yellow font-semibold">
                            2024 (Em andamento)
                          </p>
                          <p className="text-xl font-semibold">Formação G4</p>
                        </div>
                        <p className="text-zinc-400 mt-6">
                          Formação para empresários e gestores que desejam estar
                          à frente de equipes de alto desempenho e alavancar o
                          resultado de suas empresas.
                        </p>
                        <p className="mt-6 font-semibold">G4 Educação</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[radial-gradient(#994ff5,#ffc41f)] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px -translate-x-1/2 md:left-1/2 transform md:-translate-x-1/2 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
