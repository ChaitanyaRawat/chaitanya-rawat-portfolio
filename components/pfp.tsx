
import React from 'react'
import Image from 'next/image'

const Pfp = () => {

    return (

        <div className="w-60 h-60 relative overflow-hidden rounded-full border-2 border-gray-300">
            <Image
                src="/my-pfp.jpg"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
    )
}

export default Pfp