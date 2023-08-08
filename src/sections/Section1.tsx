import { motion } from 'framer-motion'
import AnimatedDivUp from '../components/AnimatedDivUp'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import leftHero from '/homepage-hero-bg-left.png'
import rightHero from '/homepage-hero-bg-right.png'
import laptop from '/laptop.png'
import laptopScreen from '/laptop-screen.png'
import laptopToolbar from '/laptop-toolbar.png'
import { useEffect } from 'react'
const Section1 = () => {

  const { htmlElementRef } = useIntersectionObserver(`1`)
  useEffect(() => {
    const section = document.querySelector('#section-1')
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
      }
  }, [])
  return (
    <main
      id='section-1'
      ref={htmlElementRef}
      className='h-[calc(100vh-80px)] w-full'>
        <div className='h-[80%] w-full bg-dark flex items-center flex-col relative overflow-x-clip'>
          <motion.img variants={heroBGMotion} initial="initial" animate="animate" className='absolute w-[41%] h-[450px] -left-16' src={leftHero} />
          <motion.img variants={heroBGMotion} initial="initial" animate="animate" className='absolute w-[41%] h-[450px] -right-16' src={rightHero} />
          <AnimatedDivUp 
            variant='up'
            className='text-5xl relative z-10 text-white font-bold w-[713px] flex flex-wrap xl:w-[600px] lg:text-3xl sm:max-w-full'>
            <div className='text-center'>
              Bringing test results and insights to the point of care, <span className='text-magenta'>within any EHR.</span>
            </div>
          </AnimatedDivUp>
          <motion.div 
            initial={{y: -50, opacity: 0}}
            animate={{y: 200, 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.5
                }
            }}
            className='h-[20%] relative z-10 w-full flex justify-center items-start'
            >
            <div className='relative w-[950px] h-full xl:w-[800px]'>
              <div id={'pink-dot'} className='absolute z-50 w-4 h-4 bg-magenta rounded-full left-1/2 -translate-x-[45%] -translate-y-[370%] 
              xl:-translate-y-[320%] 
              md:-translate-y-[300%] md:w-3 md:h-3 
              sm:-translate-y-[350%] sm:w-2 sm:h-2 
              ' />
                <svg
                  className='absolute left-1/2 -translate-y-[22%] max-w-80%'
                  id="pink-path-line" viewBox="0 0 189 224" xmlns="http://www.w3.org/2000/svg" style={{visibility: 'visible'}}>
                  <path d="M1 0V211C1 217.627 6.37258 223 13 223H189" stroke="#B647BA" strokeWidth="3" fill="none"></path>
                </svg>
              <svg
                className='absolute right-0 -translate-x-[300%] translate-y-[22%]'
                id="pink-path-box" viewBox="0 0 90 262" xmlns="http://www.w3.org/2000/svg" style={{visibility: 'visible'}}>
                  <path d="M1 131V13C1 6.37258 6.37258 1 13 1H77C83.6274 1 89 6.37258 89 13V249C89 255.627 83.6274 261 77 261H13C6.37258 261 1 255.627 1 249V130.5" stroke="#B647BA" strokeWidth="4" fill="none"></path>
              </svg>
              <img 
                src={laptop}
                className='absolute w-[80%] left-1/2 -translate-x-1/2'
                />
              <img
                id="laptop-screen"
                src={laptopScreen}
                className='absolute w-[63%] left-1/2 -translate-x-[50%] translate-y-[8%]'
                />
              <img
                id="laptop-toolbar"
                src={laptopToolbar}
                className=''
                />
            </div>
          </motion.div>
        </div>
        
      </main>
  )
}

export default Section1

const heroBGMotion = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 3.7
    }
  }
}