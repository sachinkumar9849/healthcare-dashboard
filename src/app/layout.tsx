/**
 * Root Layout Component
 * Wraps all pages with common structure and metadata
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Load Inter font from Google Fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Healthcare Dashboard | Patient Management',
  description: 'Advanced healthcare dashboard for patient diagnosis and health monitoring',
  keywords: 'healthcare, patient, diagnosis, medical dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}