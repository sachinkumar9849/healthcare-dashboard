import type { Metadata } from 'next';
import { Manrope } from 'next/font/google'; // Changed from Inter to Manrope
import './globals.css';
import Header from '@/components/Header';

// Load Manrope font from Google Fonts
const manrope = Manrope({ 
  subsets: ['latin'],
  display: 'swap',

  weight: ['400', '500', '600', '700', '800'],
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
      <body style={{background:"#F6F7F8", padding:"20px"}} className={manrope.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}