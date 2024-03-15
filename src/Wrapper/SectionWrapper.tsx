import { motion } from "framer-motion"
import { ReactNode } from "react"
import { styles } from "../styles";


const SectionWrapper = (Component: ReactNode, name: string) =>
  function HOC() {
    return (
      
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.paddingX} max-w-7xl mx-auto relative`} >
        <span className="hash-span -z-10" id={name}> &nbsp;</span>
        {Component} 
      </motion.section>
      
    );
  };

export default SectionWrapper;
