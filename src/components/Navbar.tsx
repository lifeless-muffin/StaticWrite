import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="nav w-full max-w-screen-sm mx-auto px-[2rem] md:px-0">
            <div className="nav__logo--container">
                <Link href="/"><span className="font-bold text-xl">StaticWrite</span></Link>
            </div>
        </nav>
    )
}

export default Navbar