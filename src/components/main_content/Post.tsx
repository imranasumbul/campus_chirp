'use client'

import React from 'react'
import { BiShare } from 'react-icons/bi'
import Dots from './Dots'
import { useRouter } from 'next/navigation'
import Like from './Like'
import Comment from './Comment'
interface PostProps {
    body: string, 
    createdAt: string, 
    updatedAt: string, 
    postId: string, 
    creatorId: string,
    creatorName: string,
    creatorUsername: string    
}
function Post({body, createdAt, updatedAt, postId, creatorId, creatorName, creatorUsername}: PostProps) {
    console.log(createdAt, updatedAt, postId); //to remove build error
    const router = useRouter();
  return (
    <>
    <div className=' pt-4   border-b-[1px] border-neutral-500 '>
        <div className='flex px-2 w-[100%] justify-between items-center'>
            <div className='flex justify-center space-x-2 items-center'>
                <div className='w-8 h-8 bg-red-300 rounded-full'></div>

                <div className='cursor-pointer' onClick={() => {
                    router.push(`/user/${creatorId}`)
                }}>
                    <div className='' >{creatorName}</div>
                    <div className='text-neutral-400 text-sm'>{creatorUsername}</div>
                </div>
            </div>
           <Dots/>
        </div>
        <div className='py-6 px-2'>
            {body}
        </div>
        <div className='flex items-center  border-neutral-600 border-t-[1px] w-[100%]'>
                
                <Like/>
                <Comment/>
                <div className='w-[33%] border-r-[1px] py-2  flex justify-center items-center space-x-2 border-neutral-600'>
                    <BiShare size={18}/><div>Share</div>
                </div>
               
                
        </div>
    </div>
    
    </>
    
  )
}

export default Post