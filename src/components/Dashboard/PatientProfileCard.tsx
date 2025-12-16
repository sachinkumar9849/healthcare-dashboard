"use client";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import Image from "next/image";
import { Patient } from "@/types/patient";
import { fetchPatients } from "@/lib/api";
import LabResults from "./LabResults";

type PatientProfileCardProps = {
  patient?: Patient | null;
};

export default function PatientProfileCard({
  patient,
}: PatientProfileCardProps) {
  const [jessicaTaylor, setJessicaTaylor] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadJessicaTaylor = async () => {
      try {
        setLoading(true);
        const patients = await fetchPatients();

        const jessica = patients.find((p) => p.name === "Jessica Taylor");
        setJessicaTaylor(jessica || null);
      } catch (error) {
        console.error("Error loading patient data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadJessicaTaylor();
  }, []);

  const handleShowAllInfo = () => {
    console.log("Show all information clicked");
    alert("Showing all information...");
  };

  if (loading) {
    return (
      <div className="rounded-[16px] bg-white p-7">
        <p className="py-8 text-center text-[var(--gray-dark)]">
          Loading patient information...
        </p>
      </div>
    );
  }

  if (!jessicaTaylor) {
    return (
      <div className="rounded-[16px] bg-white p-7">
        <p className="py-8 text-center text-[var(--gray-dark)]">
          Patient not found
        </p>
      </div>
    );
  }

  // Format date of birth
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="mb-5 rounded-[16px] bg-white p-7">
        <div className="mb-6 flex justify-center">
          <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
            <img
              src={jessicaTaylor.profile_picture}
              alt={jessicaTaylor.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h2 className="mb-8 text-center text-[24px] font-extrabold text-[var(--black-dark)]">
          {jessicaTaylor.name}
        </h2>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                width={42}
                height={42}
                src="/BirthIcon.svg"
                alt="birth icon"
              />
            </div>
            <div>
              <p className="text-[14px] leading-[19px] font-medium text-[var(--black-dark)]">
                Date Of Birth
              </p>
              <p className="mt-1 text-[14px] leading-[19px] font-bold text-[var(--black-dark)]">
                {formatDate(jessicaTaylor.date_of_birth)}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                width={42}
                height={42}
                src={
                  jessicaTaylor.gender === "Female"
                    ? "/FemaleIcon.svg"
                    : "/MaleIcon.svg"
                }
                alt="gender icon"
              />
            </div>
            <div>
              <p className="text-[14px] leading-[19px] font-medium text-[var(--black-dark)]">
                Gender
              </p>
              <p className="mt-1 text-[14px] leading-[19px] font-bold text-[var(--black-dark)]">
                {jessicaTaylor.gender}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                width={42}
                height={42}
                src="/PhoneIcon.svg"
                alt="phone icon"
              />
            </div>
            <div>
              <p className="text-sm text-[14px] leading-[19px] font-medium text-[var(--black-dark)]">
                Contact Info.
              </p>
              <p className="mt-1 text-[14px] leading-[19px] font-bold text-[var(--black-dark)]">
                {jessicaTaylor.phone_number}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                width={42}
                height={42}
                src="/PhoneIcon.svg"
                alt="phone icon"
              />
            </div>
            <div>
              <p className="text-sm text-[14px] leading-[19px] font-medium text-[var(--black-dark)]">
                Emergency Contacts
              </p>
              <p className="mt-1 text-[14px] leading-[19px] font-bold text-[var(--black-dark)]">
                {jessicaTaylor.emergency_contact}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Image
                width={42}
                height={42}
                src="/InsuranceIcon.svg"
                alt="insurance icon"
              />
            </div>
            <div>
              <p className="text-sm text-[14px] leading-[19px] font-medium text-[var(--black-dark)]">
                Insurance Provider
              </p>
              <p className="mt-1 text-[14px] leading-[19px] font-bold text-[var(--black-dark)]">
                {jessicaTaylor.insurance_type}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 lg:w-5/6">
          <Button onClick={handleShowAllInfo}>Show All Information</Button>
        </div>
      </div>
      <LabResults patient={patient ?? null} />
    </>
  );
}
