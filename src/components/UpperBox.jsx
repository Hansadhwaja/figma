import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import TextArea from './TextArea'
import RightSideBox from './RightSideBox'

const UpperBox = () => {
    return (
        <div className='bg-[#363C43] w-[720px] h-[316px] flex rounded-xl'>
            <Sidebar />
            <div className='flex flex-col'>
                <Header />
                <TextArea />
            </div>
            <div className='w-full flex justify-center items-center'>
                <RightSideBox />
            </div>
        </div>
    )
}

export default UpperBox