import React from 'react'
import Image from "next/image";
function Inputitem() {
  return (
    <div className='bg-slate'>
        <Image src='/next.svg'
        width={20}
        height={20}
        />
        <input type='text' placeholder='pickup loacation'></input>
    </div>
  )
}

export default Inputitem