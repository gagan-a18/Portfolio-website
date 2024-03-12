import { motion } from "framer-motion";
import { styles } from "../../styles"
import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../../constants";
import ServiceCard from "./ServiceCard";
import React from "react";
import SectionWrapper from "../../Wrapper/SectionWrapper";

const About = () => {
    return (
        <React.Fragment>
            <motion.div variants={textVariant(1)} >
                <p className={styles.sectionSubText} >Introduction</p>
                <h1 className={styles.sectionHeadText} >Overview.</h1>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify" >
                With hands-on experience in front-end technologies like React.js and Next.js, as well as Tailwind CSS and UI component libraries like MUI and Next UI,
                I've honed my skills in creating engaging user interfaces during my internship. On the back end, I've worked with Express.js and Django to develop robust server-side applications.
                Proficient in server management using Nginx and containerization with Docker, I ensure seamless deployment and scalability.
                As a team worker and collaborator, I thrive in collaborative environments, bringing enthusiasm and dedication to every project.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10" >
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
                ))}


            </div>

        </React.Fragment>
    )
}
export default SectionWrapper(About(), "about");
