import React from 'react'
import Image from "next/image";
import { UserButton } from '@clerk/nextjs';
function Header() {

    const headerMenu = [
        {
            id: 1,
            name: 'Ride',
            icon: '/caricon.jpg'
        },
        {
            id: 2,
            name: 'package',
            icon: '/pk1.jpg'
        },
        // {
        //     id: 3,
        //     name: 'Ride',
        //     icon: '/taxi3.jpg'
        // }
    ]
    return (
        <div className='p-5 pb-3 pl-10 border-b-[4px]
        border-gray-200 flex items-center justify-between'>
            <div className='flex gap-24 items center'>
                <Image
                    src="/open.jpg"
                    width={70}
                    height={70}
                    alt="Picture of the author"


                />
                <div className='flex gap-6 items-center'>
                    {headerMenu.map((item) => (
                        <div className='flex gap-2 items-center'>
                            <Image src={item.icon}
                                width={17} height={17}/>
                            <h2 className='text-[14px] font-medium'>{item.name}</h2>
                        </div>
                    ))}
                </div>
                
            </div>
            <UserButton/>
        </div>

        // <Image src='/tax1.jpg' 
        // width={70} 
        // height={70}
        // alt='logo'></Image>


    )

}

export default Header