import mongodbIcon from '@/assets/mongodb.svg'
import nextIcon from '@/assets/nextjs.svg'
import nodeIcon from '@/assets/nodejs.svg'
import postgresqlIcon from '@/assets/postgresql.svg'
import reactIcon from '@/assets/reactjs.svg'
import { Sparkle } from 'lucide-react'
import Image from 'next/image'

export function Skills() {
  return (
    <div className="py-16 md:py-24 bg-zinc-100">
      <div className="container">
        <div className="text-center">
          <div className="inline-block">
            <div className="bg-purple text-zinc-100 text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
              <Sparkle size={16} />
              <span className="text-sm">Habilidades</span>
            </div>
          </div>
          {/* <p className="text-2xl/normal text-zinc-800 font-semibold mt-7">
            Talentos
          </p>
          <p className="text-zinc-400 mt-6">
            Desenvolvo soluções completas para web e mobile, unindo design e
            tecnologia com foco em performance, escalabilidade e ótima
            experiência do usuário.
          </p> */}
        </div>
        <div className="grid items-center grid-cols-1 gap-10 md:gap-14 mt-14">
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
    </div>
  )
}
