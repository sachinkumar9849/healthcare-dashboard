/**
 * Home Page - Main Entry Point
 * Server Component that imports the client-side Dashboard
 */

import Dashboard from "@/components/Dashboard/Dashboard";



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Dashboard />
    </main>
  );
}