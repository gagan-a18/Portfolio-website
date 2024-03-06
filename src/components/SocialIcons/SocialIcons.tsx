import { linkedin, github, Gmail } from "../../assets"


export const SocialIcons = () => {

    const social_icon = [linkedin, github, Gmail];


    return (
        <>
            {social_icon.map((social, id) => (
                <div key={id} className={` ${social === Gmail ? 'sm:w-20 sm:h-20 w-14 h-14 ml-4 mt-3' : 'sm:w-20 sm:h-20 w-14 h-14'}`}>
                    <a href={` ${social === linkedin ? "https://www.linkedin.com/in/gagan-a-99877324b" : social === github ? "https://github.com/gagan-a18" : "mailto:gagangowda4646@gmail.com"}`} target={`${social != Gmail ? "_blank" : ""}`} >
                        <img src={social} className="cursor-pointer" />
                    </a>
                </div>
            ))}
        </>
    )
}
