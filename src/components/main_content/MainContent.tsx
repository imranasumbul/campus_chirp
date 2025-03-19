'use client'

import React, { useEffect, useState } from 'react'
import Post from './Post';
interface Posts {
    body: string, 
    createdAt: string, 
    updatedAt: string, 
    id: string, 
    user: {
        name: string,
        username: string,
        id: string
        

    }}
function MainContent() {
    const [recommendedPosts, setRecommendedPosts] = useState<Posts[]>([]);
        useEffect(() => {
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`).then((data) => data.json()).then((jsonData) => setRecommendedPosts(jsonData));
        }, []);
  return (
    <>
    {recommendedPosts?.map((post) => {
        return <Post key={post.id} postId={post?.id} createdAt={post.createdAt} updatedAt={post.updatedAt} body={post.body} creatorUsername={post.user.username} creatorName={post.user.name} creatorId={post.user.id} />
    })}
    </>
    
  )
}

export default MainContent