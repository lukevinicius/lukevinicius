import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

import instagramIcon from '@/assets/instagram.svg'
import linkedinIcon from '@/assets/linkedin.svg'
import phoneCall from '@/assets/phone-call.svg'

export function Footer() {
  return (
    <section id="contact" className="bg-black">
      <div className="py-16">
        <div className="container">
          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-7">
            <div className="text-white">
              <p className="font-bold text-3xl/normal lg:text-[40px]/normal max-w-xl">
                Tem um projeto em mente? Vamos começar a trabalhar.
              </p>
              <div className="inline-block mt-8 md:mt-14">
                <Button className="bg-yellow hover:bg-yellow/80">
                  Entrar em contato
                </Button>
              </div>
            </div>
            <Image src={phoneCall} alt="phone-call" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="bg-[url(../assets/footer-bg.svg)] bg-[center_top] bg-cover pt-24 filter-">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="text-white">
              <PhoneCall size={40} />
              <div className="mt-7">
                <span className="text-white/80">Seg - Sex de 8h ás 17h.</span>
                <p className="mt-3 text-lg font-semibold">
                  +55 (88) 98813-9063
                </p>
              </div>
            </div>
            <div className="text-white">
              <Mail size={40} />
              <div className="mt-7">
                {/* <span className="text-white/80">
                  Seg - Sex de 8h ás 17h.
                </span> */}
                <p className="mt-3 text-lg font-semibold">
                  lucas.vinicius.a@proton.me
                </p>
              </div>
            </div>
            <div className="text-white">
              <MapPin size={40} />
              <div className="mt-7">
                {/* <span className="text-white/80">
                  Seg - Sex de 8h ás 17h.
                </span> */}
                <p className="mt-3 text-lg font-semibold">
                  Juazeiro do Norte, CE, Brasil
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-[2px] bg-white/10 block mt-12" />
            <div className="flex flex-col items-center py-5 md:flex-row md:justify-between gap-7">
              <p className="text-white text-sm">
                © Lucas vinicius {new Date().getFullYear()}. Todos os direitos
                reservados.
              </p>
              <div className="text-white flex items-center flex-wrap gap-3.5">
                <a href="https://www.instagram.com/lukevinicius_">
                  <Image src={instagramIcon} alt="instagram-icon" />
                </a>
                <a href="https://www.linkedin.com/in/lukevinicius">
                  <Image src={linkedinIcon} alt="linkedin-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
