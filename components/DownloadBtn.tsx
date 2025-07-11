"use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { download } from '@/utils/cn'

const DownloadBtn = () => {
    
    return (
        
        <a href= "https://bit.ly/chaitanya-rawat-resume" target="_blank">
            
            <MagicButton
                title="View Resume"
                icon={<FaLocationArrow />}
                position='right'
            />
        </a>
    )
}

export default DownloadBtn