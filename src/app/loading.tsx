
"use client";

export default function Loading() {
  

  return (
    <div className='flex space-x-2 justify-center items-center h-screen dark:invert'>
      <span className='sr-only text-white'>Loading...</span>
        <div className='h-6 w-6 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-6 w-6 bg-neutral-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-6 w-6 bg-neutral-400 rounded-full animate-bounce'></div>
    </div>
  );
}
