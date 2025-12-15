import React from 'react';
import Title from '../common/Title';
import { Patient } from '@/types/patient';

interface DiagnosticListProps {
  patient: Patient | null;
}

const DiagnosticList = ({ patient }: DiagnosticListProps) => {
  if (!patient) {
    return (
      <div className='bg-white rounded-[16px] p-4 mt-7'>
        <Title title="Diagnostic List" />
        <p className='text-[#707070] text-center py-8'>No patient selected</p>
      </div>
    );
  }

  const diagnostics = patient.diagnostic_list || [];

  return (
    <div className='bg-white rounded-[16px] p-4 mt-7'>
      <Title title="Diagnostic List" />
      <div className="overflow-hidden mt-6">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#F6F7F8] rounded-full border-gray-200">
          <div className="col-span-3 text-[14px] leading-[19px] font-bold text-[#072635]">
            Problem/Diagnosis
          </div>
          <div className="col-span-6 text-[14px] leading-[19px] font-bold text-[#072635]">
            Description
          </div>
          <div className="col-span-3 text-[14px] leading-[19px] font-bold text-[#072635]">
            Status
          </div>
        </div>

        {/* Table Body */}
        <div className="max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-thumb]:rounded-full">
          {diagnostics.length > 0 ? (
            diagnostics.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-gray-100 last:border-b-0 transition-colors"
              >
                <div className="col-span-3 text-[#072635] text-[14px] leading-[19px]">
                  {item.name}
                </div>
                <div className="col-span-6 text-[#072635] text-[14px] leading-[19px]">
                  {item.description}
                </div>
                <div className="col-span-3 text-[#072635] text-[14px] leading-[19px]">
                  {item.status}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-[#707070]">
              No diagnostic records available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;