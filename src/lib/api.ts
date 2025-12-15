import { Patient } from '@/types/patient';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_USERNAME = process.env.NEXT_PUBLIC_API_USERNAME;
const API_PASSWORD = process.env.NEXT_PUBLIC_API_PASSWORD;

// Create Basic Auth token
const createAuthToken = (username: string, password: string): string => {
  const credentials = `${username}:${password}`;
  // Encode to base64
  if (typeof window !== 'undefined') {
    return btoa(credentials);
  } else {
    // For server-side rendering
    return Buffer.from(credentials).toString('base64');
  }
};

export const fetchPatients = async (): Promise<Patient[]> => {
  try {
    if (!API_URL || !API_USERNAME || !API_PASSWORD) {
      throw new Error('API configuration is missing');
    }

    const authToken = createAuthToken(API_USERNAME, API_PASSWORD);

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${authToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Disable caching for fresh data
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Patient[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};