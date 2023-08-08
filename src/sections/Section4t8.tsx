import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import Logo from '../assets/Logo'
import { PAGE_4_CHALLENGES, Section4ChallengeData } from "../assets/challenges"
import { motion } from "framer-motion"

// combination of ALL Sections 4 - 8
const Section4t8 = () => {
  return (
    <>
        {PAGE_4_CHALLENGES.map(challenge => {
            return <Section4until8 key={challenge.id + 20} challenge={challenge} />
        })}
    </>
  )
}
export default Section4t8

interface Section4t8BubbleProps {
    delay: number
    title: string,
    text: string,
    bubbleSize: string
    className: string
    firstIntersection: boolean
}

// a single bubble
const Section4t8Bubble = ({delay, title, text, bubbleSize, className, firstIntersection}: Section4t8BubbleProps) => {

    return (
        <div className={`${+bubbleSize.slice(0, 3) < 500 ? 'h-[320px] w-[320px]' : 'h-[500px] w-[500px]'} flex-center`}>
            <motion.div
            initial={{
                opacity: 0,
                height: 0,
                width: 0,
            }}
            animate={{
                opacity: firstIntersection ? 1 : 0,
                height: firstIntersection ? bubbleSize : 0,
                width: firstIntersection ? bubbleSize : 0,
                transition: {
                    type: "spring",
                    stiffness: 50,
                    duration: 0.6,
                    delay: delay * 0.5,
                }
            }}
            className={`shrink-0 rounded-full flex-center p-10 md:text-sm ${className}`}
            >
                <motion.div
                initial={{ // this div holds the challenge's data and changes opacity
                    opacity: 0,
                }}
                    animate={{
                        opacity: firstIntersection ? 1 : 0,
                        transition: {
                            duration: 0.6,
                            // delay: id * 0.45
                            delay: delay
                        }
                    }}
                    className={`flex-center flex-col gap-2 md:text-sm`}
                >
                    
                    {className.includes('magenta') &&
                        <Logo fill="white" className="w-6 h-auto" />
                    }
                    <span className='font-bold'>
                        {title}
                    </span>
                    <div className={`text-center ${className.includes('bg-white') ? 'max-w-[80%]' : ''}`}>
                        {text}
                    </div>
                </motion.div>
            </motion.div>
        </div>
        
    )
}

// a single Section
interface Section4until8Props {
    challenge: Section4ChallengeData
}
const Section4until8 = ({challenge}: Section4until8Props) => {

    const { firstIntersection, htmlElementRef } = useIntersectionObserver(`${challenge.id + 3}`)

    return (
        <main
            id={`section-${challenge.id + 3}`}
            ref={htmlElementRef}
            className='bg-dark/5 min-h-[screen] w-full overflow-x-hidden py-60 lg:py-44 flex-center scroll relative z-10'>
            <div className="w-[80%] lg:w-full">
                <motion.div
                    initial={{x: -600}}
                    animate={{
                        x: firstIntersection ? 0 : -600,
                        transition: {
                            duration: 0.5,
                        }
                    }}
                    className="h-2 w-full z-50 lg:pt-36">
                    <img 
                        src={challenge.patientImg}
                        className="max-w-[260px] relative
                            lg:w-40 lg:ml-[50%] lg:-translate-x-[50%] lg:-translate-y-[115px]" 
                    />
                </motion.div>
                <div className="w-full text-center text-4xl font-semibold -translate-y-[100px] lg:-translate-y-[200px]">{`Challenge #${challenge.id}`}</div>
                <div className="flex-center lg:flex-col relative">
                    <Section4t8Bubble
                        delay={1.5}
                        title='CLINICAL CHALLENGE'
                        text={challenge.grayBubbleText}
                        bubbleSize="320px"
                        className='bg-grayBubble text-light relative z-10 translate-x-[7vw] translate-y-[15vw] 
                                    lg:translate-x-0 lg:translate-y-[100px]'
                        firstIntersection={firstIntersection}
                    />
                    <Section4t8Bubble
                        delay={2}
                        title='PRECISION MEDICINE SUPPORT'
                        text={challenge.whiteBubbleText}
                        bubbleSize="500px"
                        className='bg-white z-0 translate-y-[5vw]'
                        firstIntersection={firstIntersection}
                    />
                    <Section4t8Bubble
                        delay={2.5}
                        title='2bPRECISE VALUE'
                        text={challenge.magentaBubbleText}
                        bubbleSize="320px"
                        className='bg-magenta text-light relative z-20 -translate-x-[7vw] -translate-y-[6vw]
                            lg:translate-x-0 lg:translate-y-[90px]'
                        firstIntersection={firstIntersection}
                    />
                </div>
                <motion.div
                    initial={{x: 600}}
                    animate={{
                        x: firstIntersection ? 0 : 600,
                        transition: {
                            duration: 0.5,
                            delay: 0.3
                        }
                    }}
                    className="h-2 w-full relative z-30 lg:z-0 pb-10"> 
                <img
                    src={challenge.doctorImg}
                    className="max-w-[260px] relative ml-auto -translate-y-[17vw]
                        lg:w-40 lg:ml-[50%] lg:-translate-y-[430px] lg:-translate-x-[50%]"
                />
                </motion.div>
            </div>
        </main>
    )
}