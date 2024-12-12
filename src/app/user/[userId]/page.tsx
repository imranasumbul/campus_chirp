
import Header from '@/components/header/Header';
import Profile from '@/components/user_profile/Profile';
import React from 'react'

interface PageProps {
    params: {
        userId : string
    },
    searchParams : {

    }
}
 function page(props : PageProps) {
    const userId =  props.params.userId;
   
  return (
    <>
    <Header />
    <Profile userId={userId} />
    
    </>
    
  )
}

export default page