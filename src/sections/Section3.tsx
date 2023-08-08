import { motion } from "framer-motion"
import { POTENTIAL_CHALLENGES, PotentialChallenge } from "../assets/challenges"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
interface BubbleProps {
    challenge: PotentialChallenge
    firstIntersection: boolean
}
const Bubble = ({challenge, firstIntersection}: BubbleProps) => {
    return (
        <li className={`px-[5vw] ${challenge.className} lg:px-0 lg:py-0 md:col-span-6`}>
            <div className="w-[16.3rem] h-[16.3rem] flex-center">
            <motion.div
                initial={{ // this div contains the bg-color and grows into the skeleton div
                    opacity: 0,
                    height: 0,
                    width: 0,
                }}
                animate={{
                    opacity: firstIntersection ? 1 : 0,
                    height: firstIntersection ? "16.3rem" : 0,
                    width: firstIntersection ? "16.3rem" : 0,
                    transition: {
                        type: "spring",
                        stiffness: 50,
                        duration: 0.6,
                        delay: challenge.id * 0.3
                    }
                }}
                className={`rounded-full bg-grayBubble w-full h-full flex-center flex-col gap-3 text-light ${challenge.className}`}>
                <motion.div 
                    initial={{ // this div holds the challenge's data and changes opacity
                        opacity: 0,
                    }}
                        animate={{
                            opacity: firstIntersection ? 1 : 0,
                            transition: {
                                duration: 0.6,
                                delay: 0.5 + challenge.id * 0.4
                            }
                        }}
                                className='w-10/12 text-center flex-center gap-3 flex-col'>
                        <span className='font-semibold'>CHALLENGE #{challenge.id}</span>
                    {challenge.text}
                <button
                className='px-4 py-[1px] text-[11px] bg-[#1F1A19] font-bold rounded-2xl tracking-[0.1rem]
                    transition-all duration-200 ease hover:text-magenta'
                >
                    SEE THE VALUE
                </button>
                </motion.div>
            </motion.div>
            </div>
        </li>
    )
}

const Section3 = () => {

    const { firstIntersection, htmlElementRef } = useIntersectionObserver('3')
    
  return (
    <main
        id="section-3"
        className='flex-center flex-col gap-8 bg-dark/5 py-24 min-h-screen lg:min-h-max'
        ref={htmlElementRef}
    >
        <motion.div 
            initial={{
                y: 100,
                opacity: 0,
            }}
            animate={{
                opacity: firstIntersection ? 1 : 0,
                y: firstIntersection ? 0 : 100,
                transition: {
                    duration: 0.5
                }
            }}
            className='text-dark text-4xl font-bold text-center'>
            Potential Clinical Challenges
        </motion.div>
        <ul 
            className='grid grid-cols-6 max-w-[90%] md:gap-6'>
            {POTENTIAL_CHALLENGES.map(challenge => 
            <Bubble 
                key={challenge.text + challenge}
                challenge={challenge}
                firstIntersection={firstIntersection} />)}
        </ul>
    </main>
  )
}

export default Section3