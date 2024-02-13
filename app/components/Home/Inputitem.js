import React from 'react'
import Image from "next/image";

 
function Inputitem({type}) {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3
    flex items-center gap-4'>
        <Image src={type=='source'?'/pk.jpg':'/pk1.jpg'}
        width={20}
        height={20}
        />
        <input type='text'
         placeholder={type=='source'?'pickup loacation':'Dropoff location'}
        className='bg-transparent w-full outline-none'
        />
    </div> 
  )
}

export default Inputitem