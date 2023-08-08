import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Button from './Button'
import CustomNavbarLink from './CustomNavbarLink'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVBAR_LINKS_DATA } from '../assets/navbarLinksData'
import navbarLogo from '/2bprecise-logo-retina-162x59@2x.png'
const slideDownDiv = {
    // when using this -> add to motion.div className 'overflow-hidden'
    initial: {
        height: 0,
    },
    animate: {
      opacity: 1,
      height: "auto",
      transition: {
          duration: 0.3
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5
    },
    }
}

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isUserAtTop, setIsUserAtTop] = useState<boolean>(false)
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false)
  const navbarRef = useRef<IntersectionObserver | null>(null)
  const navbarRefCallback = useCallback(
    (node: HTMLElement) => {
      navbarRef.current = new IntersectionObserver(
        ([entry]) => {
          setTimeout(() => {
            setIsUserAtTop(entry.isIntersecting)
          }, 800)
        }
      )
      if (node) { navbarRef.current.observe(node) }

  },[])

  useEffect(() => {
    let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
      if (currentScrollTop < lastScrollTop) {
        setTimeout(() => {
          setIsScrollingUp(true);
        }, 500)
      } else {
        setTimeout(() => {
          setIsScrollingUp(false);
        }, 500)
      }
      lastScrollTop = currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    
  }, [])

  return (
    <>
      <header ref={navbarRefCallback} className='w-full bg-dark relative z-50 flex-center flex-col'>
        <main className=' w-[95%] h-[70px] flex justify-between items-center relative'>
          <img className='h-14 w-auto md:h-10 sm:h-8' src={navbarLogo}/>
          <nav className='flex gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 xl:hidden'>
            {NAVBAR_LINKS_DATA.map((navLink) => {
              return <CustomNavbarLink key={navLink.title + '0'} linkData={navLink} />
            })}
          </nav>
          <div className='flex items-center'>
          <Button text='Request Demo' type='button' theme='purpleButton' />
            <button 
              className='hidden w-10 h-10 rounded-full xl:flex flex-col justify-center items-center border border-solid border-magenta shrink-0'
              onClick={() => setIsMobileMenuOpen(prev => ! prev)}
              >
              <span className={`bg-light block h-[0.5px] w-5 rounded-md ${isMobileMenuOpen ? 'rotate-45 translate-y-[0.4rem]' : ''} transition-all ease duration-300 `}></span>
              <span className={`bg-light block h-[0.5px] w-5 rounded-md my-1.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-light block h-[0.5px] w-5 rounded-md ${isMobileMenuOpen ? '-rotate-45 -translate-y-[0.4rem]' : ''} transition-all ease duration-300`}></span>
            </button>
          </div>
        </main>
        <AnimatePresence>
        {isMobileMenuOpen &&
          <motion.main
          variants={slideDownDiv}
            initial="initial"
            exit="exit"
            animate="animate"
            className='hidden xl:flex pt-[30px] w-[95%] bg-dark overflow-hidden pb-12'>
            <nav className='w-full'>
                {NAVBAR_LINKS_DATA.map(navLink => {
                  return (
                  <button 
                    key={navLink.title + '1'}
                    className='py-[20px] px-[15px] text-xl text-light flex items-center gap-1 w-full'>
                        {navLink.title}{navLink.dropdown && <ChevronDownIcon className="w-5 fill-light" />}
                  </button>)
                })}
                <span className='mt-[20px] bg-turquoise h-[0.5px] flex grow'></span>
            </nav>
          </motion.main>
        }

      </AnimatePresence>
      </header>
{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}      
      {!isUserAtTop &&
      <AnimatePresence>
        <motion.header 
        variants={slideDownDiv}
        initial="initial"
        exit="exit"
        animate="animate"
        className={`fixed w-full bg-dark top-0 z-50 flex-center flex-col opacity-0 ${isUserAtTop}`}>
        <main className=' w-[95%] h-[70px] flex justify-between items-center relative'>
          <img className='h-14 w-auto md:h-10 sm:h-8' src={navbarLogo}/>
          <nav className={`absolute top-[-200px] ${isScrollingUp ? 'top-[50%]' : ''} transition-all ease duration-300 flex gap-6 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:hidden`}>
          {NAVBAR_LINKS_DATA.map((navLink) => {
            return <CustomNavbarLink key={navLink.title + '0'} linkData={navLink} />
          })}
          </nav>
          <div className='flex items-center'>
            <Button text='Request Demo' type='button' theme='purpleButton' />
            <button 
              className='hidden w-10 h-10 rounded-full xl:flex flex-col justify-center items-center border border-solid border-magenta'
              onClick={() => setIsMobileMenuOpen(prev => ! prev)}
              >
              <span className={`bg-light block h-[0.5px] w-5 rounded-md ${isMobileMenuOpen ? 'rotate-45 translate-y-[0.4rem]' : ''} transition-all ease duration-300 `}></span>
              <span className={`bg-light block h-[0.5px] w-5 rounded-md my-1.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-light block h-[0.5px] w-5 rounded-md ${isMobileMenuOpen ? '-rotate-45 -translate-y-[0.4rem]' : ''} transition-all ease duration-300`}></span>
            </button>
          </div>
        </main>
        {isMobileMenuOpen &&
          <motion.main
          variants={slideDownDiv}
            initial="initial"
            exit="exit"
            animate="animate"
            className='hidden xl:flex pt-[30px] w-[95%] bg-dark overflow-hidden pb-12'>
            <nav className='w-full'>
                {NAVBAR_LINKS_DATA.map(navLink => {
                  return (
                  <button 
                    key={navLink.title + '1'}
                    className='py-[20px] px-[15px] text-xl text-light flex items-center gap-1 w-full'>
                        {navLink.title}{navLink.dropdown && <ChevronDownIcon className="w-5 fill-light" />}
                  </button>)
                })}
                <span className='mt-[20px] bg-turquoise h-[0.5px] flex grow'></span>
            </nav>
          </motion.main>
        }
    
      </motion.header>
      </AnimatePresence>
        
      }
    </>
  )
}

export default Navbar