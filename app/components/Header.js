import React from 'react'
import Image from "next/image";
function Header() {
 
    const headerMenu=[
        {
            id:1,
            name:'Ride',
            icon: '/tax1.jpg'
        },
        {
            id:2,
            name:'Ride',
            icon: '/taxi2.jpg'
        },
        {
            id:3,
            name:'Ride',
            icon: '/taxi3.jpg'
        }
    ]
    return(
        <div className='p-5 pb-3 pl-10 border-b-[4px]
        border-gray-200 '>
            <div>
        <Image
        src="/open.jpg"
        width={70}
        height={70}
        alt="Picture of the author"
        
    
    />
    <div>
        {headerMenu.map((item)=>{
            <div>
                <Image src={item.icon}
                width={17} height={17}
                />
            </div>
        })}
    </div>
    </div>
    </div>
        
                // <Image src='/tax1.jpg' 
                // width={70} 
                // height={70}
                // alt='logo'></Image>
           
      
    )
  
}

export default Header