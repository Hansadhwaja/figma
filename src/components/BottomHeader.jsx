import React from 'react'
import leftbutton from '../assets/Component 313.png'
import rightbutton from '../assets/Component 312.png'

const BottomHeader = () => {
  return (
    <div className='flex justify-between items-center w-[614px]'>
        <div className='w-[149px] h-[62px] text-center bg-[#171717] rounded-[20px] text-white flex items-center justify-center cursor-pointer'>Gallery</div>
        <div className='flex h-fit'>
            <button className='bg-[#343C43]  shadow-inner px-4 py-3 shadow-white drop-shadow-[60px] text-white h-fit  rounded-[104px]  my-auto'>+ ADD IMAGE</button>
            <img src={leftbutton} alt='leftbutton' className='cursor-pointer' />
            <img src={rightbutton} alt='rightbutton' className='-mx-12 cursor-pointer'/>
        </div>
    </div>
  )
}

export default BottomHeader