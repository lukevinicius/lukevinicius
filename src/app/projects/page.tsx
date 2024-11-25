import { projectsArray } from '@/utils/projects'
import Image from 'next/image'
import Link from 'next/link'

import { SectionTitle } from '@/components/section-title'
import { Button } from '@/components/ui/button'

export default function ProjectsPage() {
  return (
    <section className="pt-[100px] relative">
      <div className="container">
        <SectionTitle
          title="Trabalhos selecionados"
          subTitle="Alguns de meus projetos mais recentes"
        />
        <div className="grid grid-cols-1 mt-14 gap-7">
          {projectsArray.map((project, index) => (
            <div
              className="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%] aos-init aos-animate"
              data-aos="fade-up"
              key={index}
            >
              <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
                <Link
                  href={project.url}
                  className="font-bold text-2xl/normal md:text-3xl/normal lg:text-[40px]/normal inline-block mt-5"
                >
                  {project.title}
                </Link>
                <p className="text-zinc-500 max-w-[420px] mt-3 md:mt-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap items-center gap-5 mt-7">
                  {project.techs &&
                    project.techs.map((icon, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center border-2 rounded-full h-14 w-14 border-gray/10 backdrop-blur-2xl bg-gradient-to-t from-white to-gray-200/70"
                      >
                        <Image src={icon} alt="icon" className="h-6 w-6" />
                      </div>
                    ))}
                </div>

                <Link href={project.url}>
                  <Button size="lg" variant="outline" className="mt-8">
                    Ver projeto
                  </Button>
                </Link>
              </div>
              <div className="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
                <Image
                  className="object-cover w-full h-full mx-auto"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up">
          <Button
            size="lg"
            className="mt-8 bg-yellow hover:bg-yellow/85 mx-auto"
          >
            Ver todos
          </Button>
        </div>
      </div>
    </section>
  )
}
