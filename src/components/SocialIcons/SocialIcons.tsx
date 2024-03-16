import { sociallinks } from "../../constants";


export const SocialIcons = () => {



    return (
        <>
            {sociallinks.map((social, index) => (
                <div key={index} className={`${social.title === "gmail" ? `sm:w-20 sm:h-20 w-14 h-14 sm:ml-4 ml-3 sm:mt-2 mt-2` : `sm:w-20 sm:h-20 w-14 h-14`}`} >
                    <a href={social.link} target={`${social.title === "gmail" ? "" : "_blank"}`}>
                        <img src={social.icon} alt={social.title} />
                    </a>
                </div>
            ))}
        </>
    )
}
