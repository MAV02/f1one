'use client';

import { useState } from 'react';
import AlertsFeed from '@/components/AlertsFeed';
import TrackMap from '@/components/TrackMap';
import SessionSwitcher from '@/components/SessionSwitcher';

export default function DashboardPage() {
  const [session, setSession] = useState('Race');

  return (
    <div className="px-4 py-6">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">ONEF1 Live Dashboard 🏁</h1>
        <SessionSwitcher session={session} setSession={setSession} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <TrackMap session={session} />
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Live Alerts</h2>
            <AlertsFeed session={session} />
          </div>
        </div>

        <div className="md:col-span-1 space-y-6">
          <div className="bg-gray-900 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Pro Tools</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>🔐 AI Strategy Assistant</li>
              <li>🎯 Head-to-Head Simulator</li>
              <li>📦 Export Race Summary</li>
              <li>🔔 Watchlist Alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
