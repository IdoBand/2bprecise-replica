import { useContext, MouseEvent } from 'react'
import { currentSectionContext } from "../providers/currentSectionProvider";
const THEMES = {
    default: 'w-[6px] h-[6px] bg-gray-400 hover:scale-125 hover:bg-magenta',
    current: 'w-2 h-2 bg-magenta'
}

const FixedNavigation = () => {
    const { currentSection } = useContext<any>(currentSectionContext);
    const sections = Array.from(Array(10).keys())

    function handleClick(e: MouseEvent<HTMLAnchorElement>, sectionId: string) {
        e.preventDefault()
        const section = document.querySelector(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

  return (
    <ul className={`fixed ${+currentSection > 10 ? '-right-3' : 'right-11 lg:right-5'} top-1/2 -translate-y-1/2 gap-[14px] md:-right-3 flex-center flex-col z-40 transition-all duration-300 ease`}>
        {sections.map((_, idx) => {
            return (
                <a  
                    href={`#section-${idx + 1}`}
                    key={`#section-${idx + 1}`}
                    onClick={(e) => handleClick(e,`#section-${idx + 1}`)}
                    className={`rounded-full cursor-pointer transition-all duration-200 ease 
                    ${idx + 1 === +currentSection ? THEMES.current : THEMES.default}
                `} 
                />
            )
        })}
    </ul>
  )
}

export default FixedNavigation