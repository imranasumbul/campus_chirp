import React, { useState } from 'react'

function PostTextArea() {
    const [postContent, setPostContent] = useState("");
  return (
    <textarea className='w-[100%] p-1 min-h-[100px] border-none focus:outline-none bg-transparent text-dark-text' placeholder="What's on your mind?" onChange={(e) => setPostContent(e.target.value)}>
        {postContent}
    </textarea>
  )
}

export default PostTextArea