import React from 'react'
import Title from '../common/Title'
import Image from 'next/image'
import { Patient } from '@/types/patient'

interface LabResultsProps {
  patient: Patient | null;
}

const LabResults: React.FC<LabResultsProps> = ({ patient }) => {
  const handleDownload = (testName: string) => {
    // Implement download functionality here
    console.log(`Downloading: ${testName}`);
    // You can trigger actual file download or API call here
  };

  if (!patient) {
    return (
      <div className='bg-white p-5 rounded-[12px]'>
        <Title title='Lab Results'/>
        <div className="mt-5 text-center text-gray-500">
          <p>Select a patient to view lab results</p>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white p-5 rounded-[12px]'>
      <Title title='Lab Results'/>
      <div className="mt-5 max-h-[280px] overflow-y-auto custom-scrollbar pr-2">
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #072635;
            border-radius: 10px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #0a3a4a;
          }

          /* Firefox */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #072635 transparent;
          }
        `}</style>
        <ul className='space-y-3'>
          {patient.lab_results && patient.lab_results.length > 0 ? (
            patient.lab_results.map((test, index) => (
              <li 
                key={index} 
                className='flex justify-between items-center py-3 px-3 hover:bg-[#F6F7F8]  transition-colors'
              >
                <p className='text-[#072635] text-[13px] leading-[18px]'>
                  {test}
                </p>
                <button
                  onClick={() => handleDownload(test)}
                  className='hover:opacity-70 transition-opacity flex-shrink-0 ml-3'
                  aria-label={`Download ${test}`}
                >
                  <Image 
                    src="/download.svg" 
                    alt='Download' 
                    width={20} 
                    height={20}
                  />
                </button>
              </li>
            ))
          ) : (
            <li className='text-center text-gray-500 py-3'>
              No lab results available
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default LabResults