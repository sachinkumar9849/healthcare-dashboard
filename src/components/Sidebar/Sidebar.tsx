'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Title from '../common/Title';
import { Patient } from '@/types/patient';
import { fetchPatients } from '@/lib/api';

const Sidebar = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPatients = async () => {
            try {
                setLoading(true);
                const data = await fetchPatients();
                setPatients(data);
            } catch (err) {
                setError('Failed to load patients');
             
            } finally {
                setLoading(false);
            }
        };

        loadPatients();
    }, []);

    if (loading) {
        return (
            <div className='bg-white rounded-[16px] p-4'>
                <div className="flex justify-between items-center mb-5">
                    <Title title="Patients" />
                    <Image src="/search.svg" alt="search" width={18} height={18} />
                </div>
                <p className='text-[#707070] text-center py-4'>Loading patients...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='bg-white rounded-[16px] p-4'>
                <div className="flex justify-between items-center mb-5">
                    <Title title="Patients" />
                    <Image src="/search.svg" alt="search" width={18} height={18} />
                </div>
                <p className='text-red-500 text-center py-4'>{error}</p>
            </div>
        );
    }

    return (
        <div className='bg-white rounded-[16px] p-4 h-screen flex flex-col'>
            <div className="flex justify-between items-center mb-5">
                <Title title="Patients" />
                <Image src="/search.svg" alt="search" width={18} height={18} />
            </div>
            <ul className='overflow-y-auto flex-1 pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-black [&::-webkit-scrollbar-thumb]:rounded-full'>
                {patients.map((patient, index) => (
                    <li key={index} className='flex justify-between items-center mb-5'>
                        <div className="flex items-center">
                            <Image 
                                src={patient?.profile_picture || "/noImage.jpg"} 
                                width={48} 
                                height={48} 
                               alt='img'
                                className='rounded-full'
                            />
                            <div className="ml-2">
                                <p className='text-[#072635] text-[14px] font-bold'>
                                    {patient.name}
                                </p>
                                <p className='text-[14px] leading-[19px] text-[#707070]'>
                                    {patient.gender}, {patient.age}
                                </p>
                            </div>
                        </div>
                        <Image
                            className='mt-2' 
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