import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
interface CustomNavbarLinkProps {
  linkData: {
    title: string
    link: string
    dropdown: boolean,
    dropdownTitles?: string[],
    dropdownLinks?: string[]
  }
}
interface TitleAndSpanProps {
  title: string
}
const TitleAndSpan = ({title}: TitleAndSpanProps) => {
  return (
    <li className={` text-light relative group cursor-pointer flex gap-1 whitespace-nowrap`}>
        {title}
        <span className='h-[1px] inline-block w-0 bg-light 
        absolute left-0 -bottom-1
        group-hover:w-full transition-[width] ease duration-300
        '>&nbsp;</span>
  </li>
  )
}

const CustomNavbarLink = ({linkData}: CustomNavbarLinkProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
      className="flex gap-1 relative cursor-pointer">
        <TitleAndSpan title={linkData.title} />
        {linkData.dropdown &&
        <>
          <ChevronDownIcon className="w-5 fill-light" />
          {showDropdown && 
            <div className='absolute top-full w-full'>
              <div className='h-3 bg-transparent w-full'></div>
              <ul
                className="h-auto absolute top-full bg-purple2 p-6 rounded-2xl left-[55%] -translate-x-[55%] 
                      flex flex-col gap-4 w-max
                      ">
            {linkData.dropdownTitles!.map((title) => {
              return <TitleAndSpan key={title} title={title} />
            })}
          </ul>
            </div>
          }
        </> 
      }
    </div>
  )
}

export default CustomNavbarLink