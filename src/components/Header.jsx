import React from 'react'


const Header = () => {
    return (
        <div className='flex gap-[10px] justify-center items-center rounded-[23px] bg-[#171717] w-[614px] h-[62px] py-1 mt-2'>
            <h1 className='py-[10px] px-[24px] rounded-2xl w-[195px] h-[49px] bg-[#363C43] shadow-2xl shadow-[#0A0A0A] drop-shadow-2xl text-center text-white cursor-pointer'>About Me</h1>
            <h1  className='py-[10px] px-[24px] w-[195px] h-[49px] text-center text-[#A3ADB2] cursor-pointer'>Experiences</h1>
            <h1  className='py-[10px] px-[24px] w-[195px] h-[49px] text-center text-[#A3ADB2] cursor-pointer'>Recommended</h1>
        </div>

    )
}

export default Header