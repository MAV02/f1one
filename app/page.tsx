'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 opacity-20 animate-pulse blur-3xl" />
      </div>

      {/* Foreground content */}
      <div className="z-10 text-center flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">🏁 Welcome to ONEF1</h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-8 text-center max-w-xl">
          Your ultimate Formula 1 toolkit – reports, tickets, and team collaboration in one place.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Link
            href="/report"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
          >
            Generate Report
          </Link>
          <Link
            href="/tickets"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded"
          >
            View Tickets
          </Link>
          {!session && (
            <Link
              href="/login"
              className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded"
            >
              Login
            </Link>
          )}
        </div>

        {session && (
          <p className="text-sm text-gray-400">
            Logged in as <span className="font-semibold">{session.user?.email}</span>
          </p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 z-10 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ONEF1. All rights reserved.
      </footer>
    </main>
  );
}
