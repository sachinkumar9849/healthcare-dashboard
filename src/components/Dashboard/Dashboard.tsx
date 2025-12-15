import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import History from './History'
import DiagnosticList from './DiagnosticList'
import PatientProfileCard from './PatientProfileCard'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 gap-10'>
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-6">
        <History />
        <DiagnosticList />
      </div>
      <div className="col-span-3">
        <PatientProfileCard/>
      </div>
    </div>
  )
}

export default Dashboard