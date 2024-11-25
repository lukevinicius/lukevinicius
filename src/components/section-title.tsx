import { Sparkle } from 'lucide-react'

interface SectionTitleProps {
  title: string
  subTitle?: string
  description?: string
}

export function SectionTitle({
  title,
  subTitle,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center" data-aos="fade-up">
      <div className="inline-block">
        <div className="bg-yellow text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
          <Sparkle size={16} />
          <span className="text-sm">{title}</span>
        </div>
      </div>
      {subTitle && (
        <p className="text-2xl/normal text-black font-semibold mt-7">
          {subTitle}
        </p>
      )}
      {description && <p className="text-zinc-500 mt-6">{description}</p>}
    </div>
  )
}
