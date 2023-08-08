import { useIntersectionObserver } from "../hooks/useIntersectionObserver"

const Section2 = () => {
  const { htmlElementRef } = useIntersectionObserver(`2`)
  return (
    <main
      id="section-2"
      ref={htmlElementRef}
      className='text-2xl h-[700px] flex-center'>
        <div className="text-center text-4xl max-w-[700px] whitespace-normal leading-[1.4]">
            2bPrecise delivers transformative point-of-care solutions that serve as the foundation for scalable precision medicine success.
        </div>
    </main>
  )
}

export default Section2