import Navbar from './components/Navbar'
import FixedNavigation from './components/FixedNavigation'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import { useState } from 'react'
import Section4t8 from './sections/Section4t8'
import Section10 from './sections/Section10'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import { currentSectionContext, CurrentSectionProps } from './providers/currentSectionProvider'
import Section9 from './sections/Section9'
function App() {
  const [currentSection, setCurrentSection] = useState<string>('1')
  const currentSectionContextValue: CurrentSectionProps = { currentSection, setCurrentSection }
  return (
    <currentSectionContext.Provider value={currentSectionContextValue}>
      <Navbar />
      <FixedNavigation />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4t8 />
      <Section9 />
      <Section10 />
      <NewsSection />
      <Footer />
    </currentSectionContext.Provider>
  )
}

export default App