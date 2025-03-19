'use client'

import React from 'react'
import { BiComment } from 'react-icons/bi'

function Comment() {
    
  return (
    <div className='w-[34%] border-r-[1px] py-2  flex justify-center items-center space-x-2 border-neutral-600'>
        <BiComment size={18}/><div>Comment</div>
    </div>
  )
}

export default Comment