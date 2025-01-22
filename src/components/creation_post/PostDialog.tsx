import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import PostTextArea from './PostTextArea';
import { Button } from '../ui/button';
  
function PostDialog({triggerItem}: {triggerItem: React.ReactNode}) {
  return (
    <Dialog>
  <DialogTrigger>{triggerItem}</DialogTrigger>
  <DialogContent className='text-dark-text'>
    <DialogHeader>
      <DialogTitle>holavfbhoijlk</DialogTitle>
      <DialogDescription>
        <PostTextArea />
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button className='w-[100px]'>Post</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

  )
}

export default PostDialog;