"use client"

import { useSession } from 'next-auth/react'
import React from 'react'
import SidebartweetBtn from './SidebartweetBtn';
import RegisterOrLogin from '../dialogs/RegisterOrLogin';
import PostDialog from '../creation_post/PostDialog';

function PostButtonLogic() {
    const session = useSession();
    if(!session.data){
        return (
            <>
            <RegisterOrLogin triggerItem={<SidebartweetBtn />}/>
            </>
        )
    }

  return (

        <>
        <PostDialog triggerItem={<SidebartweetBtn />} />
        </>
  )
}

export default PostButtonLogic