/**
 * Main Dashboard Container Component
 * Manages data fetching, loading states, and layout
 */

'use client'; // Client Component (uses hooks)

import React, { useState, useEffect } from 'react';
import { fetchPatientData } from '@/lib/api';
import { Patient } from '@/types/patient';
// import DiagnosisHistory from './DiagnosisHistory';
// import DiagnosticList from './DiagnosticList';
// import PatientProfile from '../Sidebar/PatientProfile';
// import LabResults from '../Sidebar/LabResults';

export default function Dashboard() {
  // State management
  const [patientData, setPatientData] = useState<Patient | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch patient data on component mount
  useEffect(() => {
    const loadPatientData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchPatientData();
        
        if (!data) {
          setError('Patient data not found. Please try again later.');
          return;
        }
        
        setPatientData(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        setError(`Failed to load patient data: ${errorMessage}`);
        console.error('Dashboard error:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, []); // Empty dependency array = run once on mount

  // Loading State UI
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-teal-500 mb-4"></div>
        <p className="text-xl text-gray-600">Loading patient data...</p>
      </div>
    );
  }

  // Error State UI
  if (error || !patientData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md text-center">
          <svg
            className="w-12 h-12 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <p className="text-xl font-semibold text-red-800 mb-2">Error Loading Data</p>
          <p className="text-red-600">{error || 'An unexpected error occurred'}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Success State - Main Dashboard UI
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header (optional) */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-red-900">Patient Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive health monitoring and diagnosis tracking</p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Content Area (2/3 width on large screens) */}
          {/* <div className="lg:col-span-2 space-y-6">
            <DiagnosisHistory data={patientData.diagnosis_history} />
            <DiagnosticList diagnostics={patientData.diagnostic_list} />
          </div> */}

          {/* Sidebar (1/3 width on large screens) */}
          {/* <div className="space-y-6">
            <PatientProfile patient={patientData} />
            <LabResults results={patientData.lab_results} />
          </div> */}
        </div>
      </div>
    </div>
  );
}