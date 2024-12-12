"use client"

import React from 'react'
import ProfileFollowBtn from './ProfileFollowBtn'
import ProfileMessageBtn from './ProfileMessageBtn'
import { ProfileInterface } from './ProfileInterface'
import { useSession } from 'next-auth/react'
import EditProfileBtn from './EditProfileBtn'

function ProfileInfo({profileImage, userId, name, username, bio, followersCount, followingCount}: ProfileInterface) {
  const session = useSession();
  console.log(session.data?.user.id)
  console.log( profileImage, bio) //did it just to remove build error
  return (
    <>
    <div className='grid grid-cols-2 sm:grid-cols-3 px-3 w-[100%]'>
      <div className='flex justify-center items-center'>
        <div className='h-[50px]  w-[50px] sm:h-[65px] sm:w-[65px] my-4 rounded-full bg-green-400 border-[1px] border-white'>

        </div>
      </div>
      <div className='hidden sm:flex flex-col justify-center items-center' >
        <p className='font-semibold text-2xl'>{followersCount}</p>
        <p>followers</p>
      </div >
      <div className='hidden sm:flex flex-col justify-center items-center '>
        <p className='font-semibold text-2xl'>{followingCount}</p>
        <p>followings</p>
      </div >
      <div className='flex sm:pl-5 flex-col justify-center text-center items-center'>
       <p >
        {name}
        </p>
       <p className='text-sm text-neutral-400'>
        {username}
       </p>
      </div>
      <div className='flex sm:hidden flex-col justify-center items-center' >
        <p className=''>{followersCount} followers</p>
        
      </div >
      <div className='flex sm:hidden flex-col justify-center items-center '>
        <p className=''>{followingCount} followings</p>
        
      </div >
      <div className='pt-3 flex flex-col justify-center items-center'>
        {(session.data?.user.id === userId) ? null : <ProfileFollowBtn profileUserId={userId} /> }
      </div>
      <div className='pt-3 flex flex-col justify-center items-center'>
        {(session.data?.user.id === userId) ? <EditProfileBtn/> : <ProfileMessageBtn /> }
      </div>
      
    </div>
    
    </>
  )
}

export default ProfileInfo