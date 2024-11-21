import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b-2 bg-zinc-900 py-7 border-white/10 flex justify-center h-[100px]">
      <div className="md:max-w-3xl sm:max-w-2xl lg:max-w-5xl">
        <div className="flex items-center justify-center gap-7 w-full">
          <Link
            href="/"
            className="inline-block py-2 font-semibold leading-6 duration-300 text-white"
          >
            Home
          </Link>
          <Link
            href="/"
            className="inline-block py-2 font-semibold leading-6 duration-300 text-white"
          >
            Sobre mim
          </Link>
          <Link
            href="/"
            className="inline-block py-2 font-semibold leading-6 duration-300 text-white"
          >
            Serviços
          </Link>
          <Link
            href="/"
            className="inline-block py-2 font-semibold leading-6 duration-300 text-white"
          >
            Projetos
          </Link>
          <Link
            href="/"
            className="inline-block py-2 font-semibold leading-6 duration-300 text-white"
          >
            Clientes
          </Link>
          <Link
            href="/"
            className="inline-block py-2 font-semibold leading-6 duration-300 text-white"
          >
            Contato
          </Link>
        </div>
      </div>
    </header>
  )
}
