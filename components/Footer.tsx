import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Footer = () => {
    return (
        <footer className='w-full  pb-10 mb:100px md:mb-5' id="contact">
           
            <div className='flex flex-col items-center'>
                <h1 className='heading lg:max-w-[45vw]'>
                Looking to elevate <span className='text-cyan-300'>your</span> digital presence?
                </h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>
                Let&apos;s connect and explore how my expertise can help you reach your objectives. Contact me today to get started on transforming your vision into reality."
                </p>
                <a href="mailto:chaitanyarawat95@gmail.com">
                    <MagicButton
                        title="Reach out to me"
                        icon={<FaLocationArrow />}
                        position='right'
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col justify-between items-center gap-2'>
                <p className='md:text-base text-sm md:font-normal font-light'>
                    Copyright &copy; {new Date().getFullYear()} Chaitanya Rawat
                </p>
                <div className='flex items-center md:gap-3 gap-6'>
                    {
                        socialMedia.map(({ id, img, link }: any) => (
                            <a href={link} target='_blank'  key={id} className='w-10 h-10 cursor-pointer flex justify-center items-center  bg-white rounded-lg border border-black-300'>
                                <img
                                    src={img}
                                    alt={id}
                                    width={20}
                                    height={20}
                                />
                            </a>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer