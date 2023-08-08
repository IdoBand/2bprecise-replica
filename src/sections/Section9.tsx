import { useEffect, useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import gradientLogo from '/2bprecise-logo-mark-color.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const Section9 = () => {

  const { htmlElementRef } = useIntersectionObserver(`9`)
  const [subHeader, setSubheader] = useState(SUB_HEADERS[0])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTrigger = ScrollTrigger.create({
      trigger: '#section-9',
      start: 'bottom bottom',
      end: `top+=2000`,
      pin: true,
      scrub: true,
    });

    gsap.fromTo(
      '#The-2bPrecise-Difference',
      { opacity: 0, y: 80 }, // Start with opacity 0
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '#section-9',
          toggleActions: 'play complete reverse reset',
          start: 'top top+=20',
          end: 'top+=70',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      '#sub-header',
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '#section-9',
          toggleActions: 'play complete reverse reset',
          start: 'top top+=70',
          end: 'top+=150',
          scrub: true,
        },
      }
    );
    const animateLeftDNAGroup = (group: string, delay: number) => {
      gsap.fromTo(
        group,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: group,
            toggleActions: 'play complete reverse reset',
            start: `top+=${delay}`,
            end: `top+=${delay + 300}`,
            scrub: true,
            onToggle: () => {
              const subHeaderIndex = +group.slice(15) - 1;
              setSubheader(SUB_HEADERS[subHeaderIndex]);
            },
          },
        }
      );
    };
    const animateRightDNAGroup = (group: string, delay: number) => {
      gsap.fromTo(
        group,
        { opacity: 0, x: -50, },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: group,
            toggleActions: 'play complete reverse reset',
            start: `top+=${delay}`,
            end: `top+=${delay + 300}`,
            scrub: true,
          },
        }
      );
    };
    
    animateLeftDNAGroup('#LEFT_DNA_GROUP1', 150);
    animateRightDNAGroup('#RIGHT_DNA_GROUP1', 150);
    animateLeftDNAGroup('#LEFT_DNA_GROUP2', 450);
    animateRightDNAGroup('#RIGHT_DNA_GROUP2', 450);
    animateLeftDNAGroup('#LEFT_DNA_GROUP3', 750);
    animateRightDNAGroup('#RIGHT_DNA_GROUP3', 750);
    animateLeftDNAGroup('#LAST_DNA_GROUP4', 1050);
    
    return () => {
      scrollTrigger.kill()
    };
  }, [])
    
  return (
    <main
      id='section-9'
      ref={htmlElementRef}
      className='bg-dark'
    >  
      <div id='section-9-content' className='min-h-screen w-full flex-center flex-col md:pt-32'>
          <div id='The-2bPrecise-Difference' className='text-4xl text-center text-light mb-6 font-medium'>
            The 2bPrecise Difference
          </div>
          <div id='sub-header' className={`text-center text-xl mb-10 ${subHeader.textColor}
            transition-all duration-500 ease-in-out
          `}>
            {subHeader.title}
        </div>
        <div className='flex justify-between w-[80%] xl:w-[95%] md:w-[80%] md:gap-20 sm:flex-col'>
          <ul className='section-9-ul md:hidden'>
            <div id='LEFT_DNA_GROUP1' className='section-9-sub-ul'>
                {LEFT_DNA_GROUP1.map(bullet => {
                  return <DNABullet key={bullet.title} side='left' bullet={bullet} />
                })}
            </div>
            <div id='LEFT_DNA_GROUP2' className='my-8 section-9-sub-ul'>
              {LEFT_DNA_GROUP2.map(bullet => {
                return <DNABullet key={bullet.title} side='left' bullet={bullet} />
              })}
            </div>
            <div id='LEFT_DNA_GROUP3' className='section-9-sub-ul'>
              {LEFT_DNA_GROUP3.map(bullet => {
                return <DNABullet key={bullet.title} side='left' bullet={bullet} />
              })}
            </div>
          </ul>
          <div className='w-44 h-auto shrink-0 md:w-40'>
            <img src={gradientLogo} className='w-full' />
          </div>
          <ul className='section-9-ul md:hidden'>
            <div id='RIGHT_DNA_GROUP1' className='section-9-sub-ul'>
                {RIGHT_DNA_GROUP1.map(bullet => {
                  return <DNABullet key={bullet.title} side='right' bullet={bullet} />
                })}
            </div>
            <div id='RIGHT_DNA_GROUP2' className='my-8 section-9-sub-ul'>
              {RIGHT_DNA_GROUP2.map(bullet => {
                return <DNABullet key={bullet.title} side='right' bullet={bullet} />
              })}
            </div>

            <div id='RIGHT_DNA_GROUP3' className='section-9-sub-ul'>
              {RIGHT_DNA_GROUP3.map(bullet => {
                return <DNABullet key={bullet.title} side='right' bullet={bullet} />
              })}
            </div>
            <div id='RIGHT_DNA_GROUP4' className='section-9-sub-ul'>
            </div>
          </ul>
          <section className='hidden w-max md:flex flex-col justify-center sm:w-full'>
              {SUB_HEADERS.filter((_subHeader, idx) => idx < 3).map(subHeader => {
                return (
                <div key={subHeader.title + 'media'} className='mb-12 sm:mb-6'>
                  <label className={`${subHeader.textColor} text-lg font-semibold whitespace-normal`}>{subHeader.title}</label>
                  <button className='text-[12px] text-[#afafaf] font-bold tracking-wider flex items-center gap-2'>LEARN MORE <ArrowRightIcon className='w-3'/></button>
                </div>)
              })}
          </section>
        </div>
        <div id='LAST_DNA_GROUP4'></div>
      </div>
    </main>
  )
}

export default Section9

interface DNABulletProps {
  side: 'left' | 'right'
  bullet: {
    title: string
    lineWidth: string
    textColor: string
    bgColor: string
  }
}

const DNABullet = ({side, bullet}: DNABulletProps) => {


  return side === 'left' ?
  <li
    key={bullet.title}
    className={`font-semibold text-right w-full relative ${bullet.textColor}`}>
    <span className='text-lg lg:text-base lg:w-[80%] lg:flex lg:justify-end'>{bullet.title}</span>
    <div className='flex items-center w-[100%] absolute left-0 top-0 translate-x-[270px] translate-y-[700%] lg:translate-x-[220px]'>
      <div id={bullet.title} className={`${bullet.lineWidth} h-[2px] ${bullet.textColor} relative
      before:absolute before:w-4 before:h-4 before:dnaGroup1 before:rounded-full before:left-0 before:-translate-y-1/2 ${bullet.bgColor}
      `}></div>
    </div>
  </li>
  :
  <li
    key={bullet.title}
    className={`font-semibold text-left w-full relative ${bullet.textColor}`}>
    <div className='flex items-center absolute right-0 top-0 -translate-x-[270px] translate-y-[700%] lg:-translate-x-[220px]'>
      <div className={`${bullet.lineWidth} h-[2px] ${bullet.textColor} relative
      before:absolute before:w-4 before:h-4 before:rounded-full w before:right-0 before:-translate-y-1/2 ${bullet.bgColor}
      `}></div>
    </div>
    <span className='text-lg lg:text-base lg:w-[80%] lg:flex lg:justify-start'>{bullet.title}</span>
  </li>
}

const SUB_HEADERS = [
  {title: 'POINT-OF-CARE-APPLICATIONS', textColor: 'text-dnaGroup1'},
  {title: 'INFUSING INTELLIGENCE', textColor: 'text-dnaGroup2'},
  {title: 'DATA MANAGEMENT AND WORKFLOW EFFICIENCY', textColor: 'text-dnaGroup3'},
  {title: 'AN ENTERPRISE-SPANNING PLATFORM', textColor: 'text-light'}
]

const LEFT_DNA_GROUP1 = [
  {title: 'FAMILY HISTORY', lineWidth: 'w-36 2xl:w-28 lg:w-20', bgColor: 'bg-dnaGroup1 before:bg-dnaGroup1', textColor: 'text-dnaGroup1'},
  {title: 'PATIENT GENETIC PROFILE', lineWidth: 'w-32 2xl:w-20 lg:w-20', bgColor: 'bg-dnaGroup1 before:bg-dnaGroup1', textColor: 'text-dnaGroup1'},
]
const RIGHT_DNA_GROUP1 = [
  {title: 'DRUG-GENE INTERACTIONS', lineWidth: 'w-32 2xl:w-24 lg:w-20', bgColor: 'bg-dnaGroup1 before:bg-dnaGroup1', textColor: 'text-dnaGroup1'},
  {title: 'TUMOR PROFILE', lineWidth: 'w-28  2xl:w-20 lg:w-20', bgColor: 'bg-dnaGroup1 before:bg-dnaGroup1', textColor: 'text-dnaGroup1'},
]
const LEFT_DNA_GROUP2 = [
  {title: 'EVOLVING KNOWLEDGEBASES', lineWidth: 'w-28 lg:w-20', bgColor: 'bg-dnaGroup2 before:bg-dnaGroup2', textColor: 'text-dnaGroup2'},
  {title: 'INSIGHT', lineWidth: 'w-36 lg:w-20', bgColor: 'bg-dnaGroup2 before:bg-dnaGroup2', textColor: 'text-dnaGroup2'},
]
const RIGHT_DNA_GROUP2 = [
  {title: 'CLINICAL GUIDELINES', lineWidth: 'w-28 lg:w-20', bgColor: 'bg-dnaGroup2 before:bg-dnaGroup2', textColor: 'text-dnaGroup2'},
  {title: 'CUSTOMIZABLE RULES', lineWidth: 'w-40 lg:w-20', bgColor: 'bg-dnaGroup2 before:bg-dnaGroup2', textColor: 'text-dnaGroup2'},
]
const LEFT_DNA_GROUP3 = [
  {title: 'INTEGRATION', lineWidth: 'w-28 lg:w-20', bgColor: 'bg-dnaGroup3 before:bg-dnaGroup3', textColor: 'text-dnaGroup3'},
  {title: 'GOVERNANCE', lineWidth: 'w-36 lg:w-20', bgColor: 'bg-dnaGroup3 before:bg-dnaGroup3', textColor: 'text-dnaGroup3'},
  {title: 'CONSUMPTION', lineWidth: 'w-32 lg:w-20', bgColor: 'bg-dnaGroup3 before:bg-dnaGroup3', textColor: 'text-dnaGroup3'},
]
const RIGHT_DNA_GROUP3 = [
  {title: 'AGGREGATION', lineWidth: 'w-28 lg:w-20', bgColor: 'bg-dnaGroup3 before:bg-dnaGroup3', textColor: 'text-dnaGroup3'},
  {title: 'ACCESS', lineWidth: 'w-32 lg:w-20', bgColor: 'bg-dnaGroup3 before:bg-dnaGroup3', textColor: 'text-dnaGroup3'},
  {title: 'STORAGE', lineWidth: 'w-36 lg:w-20', bgColor: 'bg-dnaGroup3 before:bg-dnaGroup3', textColor: 'text-dnaGroup3'},
]