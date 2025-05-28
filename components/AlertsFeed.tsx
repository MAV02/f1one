'use client';

import { useEffect, useState } from 'react';

type Props = {
  session: string;
};

type Alert = {
  time: string;
  message: string;
};

export default function AlertsFeed({ session }: Props) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString();
      const randomMsg = [
        '🚨 Yellow flag in Sector 2',
        '🔁 Pit stop for VER',
        '💨 Fastest Lap by HAM',
        '📢 Team radio from LEC',
        '🔥 Engine smoke reported from TSU',
      ];
      const newAlert: Alert = {
        time: now,
        message: randomMsg[Math.floor(Math.random() * randomMsg.length)],
      };
      setAlerts((prev) => [newAlert, ...prev].slice(0, 10));
    }, 7000);

    return () => clearInterval(interval);
  }, [session]);

  return (
    <div className="space-y-2 text-sm">
      {alerts.map((alert, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded p-2 flex justify-between items-center"
        >
          <span>{alert.message}</span>
          <span className="text-gray-400 text-xs">{alert.time}</span>
        </div>
      ))}
    </div>
  );
}
