import { styles } from "../../styles"
import { ReactTyped } from "react-typed";
import { SocialIcons } from "../SocialIcons/SocialIcons";

export const Hero = () => {


    return (
        <section className="relative h-screen w-full">
            <div className={`${styles.paddingX} sm:mt-20 mt-10 max-w-7xl mx-auto flex flex-row items-start gap-5`} >
                <div className="flex flex-col justify-center items-center mt-5" >
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-72 h-56 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`} > Hi, <span className="text-[#915eff]" ><ReactTyped strings={["I'm Gagan", "I like coding"]} typeSpeed={200} backDelay={1000} loop cursorChar="" /> </span></h1>
                    <p className={`${styles.heroSubText} mt-2`}> <ReactTyped style={{ color: 'white' }} strings={["I am a passionate individual aspiring to become a full stack developer."]} cursorChar="" typeSpeed={20} /></p>
                    <div className="mt-7 relative right-2 flex flex-row text-3xl" >
                        <SocialIcons />
                    </div>
                    <div className=" border border-violet-500 rounded-3xl text-white p-3 w-fit mt-5 flex flex-row sm:text-2xl text-lg">
                        <a href={`${import.meta.env.VITE_PDF_DRIVE_LINK}`} target="_blank">
                            <button>Resume<span className="material-symbols-outlined text-white relative top-1 left-1">file_present</span></button>
                        </a>
                    </div>
                </div>
            </div>

        </section>

    )
}
