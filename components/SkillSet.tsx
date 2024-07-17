import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'
import Image from 'next/image'
import { BackgroundGradient } from './ui/BackgroundGradient'
import { skillset } from '@/data'
import { Button } from './ui/MovingBorders'

const SkillSet = () => {
    return (
        <div className='py-20' id="skills">
            <h1 className='heading'>
                My {''}
                <span className='text-cyan-300'>Skills</span>
                {''} & {''}
                <span className='text-cyan-300'>TechStack</span>
            </h1>




            {/* <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-4 text-center">



                        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                            <CardContainer >
                                <CardBody>
                                    <div className="border border-white/[0.1] bg-slate-900/[0.8] px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 flex flex-col items-center">

                                        <Image

                                            height={100}
                                            width={100}
                                            src={"/skill/next.svg"}
                                            alt={"next"}
                                            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2  border-white  relative mx-auto"
                                        />
                                        <h2 className="font-medium text-lg text-white mt-2">2.7K</h2>


                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>

                    </div>
                </div>
            </section> */}

            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8">
                {
                    skillset.map((curr) => (

                        <CardContainer key={curr.id}>
                            <CardBody>
                                <li className="relative flex flex-col sm:flex-row xl:flex-col items-start border border-white/[0.1] bg-slate-900/[0.8] rounded-lg">
                                    <div className="order-1 sm:ml-6 xl:ml-0 p-2 flex justify-center">
                                       

                                        <h2 className="mb-1 text-white font-semibold text-lg ">
                                            {curr.name}
                                        </h2>
                                       

                                    </div>
                                    <img src={curr.image} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                                </li>
                            </CardBody>
                        </CardContainer>

                    ))
                }




            </ul>


        </div >
    )
}

export default SkillSet