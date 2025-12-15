import React from 'react'
import Title from '../common/Title'
import Image from 'next/image'

const History = () => {
    return (
        <div className='bg-white  rounded-[16px] p-4'>
            <Title title="Diagnosis History" />

            <div className="grid grid-cols-3 gap-4 mt-5">
                <div className="col-span-1">
                    <div className="bg-[#E0F3FA] p-5 rounded-[12px] flex flex-col ">
                        <Image src="/respiratory.svg" width={96} height={96} alt='img'/>
                        <p className='text-[#072635] text-[16px] font-medium'>Respiratory Rate</p>
                        <p className='text-[30px] font-extrabold leading-[41px]'>20 bpm</p>
                        <p className='text-[#072635] text-[14px] leading-[19px] mt-3'>Normal</p>
                    </div>
                </div>
                 <div className="col-span-1">
                    <div className="bg-[#FFE6E9] p-5 rounded-[12px] flex flex-col ">
                        <Image src="/temperature.svg" width={96} height={96} alt='img'/>
                        <p className='text-[#072635] text-[16px] font-medium'>Respiratory Rate</p>
                        <p className='text-[30px] font-extrabold leading-[41px]'>20 bpm</p>
                        <p className='text-[#072635] text-[14px] leading-[19px] mt-3'>Normal</p>
                    </div>
                </div>
                 <div className="col-span-1">
                    <div className="bg-[#E0F3FA] p-5 rounded-[12px] flex flex-col ">
                        <Image src="/HeartBPM.svg" width={96} height={96} alt='img'/>
                        <p className='text-[#072635] text-[16px] font-medium'>Respiratory Rate</p>
                        <p className='text-[30px] font-extrabold leading-[41px]'>20 bpm</p>
                        <p className='text-[#072635] text-[14px] leading-[19px] mt-3'>Normal</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default History