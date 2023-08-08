import Button from "../components/Button"
import { useIntersectionObserver } from "../hooks/useIntersectionObserver"
import nurseAndPatient from '/nurse-and-patient-walking-in-facility.jpg'
const Section10 = () => {

    const { htmlElementRef } = useIntersectionObserver(`10`)

  return (
    <main
        id={'section-10'}
        ref={htmlElementRef}
        className="min-h-screen flex flex-col ">
        <div className="flex-center h-screen py-16 section-10-bg-img lg:h-max lg:relative lg:z-10">
            <div className="w-[90%]">
                <div className='text-light'>
                    <div className='text-3xl font-semibold w-[480px] mb-10 lg:w-full'>
                        An enterprise-spanning platform, 2bPrecise allows you to implement functionality modularly and scale over time, according to organizational priorities.
                    </div>
                    <div className='text-xl font-semibold w-[480px]  mb-10 lg:w-full'>
                        With the 2bPrecise IT infrastructure, you can “test once, interrogate often,” extending the value of every germline test ordered over time and across specialties.
                    </div>
                    <Button text="Request Demo" type="button" theme="purpleButton"/>
                </div>
            </div>
        </div>
        <div className="hidden bg-dark lg:block text-2xl text-white w-full h-auto pb-10">
            <img src={nurseAndPatient} className="w-full"/>
        </div>
    </main>
  )
}

export default Section10