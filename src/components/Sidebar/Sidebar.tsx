"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Title from "../common/Title";
import { Patient } from "@/types/patient";
import { fetchPatients } from "@/lib/api";

interface SidebarProps {
  onPatientSelect?: (patient: Patient) => void;
  selectedPatient?: Patient | null;
}

const Sidebar = ({ onPatientSelect, selectedPatient }: SidebarProps) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatients = async () => {
      try {
        setLoading(true);
        const data = await fetchPatients();
        setPatients(data);
        // Auto-select first patient if no patient is selected
        if (data.length > 0 && !selectedPatient && onPatientSelect) {
          onPatientSelect(data[0]);
        }
      } catch (err) {
        setError("Failed to load patients");
        console.error("Error loading patients:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  if (loading) {
    return (
      <div className="rounded-[16px] bg-white p-4">
        <div className="mb-5 flex items-center justify-between">
          <Title title="Patients" />
          <Image src="/search.svg" alt="search" width={18} height={18} />
        </div>
        <p className="py-4 text-center text-[#707070]">Loading patients...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[16px] bg-white p-4">
        <div className="mb-5 flex items-center justify-between">
          <Title title="Patients" />
          <Image src="/search.svg" alt="search" width={18} height={18} />
        </div>
        <p className="py-4 text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col rounded-[16px] bg-white py-4 pr-1">
      <div className="mb-5 flex items-center justify-between px-4">
        <Title title="Patients" />
        <Image src="/search.svg" alt="search" width={18} height={18} />
      </div>
      <ul className="flex-1 overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-track]:bg-gray-100">
        {patients.map((patient, index) => (
          <li
            key={index}
            className={`mb-5 flex cursor-pointer items-center justify-between px-4 transition-colors ${
              selectedPatient?.name === patient.name ? "bg-[#D8FCF7] p-2" : ""
            }`}
            onClick={() => onPatientSelect && onPatientSelect(patient)}
          >
            <div className="flex items-center">
              <Image
                src={patient.profile_picture}
                width={48}
                height={48}
                alt={patient.name}
                className="rounded-full"
              />
              <div className="ml-2">
                <p className="text-[14px] font-bold text-[#072635]">
                  {patient.name}
                </p>
                <p className="text-[14px] leading-[19px] text-[#707070]">
                  {patient.gender}, {patient.age}
                </p>
              </div>
            </div>
            <Image
              className="mt-2"
              src="/more_horiz.svg"
              alt="more_horiz"
              width={18}
              height={4}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
