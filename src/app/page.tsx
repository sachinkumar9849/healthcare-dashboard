/**
 * Home Page - Main Entry Point
 * Server Component that imports the client-side Dashboard
 */

import Dashboard from "@/components/Dashboard/Dashboard";



export default function Home() {
  return (
    <main className="bg-[#F6F7F8]">
      <Dashboard />
    </main>
  );
}