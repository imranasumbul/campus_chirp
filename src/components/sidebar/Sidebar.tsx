
import React from 'react'
import { BsBellFill, BsHouseFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import SidebarLogo from './SidebarLogo'
import SidebarLogin from './SidebarLogin'
import PostButtonLogic from './PostButtonLogic'
import SidebarItemWrapper from './SidebarItemWrapper'

function Sidebar() {
   
   
    const items = [
        {
            label: "Home",
            href: "/",
            icon: <BsHouseFill size={22}/>
        },
        {
            label: "Notifications",
            href: "/notifications",
            icon: <BsBellFill size={22}/>
        },
        {
            label: "Profile",
            href: null,
            icon: <FaUser size={22}/>
        }
    ]
  return (
    <div className=' col-span-1 h-full sm:pr-6'>
        <div className='flex flex-col items-end'>
            <div className='space-y-2 flex flex-col justify-center lg:w-[230px]'>
                <SidebarLogo/>
                {items.map((item) => {
                    return (
                        <SidebarItemWrapper key={item.href} text={item.label} href={item.href} icon={item.icon} />
                    )
                    
                })}
                
                <SidebarLogin />
                <PostButtonLogic />
            </div>
        </div>
    </div>
  )
}

export default Sidebar