import React from "react";
import Title from "../common/Title";
import { Patient } from "@/types/patient";

interface DiagnosticListProps {
  patient: Patient | null;
}

const DiagnosticList = ({ patient }: DiagnosticListProps) => {
  if (!patient) {
    return (
      <div className="mt-7 rounded-[16px] bg-white p-4">
        <Title title="Diagnostic List" />
        <p className="py-8 text-center text-[#707070]">No patient selected</p>
      </div>
    );
  }

  const diagnostics = patient.diagnostic_list || [];

  return (
    <div className="mt-7 rounded-[16px] bg-white p-4">
      <Title title="Diagnostic List" />
      <div className="mt-6 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 rounded-full border-gray-200 bg-[#F6F7F8] px-6 py-4">
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
        <div className="max-h-64 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-track]:bg-gray-100">
          {diagnostics.length > 0 ? (
            diagnostics.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-4 border-b border-gray-100 px-6 py-5 transition-colors last:border-b-0"
              >
                <div className="col-span-3 text-[14px] leading-[19px] text-[#072635]">
                  {item.name}
                </div>
                <div className="col-span-6 text-[14px] leading-[19px] text-[#072635]">
                  {item.description}
                </div>
                <div className="col-span-3 text-[14px] leading-[19px] text-[#072635]">
                  {item.status}
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-[#707070]">
              No diagnostic records available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticList;
