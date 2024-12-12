"use client"
import Link from 'next/link';

import React from 'react'
import { Button } from '../ui/button';

function RecommendedButtons({userId}: {userId?: string}) {
  
  return (
    <>
    <Link href={`/user/${userId}`}>
    <Button className='w-[100%]'>View Profile</Button>
    </Link>
    </>
  )
}

export default RecommendedButtons;