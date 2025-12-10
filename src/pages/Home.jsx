import React, { useRef } from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutUs from '../components/home/AboutUs'
import StatsSection from '../components/home/StatsSection'
import Service from '../components/home/Service'
import Benefits from '../components/home/Benefits'
import ContactComponent from '../components/ContactComponent'

const Home = () => {

  return (
    <div className='w-full'>
      <HeroSection />
      <AboutUs />
      <div className='p-3 text-sm md:p-10 md:text-xl xl:text-2xl xl:p-26  space-x-2 text-center' >
        <p className='text-cyan-800 [text-shadow:0_4px_8px_rgba(14_165_223/0.5)]  font-serif'> <span className='text-lime-400 text-[16px] md:text-4xl xl:text-5xl font-semibold'>A genuine  Strategic Partner is Navtex Marine Services Pvt Ltd Itd.</span> You can get the full range of end-to-end solutions you need to run your business effectively and efficiently through our global network. Investigate our administration proposing to find more.</p>
      </div>
      <div
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 95%, transparent 100%)",

        }}
        className='mask-b-from-50% mask-radial-[50%_90%] mask-radial-from-80% bg-linear-to-b  from-[#18262f] via-[#151b20] to-[#12263b]'>
        <StatsSection />
        <Service />
        <Benefits />
      </div>
        <ContactComponent />
    </div>
  )
}

export default Home