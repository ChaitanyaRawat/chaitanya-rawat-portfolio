"use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { download } from '@/utils/cn'

const DownloadBtn = () => {
    
    return (
        
        <a href= "https://drive.google.com/file/d/1IbdSR7K3Z8D_CD1xX7R4B0DZ06iMwibF" target="_blank">
            
            <MagicButton
                title="View Resume"
                icon={<FaLocationArrow />}
                position='right'
            />
        </a>
    )
}

export default DownloadBtn