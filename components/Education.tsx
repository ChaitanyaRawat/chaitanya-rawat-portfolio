import React from 'react'
import { Button } from './ui/MovingBorders'

const Education = () => {
  return (
    <div className='py-20' id="education">
      <h1 className='heading'>
        My {''}
        <span className='text-cyan-300'>Education</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        <Button

          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius='1.75rem'
          className='flex-1 text-white border-neutral-200 dark:border-slate-800'
        >
          <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
            <img
              src="/nsut.png"
              alt="nsut"
              className='lg:w-32 md:w-20 w-16'
            />
            <div className='lg:ms-5'>
              <h1 className='text-start text-xl md:text-2xl font-bold'>
                Netaji Subhas University of Technology
              </h1>
              <p className='text-start text-white-100 mt-3 font-semibold'>
                B.Tech in Information Technology
              </p>
            </div>
          </div>
        </Button>

        <Button

          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius='1.75rem'
          className='flex-1 text-white border-neutral-200 dark:border-slate-800'
        >
          <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
            <img
              src="/gps.webp"
              alt="nsut"
              className='lg:w-32 md:w-20 w-16'
            />
            <div className='lg:ms-5'>
              <h1 className='text-start text-xl md:text-2xl font-bold'>
                Gayatri Public School Agra
              </h1>
              <p className='text-start text-white-100 mt-3 font-semibold'>
                PCM in 11th and 12th standard
              </p>
            </div>
          </div>
        </Button>
      </div>

    </div>
  )
}

export default Education