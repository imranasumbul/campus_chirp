
'use client'
import React, { useState } from 'react'
import { BiLike, BiSolidLike } from 'react-icons/bi'

function Like() {
    const [isLiked, setIsLiked] = useState(false);

  return (
    <div onClick={() => setIsLiked((c) => !c)} className='w-[33%] border-r-[1px] py-2  flex justify-center items-center space-x-2 border-neutral-600'>
            {isLiked ? <><BiSolidLike size={17} /><div>Liked</div></> : <><BiLike size={18}/><div>Like</div></> }
    </div>
  )
}

export default Like