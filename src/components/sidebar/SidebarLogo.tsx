import React from 'react'
import { BsFire} from 'react-icons/bs'



function SidebarLogo() {
  return (
    <div className='
        h-10
        w-10 
        cursor-pointer 
        rounded-lg 
        hover:bg-blue-300 
        hover:bg-opacity-20 
        flex 
        items-center 
        justify-center
        transition'>
            <BsFire size={28} color='white' />
        </div>
    
  )
}

export default SidebarLogo