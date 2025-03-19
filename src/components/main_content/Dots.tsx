import React, { useState } from 'react'
import { BiBlock, BiDotsHorizontalRounded} from 'react-icons/bi'
import { FaBookmark} from 'react-icons/fa';

function Dots() {
    const [showOptions, setShowOptions] = useState(false);
  return (
    <>
    <div className='relative'>
         <BiDotsHorizontalRounded onClick={() => {setShowOptions((c) => !c)}} color='neutral-300' size={30}/>
         {showOptions ? <div className='absolute z-10 border-[1px] px-2 w-[100px] py-2 grid grid-cols-[auto_1fr] items-center gap-y-2 gap-x-3 bg-dark-card rounded-lg border-neutral-600 right-0 top-8'>
            <FaBookmark size={16}/> <div>Save</div>
            <BiBlock size={18} /> <div >Block</div>
            
            </div> : null}
    </div>
    
    
    </>
    
  )
}

export default Dots