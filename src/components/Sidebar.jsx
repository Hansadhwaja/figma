
import help from '../assets/Vector.svg'
import block from '../assets/Frame 1000002250.png'

const Sidebar = () => {
    return (
        <div className='p-3'>
            <div className='flex flex-col gap-[105px] w-[24px]'>
                <img src={help} alt='help' />
                <img src={block} alt='block' />
            </div>
        </div>

    )
}

export default Sidebar