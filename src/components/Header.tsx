import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-whiteBg py-2 px-5 bg-white rounded-full flex justify-between items-center shadow-card-hover mb-6'>
      <div className="reltive">
        <Image src="/logo.svg" className='w-[211px]' alt='img' width={500} height={48} />
      </div>
      <div className="">
        <ul className='flex gap-8'>
          <Link className='flex items-center' href="#">
            <Image src="/home.svg" alt="profile" width={16} height={16} />
            <span className='text-[#072635] text-[14px] ml-2 font-bold'>Overview</span>
          </Link>
          <Link className='flex items-center bg-[#01F0D0] rounded-full px-4 py-2' href="#">
            <Image src="/patients.svg" alt="profile" width={16} height={16} />
            <span className='text-[#072635] text-[14px] ml-2 font-bold'>Patients</span>
          </Link>
          <Link className='flex items-center' href="#">
            <Image src="/schedule.svg" alt="profile" width={16} height={16} />
            <span className='text-[#072635] text-[14px] ml-2 font-bold'>Schedule</span>
          </Link>
          <Link className='flex items-center' href="#">
            <Image src="/message.svg" alt="profile" width={16} height={16} />
            <span className='text-[#072635] text-[14px] ml-2 font-bold'>Message</span>
          </Link>
          <Link className='flex items-center' href="#">
            <Image src="/transactions.svg" alt="profile" width={16} height={16} />
            <span className='text-[#072635] text-[14px] ml-2 font-bold'>Transactions</span>
          </Link>

        </ul>
      </div>
      <div className="">
        <div className="flex items-center gap-2">
          <Image src="/doctor.png" alt="profile" width={44} height={44} />
          <div className="flex flex-col border-r border-[#EDEDED] pr-4">
            <p className='text-[#072635] text-[14px]  font-bold'>Dr. Jose Simmons</p>
            <p className='text-[#707070] text-[14px]'>General Practitioner</p>
          </div>
          <Image className='mr-2 ml-1' src="/seatting.svg" alt="profile" width={20} height={20} />
          <Image src="/more.svg" alt="profile" width={4} height={18} />
        </div>
      </div>

    </div>
  )
}

export default Header