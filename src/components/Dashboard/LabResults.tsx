import React from "react";
import Title from "../common/Title";
import Image from "next/image";
import { Patient } from "@/types/patient";

interface LabResultsProps {
  patient: Patient | null;
}

const LabResults: React.FC<LabResultsProps> = ({ patient }) => {
  const handleDownload = (testName: string) => {
    console.log(`Downloading: ${testName}`);
  };

  if (!patient) {
    return (
      <div className="rounded-[12px] bg-white p-5">
        <Title title="Lab Results" />
        <div className="mt-5 text-center text-gray-500">
          <p>Select a patient to view lab results</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[12px] bg-white p-5">
      <Title title="Lab Results" />
      <div className="custom-scrollbar mt-5 max-h-[280px] overflow-y-auto pr-2">
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
        <ul className="space-y-3">
          {patient.lab_results && patient.lab_results.length > 0 ? (
            patient.lab_results.map((test, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-3 py-3 transition-colors hover:bg-[#F6F7F8]"
              >
                <p className="text-[13px] leading-[18px] text-[var(--black-dark)]">
                  {test}
                </p>
                <button
                  onClick={() => handleDownload(test)}
                  className="ml-3 flex-shrink-0 transition-opacity hover:opacity-70"
                  aria-label={`Download ${test}`}
                >
                  <Image
                    src="/download.svg"
                    alt="Download"
                    width={20}
                    height={20}
                  />
                </button>
              </li>
            ))
          ) : (
            <li className="py-3 text-center text-gray-500">
              No lab results available
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LabResults;
