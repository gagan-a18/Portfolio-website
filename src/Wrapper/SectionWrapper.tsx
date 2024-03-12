import { motion } from "framer-motion"
import { ReactNode } from "react"
import { styles } from "../styles";


const SectionWrapper = (Component: ReactNode, name: string) =>
  function HOC() {
    return (
      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.paddingX} max-w-7xl mx-auto relatve z-0`} >
        {Component}
        <span className="hash-span" id={name}> &nbsp;</span>
      </motion.section>
    );
  };

export default SectionWrapper;