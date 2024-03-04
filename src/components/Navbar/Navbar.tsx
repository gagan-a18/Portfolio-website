import { Link } from "react-router-dom"
import { styles } from "../../styles"
import { Key, useState } from "react"
import { logo_2, menu, close } from "../../assets"
import { navLinks } from "../../constants"
export const Navbar = () => {

    const [active, setactive] = useState("");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/portfolio-website/"
                    className="flex items-center"
                    onClick={() => {
                        setactive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={logo_2} alt="logo" className="w-14 h-14 object-contain" />
                    <p className="sm:block hidden" >Gagan</p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10" >
                    {navLinks.map((link: { id: string, title: string }) => (
                        <li key={link.id} className={`${active === link.title ? "text-amber-300" : "text-white"} `}
                            onClick={() => setactive(link.title)}>
                            <Link to={`/portfolio-website/${link.id}`}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center" >
                    <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] cursor-pointer" onClick={() => setToggle(!toggle)} />
                    <div className={`${!toggle ? "hidden" : "flex"} border border-black p-2 justify-center absolute top-[90px] right-0 mx-2 my-2 min-w-[140px] z-10`} >
                        <ul className="list-none flex flex-col gap-2" >
                            {navLinks.map((link: { id: string, title: string }) => (
                                <li key={link.id} className={`${active === link.title ? "text-amber-300" : "text-black"} my-1`} onClick={() => { setactive(link.title); setToggle(!toggle) }} >
                                    <Link to={`/portfolio-website/${link.title}`}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    )
}


