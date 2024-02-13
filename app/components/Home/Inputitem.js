import React from 'react'
import Image from "next/image";
function Inputitem() {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3
    flex items-center gap-4'>
        <Image src='/next.svg'
        width={20}
        height={20}
        />
        <input type='text' placeholder='pickup loacation'
        className='bg-transparent w-full'
        />
    </div>
  )
}

export default Inputitem