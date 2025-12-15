"use client";
import React, { useEffect, useState } from 'react';
import Button from '../common/Button';
import Image from 'next/image';
import { Patient } from '@/types/patient';
import { fetchPatients } from '@/lib/api';

export default function PatientProfileCard() {
    const [jessicaTaylor, setJessicaTaylor] = useState<Patient | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadJessicaTaylor = async () => {
            try {
                setLoading(true);
                const patients = await fetchPatients();
                
                const jessica = patients.find(p => p.name === "Jessica Taylor");
                setJessicaTaylor(jessica || null);
            } catch (error) {
                console.error('Error loading patient data:', error);
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
            <div className="bg-white rounded-[16px] p-7">
                <p className='text-[#707070] text-center py-8'>Loading patient information...</p>
            </div>
        );
    }

    if (!jessicaTaylor) {
        return (
            <div className="bg-white rounded-[16px] p-7">
                <p className='text-[#707070] text-center py-8'>Patient not found</p>
            </div>
        );
    }

    // Format date of birth
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    return (
        <div className="bg-white rounded-[16px] p-7">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
                    <img
                        src={jessicaTaylor.profile_picture}
                        alt={jessicaTaylor.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <h2 className="font-extrabold text-[24px] text-[#072635] text-center mb-8">
                {jessicaTaylor.name}
            </h2>

            {/* Information List */}
            <div className="space-y-6">
                {/* Date of Birth */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="/BirthIcon.svg" alt='birth icon' />
                    </div>
                    <div>
                        <p className="text-[#072635] text-[14px] leading-[19px] font-medium">
                            Date Of Birth
                        </p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {formatDate(jessicaTaylor.date_of_birth)}
                        </p>
                    </div>
                </div>

                {/* Gender */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image 
                            width={42} 
                            height={42} 
                            src={jessicaTaylor.gender === "Female" ? "/FemaleIcon.svg" : "/MaleIcon.svg"} 
                            alt='gender icon' 
                        />
                    </div>
                    <div>
                        <p className="text-[#072635] text-[14px] leading-[19px] font-medium">
                            Gender
                        </p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {jessicaTaylor.gender}
                        </p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="/PhoneIcon.svg" alt='phone icon' />
                    </div>
                    <div>
                        <p className="text-sm text-[#072635] text-[14px] leading-[19px] font-medium">
                            Contact Info.
                        </p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {jessicaTaylor.phone_number}
                        </p>
                    </div>
                </div>

                {/* Emergency Contacts */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="/PhoneIcon.svg" alt='phone icon' />
                    </div>
                    <div>
                        <p className="text-sm text-[#072635] text-[14px] leading-[19px] font-medium">
                            Emergency Contacts
                        </p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {jessicaTaylor.emergency_contact}
                        </p>
                    </div>
                </div>

                {/* Insurance Provider */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="/InsuranceIcon.svg" alt='insurance icon' />
                    </div>
                    <div>
                        <p className="text-sm text-[#072635] text-[14px] leading-[19px] font-medium">
                            Insurance Provider
                        </p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {jessicaTaylor.insurance_type}
                        </p>
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="mt-8 w-4/6 mx-auto">
                <Button onClick={handleShowAllInfo}>
                    Show All Information
                </Button>
            </div>
        </div>
    );
}