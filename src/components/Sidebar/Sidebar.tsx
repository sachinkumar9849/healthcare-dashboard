import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='bg-white  rounded-[16px] p-4'>
            <div className="flex justify-between items-center mb-5">
                <p className='text-[#072635] text-[24px] font-extrabold'>Patients</p>
                <Image src="/search.svg" alt="search" width={18} height={18} />
            </div>
            <ul>
                <li className='flex justify-between items-center mb-5'>
                    <div className="flex items-center">
                        <Image src="/emily.png" width={48} height={48} alt='img'/>
                        <div className="ml-2">
                            <p className='text-[#072635] text-[14px] font-bold'>Emily Williams</p>
                            <p className='text-[14px] leading-[19px] text-[#707070]'>Female, 18</p>
                        </div>
                    </div>
                    <Image className='mt-2' src="/more_horiz.svg" alt="more_horiz" width={18} height={4} />
                    
                </li>
                 <li className='flex justify-between items-center mb-5'>
                    <div className="flex items-center">
                        <Image src="/emily.png" width={48} height={48} alt='img'/>
                        <div className="ml-2">
                            <p className='text-[#072635] text-[14px] font-bold'>Emily Williams</p>
                            <p className='text-[14px] leading-[19px] text-[#707070]'>Female, 18</p>
                        </div>
                    </div>
                    <Image className='mt-2' src="/more_horiz.svg" alt="more_horiz" width={18} height={4} />
                    
                </li>
                 <li className='flex justify-between items-center mb-5'>
                    <div className="flex items-center">
                        <Image src="/emily.png" width={48} height={48} alt='img'/>
                        <div className="ml-2">
                            <p className='text-[#072635] text-[14px] font-bold'>Emily Williams</p>
                            <p className='text-[14px] leading-[19px] text-[#707070]'>Female, 18</p>
                        </div>
                    </div>
                    <Image className='mt-2' src="/more_horiz.svg" alt="more_horiz" width={18} height={4} />
                    
                </li>
            </ul>
        </div>
    )
}

export default Sidebar