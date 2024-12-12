import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
function PostDialog({triggerItem}: {triggerItem: React.ReactNode}) {
  return (
    <Dialog>
  <DialogTrigger>{triggerItem}</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Posting...</DialogTitle>
      <DialogDescription>
        Post content
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default PostDialog;