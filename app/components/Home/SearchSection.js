import React from 'react'
import Inputitem from './Inputitem';
function SearchSection() {
  return (
    <div className='p-2 md:pd-5 border-[2px] rounded-xl'>
      <p className='text-[20px]'>Get a ride</p>
      <Inputitem type='source'/>
      <Inputitem type='destinaton'/>
      <button className='p-3 bg-black w-full mt-5
      text-white rounded-lg'>Search</button>
    </div>
  )
}

export default SearchSection