import React from 'react';
import Title from '../common/Title';
import Image from 'next/image';
import { Patient } from '@/types/patient';
import Chart from './Chart';

interface HistoryProps {
  patient: Patient | null;
}

const History = ({ patient }: HistoryProps) => {
  if (!patient) {
    return (
      <div className='bg-white rounded-[16px] p-4'>
        <Title title="Diagnosis History" />
        <p className='text-[#707070] text-center py-8'>No patient selected</p>
      </div>
    );
  }

  // Get the most recent diagnosis history (first item in the array)
  const latestHistory = patient.diagnosis_history?.[0];

  if (!latestHistory) {
    return (
      <div className='bg-white rounded-[16px] p-4'>
        <Title title="Diagnosis History" />
        <p className='text-[#707070] text-center py-8'>No diagnosis history available</p>
      </div>
    );
  }

  return (
    <div className='bg-white rounded-[16px] p-4'>
      <Title title="Diagnosis History" />

      <Chart/>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {/* Respiratory Rate Card */}
        <div className="col-span-1">
          <div className="bg-[#E0F3FA] p-5 rounded-[12px] flex flex-col">
            <Image src="/respiratory.svg" width={96} height={96} alt='respiratory' />
            <p className='text-[#072635] text-[16px] font-medium mt-3'>Respiratory Rate</p>
            <p className='text-[30px] font-extrabold leading-[41px]'>
              {latestHistory.respiratory_rate.value} bpm
            </p>
            <p className='text-[#072635] text-[14px] leading-[19px] mt-3'>
              {latestHistory.respiratory_rate.levels}
            </p>
          </div>
        </div>

        {/* Temperature Card */}
        <div className="col-span-1">
          <div className="bg-[#FFE6E9] p-5 rounded-[12px] flex flex-col">
            <Image src="/temperature.svg" width={96} height={96} alt='temperature' />
            <p className='text-[#072635] text-[16px] font-medium mt-3'>Temperature</p>
            <p className='text-[30px] font-extrabold leading-[41px]'>
              {latestHistory.temperature.value}°F
            </p>
            <p className='text-[#072635] text-[14px] leading-[19px] mt-3'>
              {latestHistory.temperature.levels}
            </p>
          </div>
        </div>

        {/* Heart Rate Card */}
        <div className="col-span-1">
          <div className="bg-[#FFE6F1] p-5 rounded-[12px] flex flex-col">
            <Image src="/HeartBPM.svg" width={96} height={96} alt='heart rate' />
            <p className='text-[#072635] text-[16px] font-medium mt-3'>Heart Rate</p>
            <p className='text-[30px] font-extrabold leading-[41px]'>
              {latestHistory.heart_rate.value} bpm
            </p>
            <p className='text-[#072635] text-[14px] leading-[19px] mt-3 flex items-center gap-2'>
              <Image 
                src={latestHistory.heart_rate.levels.includes('Lower') ? '/ArrowDown.png' : '/ArrowUp.svg'} 
                width={10} 
                height={5} 
                alt='arrow'
              />
              {latestHistory.heart_rate.levels}
            </p>
          </div>
        </div>
      </div>

    
      
    </div>
  );
};

export default History;