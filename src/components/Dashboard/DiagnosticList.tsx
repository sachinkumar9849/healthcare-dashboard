import React from 'react'
import Title from '../common/Title'

const DiagnosticList = () => {
    const diagnostics = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation"
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured"
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive"
    },
    {
      problem: "Osteoarthritis",
      description: "Degenerative joint disease",
      status: "Under observation"
    }
  ];
  return (
    <div className='bg-white  rounded-[16px] p-4 mt-7'>
         <Title title="Diagnostic List" />
         <div className=" overflow-hidden mt-6">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#F6F7F8]  rounded-full border-gray-200">
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
          <div className="max-h-64 overflow-y-auto">
            {diagnostics.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-gray-100 last:border-b-0  transition-colors"
              >
                <div className="col-span-3 text-[#072635] text-[14px] leading-[19px]">
                  {item.problem}
                </div>
                <div className="col-span-6 text-[#072635] text-[14px] leading-[19px]">
                  {item.description}
                </div>
                <div className="col-span-3 text-[#072635] text-[14px] leading-[19px]">
                  {item.status}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default DiagnosticList