
import React from 'react'
import ProfileInfo from './ProfileInfo';
import axios from 'axios';

async function Profile({userId}: {userId : string}) {
    
    const userDetails = (await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userDetails?userId=${userId}`)).data

    
 
  return (
    <>
    <ProfileInfo userId={userId} profileImage={userDetails?.profileImage} name={userDetails?.name} username={userDetails?.username} bio={userDetails?.bio} followersCount={userDetails?.followersCount} followingCount={userDetails?.followingCount} />
    
    </>
  )
}

export default Profile