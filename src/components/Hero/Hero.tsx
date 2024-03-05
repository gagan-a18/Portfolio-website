
import { styles } from "../../styles"

export const Hero = () => {
    return (
        <section className="relative h-screen mx-auto" >
            <div className={`${styles.paddingX} absolute inset-0 top-[50px] left-4 max-w-7xl mx-auto flex flex-row items-start gap-5`} >
                <div className="flex flex-col justify-center items-center  mt-5" >
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`} >Hi, I'm <span className="text-[#915eff]" >Gagan</span></h1>
                    <p className={`${styles.heroSubText}mt-2 text-white`}>I am a passionate individual aspiring to become a full stack developer.  I am eager to contribute to innovative projects and expand my skills in both front-end and back-end development.</p>
                </div>
            </div>
        </section>
    )
}
