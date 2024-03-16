import { motion } from "framer-motion"
import { ReactNode } from "react"
import { styles } from "../styles";


const SectionWrapper = (Component: ReactNode) =>
  function HOC() {
    return (

      <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className={`${styles.paddingX} max-w-7xl mx-auto relative`} >
        {Component}
      </motion.section>

    );
  };

export default SectionWrapper;
