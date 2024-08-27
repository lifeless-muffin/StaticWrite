import Image from "next/image"
import Link from "next/link"

interface Props {
    text: string,
    href: string
}

const ButtonBack: React.FC<Props> = ({text, href}) => {
  return (
    <div className="rmbtn__wrap group">
        <div className="rmbtn__main">
            <Link href={href}>
                <div className="flex items-center gap-3 text-[#78e282]">
                    <div className="rotate-180">
                        <div className="transition-transform duration-300  group-hover:translate-x-2">
                            <Image 
                                height={12}
                                width={28}
                                src='/icons/arrow.svg'
                                alt="Arrow Icon"
                            />
                        </div>
                    </div>
                    <span className="font-bold">{text}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ButtonBack