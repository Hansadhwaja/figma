import React from 'react'
import image from '../assets/Rectangle 5160.png'

const BottomImage = () => {
    return (
        <div className='grid grid-cols-3'>
            <img src={image} alt='image' />
            <img src={image} alt='image' />
            <img src={image} alt='image' />
        </div>
    )
}

export default BottomImage