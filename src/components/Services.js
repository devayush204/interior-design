import React from 'react'
import { servicesData } from '../../public/data/services'
import bgimg from "../../public/assets/servicesbg.png"
import img1 from "../../public/assets/waves.png"

import Image from 'next/image'

const Services = () => {
  return (
    <section className='relative flex flex-col lg:flex-row justify-center items-center h-[80vh] pt-[800px] md:pt-[750px] md:px-28 w-full px-7 lg:px-48 lg:py-20 '>
      <Image alt='bg' src={bgimg} className='absolute h-[200vh] md:h-[180vh] lg:h-[80vh] object-cover -z-10 opacity-10' />
      
      {/* Mobile Layout */}
      <div className='lg:hidden w-full'>
        {/* "Services provided by us" section */}
        <div className='flex flex-col gap-5 mb-5 px-5'>
          <p className='text-4xl font-semibold text-black'>Services provided by us</p>
          <p className='text-sm text-black'>We have been providing great flooring solutions service.</p>
          <div>
            <button className='bg-[#4A8780] px-6 py-2 rounded-lg text-white hover:scale-105 transition-all'>Learn More</button>
          </div>
        </div>

        {/* Service Cards */}
        <div className='grid grid-cols-1 gap-5'>
          {servicesData.map((item) => {
            return (
              <div className='bg-white rounded-xl p-8 flex gap-2 md:gap-5 hover:scale-105 transition-all justify-center items-center flex-col' key={item.id}>
                <Image src={item.icon} className='md:w-16 md:h-16 w-14' alt='service-icon' />
                <p className='md:text-2xl  font-semibold'>{item.title}</p>
                <p className='text-zinc-600 text-sm text-center'>{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Vacancy Card */}
        <div className='bg-[#4A8780] relative text-white rounded-xl  py-[30px] hover:scale-105 transition-all flex justify-center items-center flex-col mt-5'>
          <p className='leading-10 text-xl'>+4 <br /> More <br /> Available Vacancy</p>
          <Image src={img1} className='w-20 h-20 top-0 right-5 rotate-90 absolute' alt='vacancy-icon' />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className='hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-5 w-[70%]'>
        {servicesData.map((item) => {
          return (
            <div className='bg-white rounded-xl p-8 flex gap-5 hover:scale-105 transition-all justify-center items-center flex-col' key={item.id}>
              <Image src={item.icon} className='w-16 h-16' alt='service-icon' />
              <p className='lg:text-2xl font-semibold'>{item.title}</p>
              <p className='text-zinc-600 text-sm text-center'>{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className='hidden lg:flex w-[30%] px-10  flex-col gap-5 h-full'>
        <div className='flex flex-col gap-5'>
          <p className='text-4xl font-semibold text-black'>Services provided by us</p>
          <p className='text-sm text-black'>We have been providing great flooring solutions service.</p>
          <div>
            <button className='bg-[#4A8780] px-6 py-2 rounded-lg text-white hover:scale-105 transition-all'>Learn More</button>
          </div>
        </div>

        <div className='bg-[#4A8780] relative text-white rounded-xl px-9 py-[62px] hover:scale-105 transition-all'>
          <p className='leading-10 text-xl'>+4 <br /> More <br /> Available Vacancy</p>
          <Image src={img1} className='w-20 h-20 right-14 top-0 rotate-90 absolute' alt='vacancy-icon' />
        </div>
      </div>
    </section>
  )
}

export default Services
