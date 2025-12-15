/**
 * API Layer - Handles all data fetching
 * Implements Basic Authentication as per API documentation
 */

import { Patient } from '@/types/patient';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 
                'https://fedskillstest.coalitiontechnologies.workers.dev';

/**
 * Fetches patient data from the Coalition Technologies API
 * Uses Basic Authentication with Base64 encoded credentials
 * 
 * @returns Promise<Patient | null> - Jessica Taylor's patient data or null on error
 */
export async function fetchPatientData(): Promise<Patient | null> {
  try {
    // Get credentials from environment or use defaults
    const username = process.env.NEXT_PUBLIC_API_USERNAME || 'coalition';
    const password = process.env.NEXT_PUBLIC_API_PASSWORD || 'skills-test';
    
    // Encode credentials for Basic Auth
    // btoa() converts string to Base64
    const credentials = btoa(`${username}:${password}`);
    
    // Make API request with Authorization header
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Disable Next.js caching for fresh data
    });
    
    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Parse JSON response
    const data: Patient[] = await response.json();
    
    // Filter for Jessica Taylor as per requirements
    const jessicaTaylor = data.find(
      patient => patient.name === 'Jessica Taylor'
    );
    
    if (!jessicaTaylor) {
      console.error('Jessica Taylor not found in patient data');
      return null;
    }
    
    return jessicaTaylor;
    
  } catch (error) {
    // Log error for debugging
    console.error('Error fetching patient data:', error);
    
    // Return null to handle gracefully in UI
    return null;
  }
}

/**
 * Validates patient data structure
 * @param data - Patient data to validate
 * @returns boolean - True if data is valid
 */
export function validatePatientData(data: any): data is Patient {
  return (
    data &&
    typeof data.name === 'string' &&
    typeof data.gender === 'string' &&
    Array.isArray(data.diagnosis_history) &&
    Array.isArray(data.diagnostic_list) &&
    Array.isArray(data.lab_results)
  );
}