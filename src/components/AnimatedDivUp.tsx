import { motion } from "framer-motion"
import { ReactNode } from "react"
interface AnimatedDivUpProps {
    children: ReactNode
    variant: 'up' | 'down'
    className?: string
}

const up = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 50,
        transition: {
            duration: 0.3,
            delay: 0.8
        }
    }
}

const AnimatedDivUp = ({children, className}: AnimatedDivUpProps) => {
  return (
    <motion.div
        variants={up}
        initial="initial"
        animate="animate"
        className={className}
    >   

        {children}
    </motion.div>
  )
}

export default AnimatedDivUp