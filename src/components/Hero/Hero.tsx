

import { styles } from "../../styles"
import { ReactTyped } from "react-typed";


export const Hero = () => {


    return (
        <section className="relative h-screen w-full">
            <div className={`${styles.paddingX} top-[50px] max-w-7xl mx-auto flex flex-row items-start gap-5`} >
                <div className="flex flex-col justify-center items-center mt-5" >
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-72 h-56 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText}`} > Hi, <span className="text-[#915eff]" ><ReactTyped strings={["I'm Gagan", "I like coding"]} typeSpeed={200} backDelay={1000} loop cursorChar="" /> </span></h1>
                    <p className={`${styles.heroSubText} mt-2`}> <ReactTyped style={{ color: 'white' }} strings={["I am a passionate individual aspiring to become a full stack developer. I am eager to contribute to innovative projects and expand my skills in both front-end and back-end development."]} cursorChar="" typeSpeed={20} /></p>
                </div>
            </div>
        </section>
    )
}
