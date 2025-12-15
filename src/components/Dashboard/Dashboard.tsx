"use client";
import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import History from './History'
import DiagnosticList from './DiagnosticList'
import PatientProfileCard from './PatientProfileCard'
import { Patient } from '@/types/patient'

const Dashboard = () => {
   const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const handlePatientSelect = (patient: Patient) => {
    setSelectedPatient(patient);
  };
  return (
    <div className='grid grid-cols-12 gap-10'>
      <div className="col-span-3">
       <Sidebar 
          onPatientSelect={handlePatientSelect}
          selectedPatient={selectedPatient}
        />
      </div>
      <div className="col-span-6">
 <History patient={selectedPatient} />
      <DiagnosticList patient={selectedPatient} />
      </div>
      <div className="col-span-3">
        <PatientProfileCard/>
      </div>
    </div>
  )
}

export default Dashboard