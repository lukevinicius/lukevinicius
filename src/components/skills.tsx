import Image from 'next/image'

import { SectionTitle } from '@/components/section-title'

import mongodbIcon from '@/assets/mongodb.svg'
import nextIcon from '@/assets/nextjs.svg'
import nodeIcon from '@/assets/nodejs.svg'
import postgresqlIcon from '@/assets/postgresql.svg'
import reactIcon from '@/assets/reactjs.svg'

export function Skills() {
  return (
    <section className="py-16 md:py-24 bg-zinc-100">
      <div className="container">
        <SectionTitle title="Habilidades" />
        <div
          className="grid items-center grid-cols-1 gap-10 md:gap-14 mt-14"
          data-aos="fade-up"
        >
          <div className="aos-init aos-animate">
            <div className="flex flex-wrap items-start gap-7">
              <div className="flex-1 px-5 text-center border-2 rounded-full border-gray/20 py-7">
                <Image
                  src={reactIcon}
                  alt="ReactJS"
                  className="w-[30px] h-[30px] inline-block"
                />
                <p className="mt-3 text-sm font-semibold whitespace-nowrap">
                  Reactjs
                </p>
              </div>
              <div className="flex-1 px-5 text-center border-2 rounded-full border-gray/20 py-7">
                <Image
                  src={nextIcon}
                  alt="NextJS"
                  className="w-[30px] h-[30px] inline-block"
                />
                <p className="mt-3 text-sm font-semibold whitespace-nowrap">
                  Nextjs
                </p>
              </div>
              <div className="flex-1 px-5 text-center border-2 rounded-full border-gray/20 py-7">
                <Image
                  src={nodeIcon}
                  alt="NodeJS"
                  className="w-[30px] h-[30px] inline-block"
                />
                <p className="mt-3 text-sm font-semibold whitespace-nowrap">
                  Nodejs
                </p>
              </div>
              <div className="flex-1 px-5 text-center border-2 rounded-full border-gray/20 py-7">
                <Image
                  src={mongodbIcon}
                  alt="MongoDB"
                  className="w-[30px] h-[30px] inline-block"
                />
                <p className="mt-3 text-sm font-semibold whitespace-nowrap">
                  MongoDB
                </p>
              </div>
              <div className="flex-1 px-5 text-center border-2 rounded-full border-gray/20 py-7">
                <Image
                  src={postgresqlIcon}
                  alt="PostgreSQL"
                  className="w-[30px] h-[30px] inline-block"
                />
                <p className="mt-3 text-sm font-semibold whitespace-nowrap">
                  PostgreSQL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
