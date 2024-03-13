import { motion } from "framer-motion";


export default function Scroller() {
    return (
            <div className="w-[34px] h-[64px] rounded-3xl border-4 border-violet-500 flex p-2" >
                <motion.div
                    animate={{
                        y: [0, 24, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                    className="w-3 h-3 rounded-full bg-secondary-50 mb-1"
                />
            </div>
        <div className="w-[34px] h-[64px] rounded-3xl border-4 border-violet-500 flex p-2" >
            <motion.div
                animate={{
                    y: [0, 24, 0]
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary-50 mb-1"
            />
        </div>
    )
}
