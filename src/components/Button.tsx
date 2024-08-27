import Image from "next/image"
import Link from "next/link"

interface Props {
    text: string,
    href: string
}

const Button: React.FC<Props> = ({text, href}) => {
  return (
    <div className="rmbtn__wrap group">
        <div className="rmbtn__main">
            <Link href={href}>
                <div className="flex items-center gap-3 text-[#78e282]">
                    <span className="font-bold">{text}</span>
                    <div className="transition-transform duration-300  group-hover:translate-x-2">
                        <Image 
                            height={12}
                            width={28}
                            src='/icons/arrow.svg'
                            alt="Arrow Icon"
                        />
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Button