"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

function BackArrow() {
  const router = useRouter();
  const pathname = usePathname();
  const onClickFunc = () => {
    router.back();
  }
  return (
    <>
    {pathname === '/'? <div className='px-4 my-2'>Home</div> : <div onClick={onClickFunc} className='h-10 w-10 rounded-lg md:flex hidden hover:bg-opacity-10 hover:bg-violet-200 justify-center items-center '>
        <BiArrowBack size={22}/>
        
         
    </div>}
    
    </>
  )
}

export default BackArrow