"use client"
import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaDownload } from 'react-icons/fa'
import { download } from '@/utils/cn'

const DownloadBtn = () => {
    return (
        <div onClick={() => download({ fileUrl: '/Chaitanya_Rawat_Resume.pdf', fileName: 'Chaitanya_Rawat_Resume' })}>
            <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position='right'
            />
        </div>
    )
}

export default DownloadBtn