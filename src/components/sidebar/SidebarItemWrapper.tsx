"use client";

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react'

interface sideBarWrapperProps {
    icon: React.ReactNode,
    text: string,
    href: string | null

}
function SidebarItemWrapper({icon, text, href}: sideBarWrapperProps) {
    
    const userId = useSession().data?.user.id;
    if(href === null){
        href = `/user/${userId}`
    }
  return (
    <>
    <Link prefetch={true} href={href} className='flex justify-between items-center space-x-2'>
        <div className='
        h-10
        w-10 
        cursor-pointer 
        rounded-lg 
        hover:bg-violet-300 
        hover:bg-opacity-20 
        flex 
        items-center 
        justify-center
        transition'>
            {icon}
        </div>
        <div className='
        w-[70%] 
        hidden 
        md:block
        
        cursor-pointer
        hover:text-white
        
        transition
        '>
            {text}
        </div>
    </Link>

    
    </>

  )
}

export default SidebarItemWrapper