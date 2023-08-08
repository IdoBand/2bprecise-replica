import { NEWS } from "../assets/newsAndEvents"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
const NewsSection = () => {
    const { htmlElementRef } = useIntersectionObserver(`11`)

  return (
    <main
        ref={htmlElementRef} 
        className="w-full flex-center flex-col py-16 bg-light">
        <div className="w-full text-4xl font-bold text-center">
            News & Events
        </div>
        <div className="grid grid-cols-6 gap-12 w-[85%]">
            {NEWS.map(news => {
                return (
                    <section 
                        key={news.title}
                        className="col-span-2 shadow-2xl flex flex-col justify-between rounded-3xl xl:col-span-3 lg:col-span-6"
                    >
                        <p className="m-10 text-3xl font-bold text-purple2 hover:text-magenta cursor-pointer rounded-t-3xl">
                            {news.title}
                        </p>
                        <div className="p-4  bg-gray-200 w-full rounded-b-3xl">
                            {news.date}
                        </div>
                    </section>
                )
            })}

        </div>
    </main>
  )
}

export default NewsSection