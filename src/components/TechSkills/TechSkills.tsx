import { technologies } from "../../constants"
import DisplayBallCanvas from "./BallCanvas"

const TechSkills = () => {
    return (
        <div className="grid grid-cols-3 justify-center gap-10" >
            {technologies.map((tech) => (
                <div key={tech.name} className="w-28 h-28" >
                    <DisplayBallCanvas icon={tech.icon} />
                </div>
            ))}
        </div>
    )
}

export default TechSkills