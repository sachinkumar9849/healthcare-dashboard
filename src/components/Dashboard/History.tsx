import React from "react";
import Title from "../common/Title";
import Image from "next/image";
import { Patient } from "@/types/patient";
import Chart from "./Chart";

interface HistoryProps {
  patient: Patient | null;
}

const History = ({ patient }: HistoryProps) => {
  if (!patient) {
    return (
      <div className="rounded-[16px] bg-white p-4">
        <Title title="Diagnosis History" />
        <p className="py-8 text-center text-[var(--gray-dark)]">
          No patient selected
        </p>
      </div>
    );
  }

  // Get the most recent diagnosis history (first item in the array)
  const latestHistory = patient.diagnosis_history?.[0];

  if (!latestHistory) {
    return (
      <div className="rounded-[16px] bg-white p-4">
        <Title title="Diagnosis History" />
        <p className="py-8 text-center text-[var(--gray-dark)]">
          No diagnosis history available
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[16px] bg-white p-4">
      <div className="mb-5">
        <Title title="Diagnosis History" />
      </div>

      <Chart patient={patient} />

      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className="col-span-1">
          <div className="flex flex-col rounded-[12px] bg-[#E0F3FA] p-5">
            <Image
              src="/respiratory.svg"
              width={96}
              height={96}
              alt="respiratory"
            />
            <p className="mt-3 text-[16px] font-medium text-[var(--black-dark)]">
              Respiratory Rate
            </p>
            <p className="text-[30px] leading-[41px] font-extrabold">
              {latestHistory.respiratory_rate.value} bpm
            </p>
            <p className="mt-3 text-[14px] leading-[19px] text-[var(--black-dark)]">
              {latestHistory.respiratory_rate.levels}
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col rounded-[12px] bg-[#FFE6E9] p-5">
            <Image
              src="/temperature.svg"
              width={96}
              height={96}
              alt="temperature"
            />
            <p className="mt-3 text-[16px] font-medium text-[var(--black-dark)]">
              Temperature
            </p>
            <p className="text-[30px] leading-[41px] font-extrabold">
              {latestHistory.temperature.value}°F
            </p>
            <p className="mt-3 text-[14px] leading-[19px] text-[var(--black-dark)]">
              {latestHistory.temperature.levels}
            </p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-col rounded-[12px] bg-[#FFE6F1] p-5">
            <Image
              src="/HeartBPM.svg"
              width={96}
              height={96}
              alt="heart rate"
            />
            <p className="mt-3 text-[16px] font-medium text-[var(--black-dark)]">
              Heart Rate
            </p>
            <p className="text-[30px] leading-[41px] font-extrabold">
              {latestHistory.heart_rate.value} bpm
            </p>
            <p className="mt-3 flex items-center gap-2 text-[14px] leading-[19px] text-[var(--black-dark)]">
              <Image
                src={
                  latestHistory.heart_rate.levels.includes("Lower")
                    ? "/ArrowDown.png"
                    : "/ArrowUp.svg"
                }
                width={10}
                height={5}
                alt="arrow"
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
