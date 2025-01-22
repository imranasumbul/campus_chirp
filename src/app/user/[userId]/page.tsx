
import Header from '@/components/header/Header';
import Profile from '@/components/user_profile/Profile';
import React from 'react'


 function page({params} : {params: {userId : string}}) {
  
   
  return (
    <>
    <Header />
    <Profile userId={params.userId}/>
    
    </>
    
  )
}

export default page