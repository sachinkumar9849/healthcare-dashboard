import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import History from './History'
import DiagnosticList from './DiagnosticList'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 gap-10'>
      <div className="col-span-3">
        <Sidebar/>
      </div>
      <div className="col-span-6">
      <History/>
      <DiagnosticList/>
      </div>
    </div>
  )
}

export default Dashboard