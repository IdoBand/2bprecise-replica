import { FOOTER_LINKS_DATA } from "../assets/footerLinksData"

const Footer = () => {
  return (
    <footer className='py-12 bg-footerBG w-full flex-center'>
        <div className='grid grid-cols-3 px-6 gap-4 w-4/5 lg:w-[95%] lg:px-0'>
            {FOOTER_LINKS_DATA.map(section => {
                return (
                    <div
                        key={section.title + ' '} 
                        className="col-span-1 text-light lg:col-span-3 lg:mb-16">
                        <div className="text-xl font-semibold flex flex-col pb-4 relative
                            after:absolute after:bottom-0 after:h-[0.1px] after:w-[90%] after:bg-[#54595F]/50"
                        >
                            {section.title}
                        </div>
                        <div>
                            {section.subTitles.map(sub => {
                                return (
                                    <div 
                                        key={sub.title + ' '}
                                        className="text-lg flex flex-col py-4 relative text-[#d2d2d2] cursor-pointer
                                        after:absolute after:bottom-0 after:h-[0.1px] after:w-[90%] after:bg-[#54595F]/50
                                        hover:text-white
                                        "
                                    >
                                        {sub.title}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </footer>
  )
}

export default Footer