"use client"

import React, { useEffect, useState } from 'react'
import RecommendedWrapper from './RecommendedWrapper';
import { UserInterface } from './UserInterface';
import { useSession } from 'next-auth/react';



function Recommended() {
    const [recommendedUsers, setRecommendedUsers] = useState([]);
    const ownerId = useSession().data?.user.id;
    useEffect(() => {
        if(ownerId){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users?ownerId=${ownerId}`).then((data) => data.json()).then((jsonData) => setRecommendedUsers(jsonData));
        }else{
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users?ownerId=null`).then((data) => data.json()).then((jsonData) => setRecommendedUsers(jsonData));
    
        }
        }, []);
    
    
    
    return (
        <>
            <div className='flex flex-col my-4 space-y-4'>

                
                { recommendedUsers?.map((user : UserInterface) => {
                    return (
                    <RecommendedWrapper key={user.id} id={user.id} name={user.name} username={user.username} profileImage={user.profileImage} />            
                )
                })
                }
            </div>
        </>
    )
}

export default Recommended