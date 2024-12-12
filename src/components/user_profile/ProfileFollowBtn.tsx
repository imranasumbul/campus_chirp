"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react';
import RegisterOrLogin from '../dialogs/RegisterOrLogin';
import axios from 'axios';
import followOrUnfoolow from '@/actions/followOrUnfollow';
interface ProfileFollowBtnProps {
  profileUserId : string
}

function ProfileFollowBtn({profileUserId} : ProfileFollowBtnProps) {
  
  const session = useSession();
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  const followerId = session.data?.user.id as string;
  useEffect(function () {
    async function a(){ 
      const followingIds : string[] = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFollowing`, {
        params: {
          userId: followerId
        }
        
      })

      followingIds.forEach((id) => {
        if(id !== profileUserId){
          setIsFollowing(false)
        }else{
          setIsFollowing(true)
        }

      })

      
    }
    a();
  },[])
  

  const element = <Button onClick={async function (){
    //const result = 
    await followOrUnfoolow({followerId, isFollowing, followingId: profileUserId});
    setIsFollowing((c) => c = !c)
  }} className='min-w-[60%]'>{(isFollowing) ? 'Unfollow' : 'Follow'}</Button>;
  return (
    <>
    {session.data ? element : <RegisterOrLogin triggerItem={element} />}
     
    </>
  )
}

export default ProfileFollowBtn