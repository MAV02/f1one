// components/AlertsFeed.tsx
'use client';

import React, { useEffect, useState } from 'react';

type Alert = {
  id: number;
  type: 'Yellow Flag' | 'Red Flag' | 'Crash' | 'Pit Stop' | 'Weather';
  message: string;
  timestamp: string;
};

const mockAlerts: Alert[] = [
  {
    id: 1,
    type: 'Yellow Flag',
    message: 'Sector 2: Yellow flag due to debris on track.',
    timestamp: '2025-05-29T10:20:00Z',
  },
  {
    id: 2,
    type: 'Pit Stop',
    message: 'Car #44 enters the pits for a tire change.',
    timestamp: '2025-05-29T10:22:10Z',
  },
  {
    id: 3,
    type: 'Crash',
    message: 'Car #11 crashed in Turn 5. Safety car deployed.',
    timestamp: '2025-05-29T10:25:30Z',
  },
];

const AlertsFeed = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    // Simulate loading alerts
    setTimeout(() => {
      setAlerts(mockAlerts);
    }, 500);
  }, []);

  return (
    <div className="bg-black text-white p-4 rounded-xl shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-3">Live Track Alerts</h2>
      <ul className="space-y-2">
        {alerts.map((alert) => (
          <li
            key={alert.id}
            className="border-l-4 pl-4 py-2 bg-gray-900 rounded-md"
            style={{
              borderColor:
                alert.type === 'Yellow Flag'
                  ? 'yellow'
                  : alert.type === 'Red Flag'
                  ? 'red'
                  : alert.type === 'Crash'
                  ? '#ff5555'
                  : alert.type === 'Pit Stop'
                  ? '#8888ff'
                  : '#55ccff',
            }}
          >
            <div className="text-sm text-gray-400">
              {new Date(alert.timestamp).toLocaleTimeString()}
            </div>
            <div className="text-md font-medium">{alert.type}</div>
            <div className="text-sm">{alert.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertsFeed;
