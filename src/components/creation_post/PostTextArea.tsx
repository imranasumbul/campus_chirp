import React, { useState } from 'react'
import { Button } from '../ui/button';
import { useSession } from 'next-auth/react';
import reactToast from '@/lib/reactToast';
//import { error } from 'console';

function PostTextArea() {
    const [postContent, setPostContent] = useState("");
    const userId = useSession().data?.user.id;
    const submitFunc = () => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/createPost`, {
        method: 'POST',
        body: JSON.stringify({ userId, body: postContent })
      }).then((res) => res.json().then((res) => {
        if (!res.ok) {
           reactToast({message: `An unexpected error occured. Please try later.`, type: 'error', duration: 5000});
          } else {
           reactToast({message: `Post created successfully`, type: 'success', duration: 3000})
      }

    }))};

  return (
    <>
    <textarea className='w-[100%] p-1 min-h-[100px] border-[1px] border-neutral-400 focus:outline-none bg-transparent text-dark-text' placeholder="What's on your mind?" onChange={(e) => setPostContent(e.target.value)}>
        {postContent}
    </textarea>
    <div className='w-[100%] mt-2 flex justify-end'> 
    <Button onClick={submitFunc}
       className='px-12'>Post</Button>
    </div>
    
    </>
  )

}

export default PostTextArea