import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import PostTextArea from './PostTextArea';

  
function PostDialog({triggerItem}: {triggerItem: React.ReactNode}) {
  return (
    <Dialog>
  <DialogTrigger>{triggerItem}</DialogTrigger>
  <DialogContent className='text-dark-text'>
    <DialogHeader>
      <DialogTitle>Post Something</DialogTitle>
      <DialogDescription>
        <PostTextArea />
      </DialogDescription>
    </DialogHeader>
    
  </DialogContent>
</Dialog>

  )
}

export default PostDialog;