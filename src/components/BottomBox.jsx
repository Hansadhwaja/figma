import React from 'react'
import Sidebar from './Sidebar'
import BottomHeader from './BottomHeader'
import BottomImage from './BottomImage'

const BottomBox = () => {
    return (
        <div className='bg-[#363C43] w-[720px] h-[316px] flex rounded-xl top-[96px] left-[922px]'>
            <Sidebar />
            <div className='flex flex-col'>
                <BottomHeader />
                <BottomImage />
            </div>
        </div>

    )
}

export default BottomBox