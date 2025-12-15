"use client";
import React from 'react'
import Button from '../common/Button';
import Image from 'next/image';

export default function PatientProfileCard() {
    const patientInfo = {
        name: "Jessica Taylor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
        dateOfBirth: "August 23, 1996",
        gender: "Female",
        contactInfo: "(415) 555-1234",
        emergencyContacts: "(415) 555-5678",
        insuranceProvider: "Sunrise Health Assurance"
    };

    const handleShowAllInfo = () => {
        console.log("Show all information clicked");
        alert("Showing all information...");
    };

    return (
        <div className="bg-white  rounded-[16px] p-7">

            {/* Profile Image */}
            <div className="flex justify-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200">
                    <img
                        src={patientInfo.image}
                        alt={patientInfo.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <h2 className="font-extrabold text-[24px] text-[#072635] text-center mb-8">
                {patientInfo.name}
            </h2>

            {/* Information List */}
            <div className="space-y-6">
                {/* Date of Birth */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                       <Image width={42} height={42} src="BirthIcon.svg" alt='birthicons'/>
                    </div>
                    <div>
                        <p className=" text-[#072635] text-[14px] leading-[19px] font-medium">Date Of Birth</p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {patientInfo.dateOfBirth}
                        </p>
                    </div>
                </div>

                {/* Gender */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="FemaleIcon.svg" alt='birthicons'/>
                    </div>
                    <div>
                        <p className=" text-[#072635] text-[14px] leading-[19px] font-medium">Gender</p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {patientInfo.gender}
                        </p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="PhoneIcon.svg" alt='birthicons'/>
                    </div>
                    <div>
                        <p className="text-sm text-[#072635] text-[14px] leading-[19px] font-medium">Contact Info.</p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {patientInfo.contactInfo}
                        </p>
                    </div>
                </div>

                {/* Emergency Contacts */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                       <Image width={42} height={42} src="PhoneIcon.svg" alt='birthicons'/>
                    </div>
                    <div>
                        <p className="text-sm text-[#072635] text-[14px] leading-[19px] font-medium">Emergency Contacts</p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {patientInfo.emergencyContacts}
                        </p>
                    </div>
                </div>

                {/* Insurance Provider */}
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                        <Image width={42} height={42} src="InsuranceIcon.svg" alt='birthicons'/>
                    </div>
                    <div>
                        <p className="text-sm text-[#072635] text-[14px] leading-[19px] font-medium">Insurance Provider</p>
                        <p className="font-bold text-[#072635] text-[14px] leading-[19px] mt-1">
                            {patientInfo.insuranceProvider}
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