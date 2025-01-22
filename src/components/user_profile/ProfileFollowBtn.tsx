"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react';
import RegisterOrLogin from '../dialogs/RegisterOrLogin';
import followOrUnfoolow from '@/actions/followOrUnfollow';
interface ProfileFollowBtnProps {
  profileUserId : string
}

function ProfileFollowBtn({profileUserId} : ProfileFollowBtnProps) {
  
  const session = useSession();
  const [isFollowing, setIsFollowing] = useState<boolean | null>(null);
  const [followingIds, setFollowingIds] = useState<null | string[]>(null);
  const followerId = session.data?.user.id as string;
  
    console.log(`${followerId} is followerid`)
  useEffect(function () {
    if (!followerId) {
    setIsFollowing(false);
  }
  else{
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getFollowingIds?userid=${followerId}`).then((res) => res.json()).then((res) => {
        console.log(`res is ${JSON.stringify(res)}`);
        const fetchedFollowingIds = res.followingIds; // Use the response directly
        setFollowingIds(fetchedFollowingIds);
        if (followingIds?.includes(profileUserId)) {
          setIsFollowing(true);
        } else {
          setIsFollowing(false);
        }
        console.log(`${isFollowing} is following?`)

       })
      }
    },[])
  
  
  

  return (
    <>
    {session.data ? 
    (isFollowing=== null ? <Button className='sm:min-w-[60%]' disabled>Loading...</Button> : 
      (isFollowing === false ? <Button className='sm:min-w-[60%]' onClick={async () => {
        await followOrUnfoolow({followerId, isFollowing, followingId: profileUserId});
        setIsFollowing((c) => c = !c)
      }} >Follow</Button> : <Button className='sm:min-w-[60%]' onClick={async () => {
        await followOrUnfoolow({followerId, isFollowing, followingId: profileUserId});
        setIsFollowing((c) => c = !c)
      }} >Unfollow</Button> )
    ) 
    : <RegisterOrLogin triggerItem={<div className='bg-dark-light-violet  rounded-lg text-dark-text hover:bg-dark-dark-violet h-9 px-6 font-normal py-1 flex justify-center items-center  sm:min-w-[60%]'>
      Follow
    </div>} />}
    </>

  )
}

export default ProfileFollowBtn;